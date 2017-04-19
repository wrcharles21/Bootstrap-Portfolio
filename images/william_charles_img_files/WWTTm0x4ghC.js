if (self.CavalryLogger) { CavalryLogger.start_js(["D4hLe"]); }

__d("GamesGogglesSwitch",[],(function a(b,c,d,e,f,g){var h=false,i={enable:function j(){h=true;},isEnabled:function j(){return h;}};f.exports=i;}),null);
__d('VisibilityTrackingHelper',['Arbiter','DesktopHscrollUnitEventConstants','getViewportDimensions','Event'],(function a(b,c,d,e,f,g){var h={getEventListeners:function i(j){return [c('Event').listen(document,'DOMContentLoaded',j),c('Event').listen(window,'scroll',j),c('Event').listen(window,'resize',j),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,j)];},getViewportInfo:function i(){return c('getViewportDimensions')();}};f.exports=h;}),null);
__d('VisibilityTracking',['Banzai','BrowseClientEventLogger','DataAttributeUtils','ErrorUtils','ScriptPath','SubscriptionsHandler','Visibility','VisibilityTrackingHelper','collectDataAttributes','getElementPosition','pageID','throttle'],(function a(b,c,d,e,f,g){var h='visibility_tracking',i='[data-vistracking]',j=500,k=50,l=50,m=50,n=50,o=0;function p(q){'use strict';q=q||{};if(!q.bypass_banzai_check&&!c('Banzai').isEnabled(h))return;this.visibleElementInfo={};this.getDataFromConfig(q);c('Visibility').addListener(c('Visibility').VISIBLE,c('ErrorUtils').guard(function(){return this.fireEvent('browser');}.bind(this),'VisibilityTracking:visible',this));c('Visibility').addListener(c('Visibility').HIDDEN,c('ErrorUtils').guard(function(){return this.clearAllVisibleElements('browser');}.bind(this),'VisibilityTracking:hidden',this));c('ScriptPath').subscribe(c('ErrorUtils').guard(function(){return this.updateVisibleElements();}.bind(this),'VisibilityTracking:scriptPath',this));c('Banzai').subscribe(c('Banzai').SHUTDOWN,c('ErrorUtils').guard(function(){return this.onUnload();}.bind(this),'VisibilityTracking:banzaiShutdown',this));this.fireEventCallback=c('throttle').acrossTransitions(c('ErrorUtils').guard(function(event){return this.fireEvent(event);}.bind(this),'VisibilityTracking:fireEventCallback',this),this.timeout,this);this.listeners=new (c('SubscriptionsHandler'))();c('VisibilityTrackingHelper').getEventListeners(function(){return this.fireEventCallback();}.bind(this)).forEach(function(r){this.listeners.addSubscriptions(r);},this);if(this.extraInit)c('ErrorUtils').applyWithGuard(this.extraInit.bind(this));}p.prototype.getDataFromConfig=function(q){'use strict';this.config=q;this.root=q.root||document.documentElement;this.selector=q.selector||i;this.timeout=typeof q.timeout!=='undefined'?q.timeout:j;this.minOffsetVisibleFromBottom=typeof q.minOffsetVisibleFromBottom!=='undefined'?q.minOffsetVisibleFromBottom:k;this.minOffsetVisibleFromTop=typeof q.minOffsetVisibleFromTop!=='undefined'?q.minOffsetVisibleFromTop:l;this.minOffsetVisibleFromLeft=typeof q.minOffsetVisibleFromLeft!=='undefined'?q.minOffsetVisibleFromLeft:m;this.minOffsetVisibleFromRight=typeof q.minOffsetVisibleFromRight!=='undefined'?q.minOffsetVisibleFromRight:n;this.handleAllHiddenEvents=typeof q.handleAllHiddenEvents!=='undefined'?q.handleAllHiddenEvents:false;this.handleAllVisibleEvents=typeof q.handleAllVisibleEvents!=='undefined'?q.handleAllVisibleEvents:false;this.cacheTrackedElements=typeof q.cacheTrackedElements!=='undefined'?q.cacheTrackedElements:false;};p.prototype.getAllTrackedElements=function(){'use strict';if(!this.allTrackedElements){this.allTrackedElements={};var q=[];if(this.config.is_xtrackable){q=c('DataAttributeUtils').getXTrackableElements();}else if(this.root.querySelectorAll)q=this.root.querySelectorAll(this.selector);for(var r=0;r<q.length;r++){var s=this.getElementID(q[r]);this.allTrackedElements[s]=q[r];}}return this.allTrackedElements;};p.prototype.refreshAllTrackedElements=function(){'use strict';delete this.allTrackedElements;return this.getAllTrackedElements();};p.prototype.getDataToLog=function(q){'use strict';var r=Object.assign(c('collectDataAttributes')(q,['gt']).gt,{client_time:Date.now()/1000,time_spent_id:c('pageID'),script_path:c('ScriptPath').getScriptPath()});return r;};p.prototype.getElementID=function(q){'use strict';var r=q.$VisibilityTracking1;if(r)return r;q.$VisibilityTracking1=++o;return o;};p.prototype.sendDataToLog=function(q){'use strict';c('BrowseClientEventLogger').maybeLogVisiblityEvent(q);c('Banzai').post(h,q);};p.prototype.fireEvent=function(){var q=arguments.length<=0||arguments[0]===undefined?'default':arguments[0];'use strict';var r=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var s in r){var t=r[s],u=c('VisibilityTrackingHelper').getViewportInfo(),v=this.isVisible(t,u);if(!v&&(s in this.visibleElementInfo||this.handleAllHiddenEvents)){this.handleEvent(t,{name:'hidden',cause:q});}else if(v&&(!(s in this.visibleElementInfo)||this.handleAllVisibleEvents))this.handleEvent(t,{name:'visible',cause:q});}this.clearUntrackedVisibleElements();};p.prototype.isVisible=function(q,r){'use strict';var s=c('getElementPosition')(q);return (s.x||s.y||s.width||s.height)&&s.y+s.height>=this.minOffsetVisibleFromTop&&s.y<=r.height-this.minOffsetVisibleFromBottom&&s.x+s.width>=this.minOffsetVisibleFromLeft&&s.x<=r.width-this.minOffsetVisibleFromRight;};p.prototype.handleEvent=function(q,event){'use strict';var r=this.getElementID(q),s=this.getDataToLog(q),t=void 0;if(event.name==='visible'){var u=Math.floor(Date.now()/1000);t=c('pageID').concat(':',u.toString(),':',this.getElementID(q).toString());this.visibleElementInfo[r]={visibility_id:t,elem:q};}else if(event.name==='hidden'){if(r in this.visibleElementInfo){t=this.visibleElementInfo[r].visibility_id;delete this.visibleElementInfo[r];}if(event.cause==='browser')return;}this.sendDataToLog(Object.assign(s,{event:event.name,visibility_id:t}));};p.prototype.clearUntrackedVisibleElements=function(){'use strict';var q=this.getAllTrackedElements();for(var r in this.visibleElementInfo)if(!(r in q)){var s=this.visibleElementInfo[r];if(s.elem)this.handleEvent(s.elem,{name:'hidden',cause:'removed'});}};p.prototype.clearAllVisibleElements=function(){var q=arguments.length<=0||arguments[0]===undefined?'default':arguments[0];'use strict';var r=this.getAllTrackedElements();for(var s in r)if(s in this.visibleElementInfo)this.handleEvent(r[s],{name:'hidden',cause:q});this.clearUntrackedVisibleElements();};p.prototype.updateVisibleElements=function(){'use strict';this.clearAllVisibleElements();this.fireEvent();};p.prototype.refreshAndFireEvent=function(event){'use strict';this.refreshAllTrackedElements();this.fireEventCallback(event);};p.prototype.onUnload=function(){'use strict';this.clearAllVisibleElements();if(this.listeners){this.listeners.release();this.listeners=null;}if(this.extraCleanup)c('ErrorUtils').applyWithGuard(this.extraCleanup.bind(this));};p.init=function(q){'use strict';return new p(q);};f.exports=p;}),null);
__d('GamesImpressionTracker',['cx','Arbiter','Banzai','Event','GamesGogglesSwitch','VisibilityTracking','throttle'],(function a(b,c,d,e,f,g,h){var i,j,k='data-gamesegoimp',l='data-gamesrankedimp',m=1000;function n(s){if(c('GamesGogglesSwitch').isEnabled())s.className=s.className+' '+"_1z5y";}function o(s){return function(){if(s){s();s=null;}};}i=babelHelpers.inherits(p,c('VisibilityTracking'));j=i&&i.prototype;p.prototype.handleEvent=function(s,event){'use strict';if(event.name==='visible'){var t=s.getAttribute(l);s.removeAttribute(l);if(t){n(s);t&&c('Banzai').post('games_ranked_imp',{data:t});}c('Event').listen(s,'mouseover',o(function(){c('Banzai').post('games_mouseover',{data:t});c('Event').listen(s,'mouseout',o(function(){c('Banzai').post('games_mouseout',{data:t});}));}));}};function p(){'use strict';i.apply(this,arguments);}var q=new p({selector:'[data-gamesrankedimp]',handleAllVisibleEvents:true,cacheTrackedElements:true}),r=c('throttle').acrossTransitions(function(){return q.fireEventCallback();},m,null);q.listeners.addSubscriptions(c('Event').listen(document,'mousemove',r),c('Event').listen(document,'click',r),c('Arbiter').subscribe('games_unit_loaded',function(){return q.refreshAllTrackedElements();}));}),null);
__d('legacy:async-signal',['AsyncSignal'],(function a(b,c,d,e,f,g){b.AsyncSignal=c('AsyncSignal');}),3);
__d('EgoUnitSlideInsert',['csx','cx','Animation','CSS','DataStore','DOM','Ease','Event','Parent','TidyArbiterMixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j='sliding',k="EgoSlider/End",l=babelHelpers['extends']({isSliding:function m(n){return c('DataStore').get(n,j);},runAfterSlide:function m(n,o){var p=c('tidyEvent')(l.subscribe(k,function(q,r){if(r===n){p&&p.unsubscribe();o();}}));},registerSlide:function m(n,o){c('Event').listen(n,'click',function(p){var q=c('Parent').bySelector(p.getTarget(),"._5cl_");if(!q)return;var r=c('Parent').byClass(n,'ego_unit'),s=0,t=c('Parent').byClass(r,'ego_unit_container'),u=c('DOM').scry(t,'.ego_unit')[0];if(u===r)if(r.nextSibling){r.nextSibling.style.paddingTop='0px';r.nextSibling.style.borderTop='0px';}c('CSS').addClass(r,"_5cl-");c('DataStore').set(r,j,true);new (c('Animation'))(r).to('height',0).to('padding-top',s).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(c('Ease').circOut).duration(300).checkpoint(1,function(){c('DOM').appendContent(t,r);c('DOM').prependContent(r,o);c('DataStore').remove(r,j);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){l.inform(k,r);}).go();});}},c('TidyArbiterMixin'));f.exports=l;}),null);
__d('NetEgo',['csx','Animation','Arbiter','CSS','DOM','EgoUnitSlideInsert','PageLikeConstants','Parent','URI','ge'],(function a(b,c,d,e,f,g,h){var i={setup:function j(k){c('Arbiter').subscribe([c('PageLikeConstants').LIKED,'FriendRequest/sending'],function(l,m){if(k==m.profile_id&&m.origin=='hovercard'||k==m.uid){var n=c('ge')(document.body,'.ego_unit_container');if(n){var o=c('DOM').scry(n,'.ego_unit'),p=o.length;for(var q=0;q<p;q++){var r=o[q].getAttribute('data-ego-fbid');if(r==k){var s=c('DOM').scry(o[q],'.ego_action a')[0];if(s)s.click();break;}}}}});},updateXids:function j(k,l){if(k.length==0&&l.length==0)return;var m=function v(w){return function(x){var y=x.getAttribute(w);if(!y)return false;var z=new (c('URI'))(y).getQueryData();return !!z.xids;};},n=c('DOM').scry(document.body,'.ego_section a');n=n.filter(m('ajaxify'));if(n.length==0)return;var o=new (c('URI'))(n[0].getAttribute('ajaxify')),p=o.getQueryData();if(!p.xids)return;var q=null;try{q=JSON.parse(p.xids);}catch(v){return;}for(var r=0;r<l.length;++r)q[l[r]]=1;var s=JSON.stringify(q),t=function v(w,x){o=new (c('URI'))(w.getAttribute(x));p=o.getQueryData();p.xids=s;o.setQueryData(p);w.setAttribute(x,o.toString());};for(r=0;r<n.length;++r)t(n[r],'ajaxify');var u=c('DOM').scry(document.body,'.ego_unit form');u=u.filter(m('action'));for(r=0;r<u.length;++r)t(u[r],'action');},replaceUnit:function j(k,l,m,n){i.replaceUnitCheckParent(k,l,m,n,'');},replaceUnitCheckParent:function j(k,l,m,n,o){var p=c('Parent').byClass(k,'ego_unit_container');if(p&&c('EgoUnitSlideInsert').isSliding(k)){var q=c('DOM').appendContent(p,l);q.forEach(c('CSS').hide);c('EgoUnitSlideInsert').runAfterSlide(k,i._replaceUnitElement.bind(null,k,q,o));}else i._replaceUnit(k,l,m,n,o);},_replaceUnit:function j(k,l,m,n,o){var p=c('DOM').insertAfter(k,l);p.forEach(c('CSS').hide);if(n!==undefined&&n!==null){setTimeout(function(){i._replaceUnitFadeout(k,p,m,o);},n);}else i._replaceUnitFadeout(k,p,m,o);},_replaceUnitFadeout:function j(k,l,m,n){if(m){new (c('Animation'))(k).from('opacity',1).to('opacity',0).duration(m).checkpoint(1,function(){i._replaceUnitElement(k,l,n);}).go();}else i._replaceUnitElement(k,l,n);},_replaceUnitElement:function j(k,l,m){var n=c('CSS').hasClass(k,'ego_unit')?k.parentNode:null;if(n&&n.tagName==='LI')n=c('DOM').scry(k.parentNode,'^ul')[0];c('DOM').remove(k);if(l.length)l.forEach(c('CSS').show);c('Arbiter').inform('netego_replacedUnit',{serializedData:m,numUnitsRemained:n.childNodes.length});i.clearHeader();},clearHeader:function j(){var k=c('DOM').scry(document.body,'.ego_column'),l=[];for(var m=0;m<k.length;++m)l=l.concat(c('DOM').scry(k[m],'.uiHeader'));for(m=0;m<l.length;++m){var n=l[m].nextSibling,o=c('DOM').find(n,"._2xq");if(!o)o=n;if(!o||o.childNodes.length===0){c('DOM').remove(l[m]);}else if(o.childNodes.length===1){var p=o.childNodes[0];if(c('CSS').hasClass(p,'ego_appended_units')&&p.childNodes.length===0)c('DOM').remove(l[m]);}}}};f.exports=i;}),null);