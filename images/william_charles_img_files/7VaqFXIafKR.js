if (self.CavalryLogger) { CavalryLogger.start_js(["aTZBT"]); }

__d('CompositeDraftDecorator',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List,i='.';function j(m){this.$CompositeDraftDecorator1=m.slice();}j.prototype.getDecorations=function(m,n){var o=Array(m.getText().length).fill(null);this.$CompositeDraftDecorator1.forEach(function(p,q){var r=0,s=p.strategy,t=function u(v,w){if(k(o,v,w)){l(o,v,w,q+i+r);r++;}};s(m,t,n);});return h(o);};j.prototype.getComponentForKey=function(m){var n=parseInt(m.split(i)[0],10);return this.$CompositeDraftDecorator1[n].component;};j.prototype.getPropsForKey=function(m){var n=parseInt(m.split(i)[0],10);return this.$CompositeDraftDecorator1[n].props;};function k(m,n,o){for(var p=n;p<o;p++)if(m[p]!=null)return false;return true;}function l(m,n,o,p){for(var q=n;q<o;q++)m[q]=p;}f.exports=j;}),null);
__d('EmoticonSpan.react',['cx','DraftEntity','EmojiImageURL','EmoticonsList','React','SupportedFBEmoji'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.size,m=c('DraftEntity').get(this.props.entityKey).getData(),n=c('EmoticonsList').emoji[m.type],o=c('SupportedFBEmoji')[n]?c('EmojiImageURL').getFBEmojiURL(n,l):c('EmojiImageURL').getFBEmojiExtendedURL(n,l);return c('React').createElement('span',{className:"_3gl1 _5zz4",style:{backgroundImage:'url('+o+')',backgroundSize:l+'px '+l+'px',height:l+'px',width:l+'px'}},c('React').createElement('span',{className:"_ncl"},this.props.children));};function k(){i.apply(this,arguments);}k.defaultProps={size:16};f.exports=k;}),null);
__d('HashtagSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',babelHelpers['extends']({},this.props,{'data-offset-key':this.props.offsetKey,className:"_5zk7",spellCheck:false}),this.props.children);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('MentionSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',babelHelpers['extends']({},this.props,{'data-offset-key':this.props.offsetKey,className:"_247o",spellCheck:false}),this.props.children);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('WeakMentionSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',{'data-offset-key':this.props.offsetKey,className:"_whq",spellCheck:false},this.props.children);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('getEntityMatcher',['DraftEntity'],(function a(b,c,d,e,f,g){var h=c('DraftEntity').get;function i(j,k){var l=k||h;return function(m,n){m.findEntityRanges(function(o){var p=o.getEntity();return typeof p==='string'&&j(l(p));},n);};}f.exports=i;}),null);
__d('getHashtagMatches',['getHashtagRegex'],(function a(b,c,d,e,f,g){var h=c('getHashtagRegex')();function i(j,k){var l=j.getText(),m,n,o,p;while((m=h.exec(l))!==null){n=m.index+m[1].length;o=m[2];p=m[3];k(n,n+o.length+p.length);}}f.exports=i;}),null);
__d('getMentionsInputDecorator',['CompositeDraftDecorator','EmoticonSpan.react','HashtagSpan.react','MentionSpan.react','WeakMentionSpan.react','getEntityMatcher','getHashtagMatches'],(function a(b,c,d,e,f,g){var h;function i(){if(!h){var j=[{strategy:c('getEntityMatcher')(function(k){var l=k.getData();return k.getType()==='MENTION'&&l&&l.isWeak;}),component:c('WeakMentionSpan.react')},{strategy:c('getEntityMatcher')(function(k){return k.getType()==='MENTION';}),component:c('MentionSpan.react')},{strategy:c('getEntityMatcher')(function(k){return k.getType()==='EMOTICON';}),component:c('EmoticonSpan.react')},{strategy:c('getHashtagMatches'),component:c('HashtagSpan.react')}];h=new (c('CompositeDraftDecorator'))(j);}return h;}f.exports=i;}),null);
__d('sanitizeDraftText',[],(function a(b,c,d,e,f,g){'use strict';var h=new RegExp('\r','g');function i(j){return j.replace(h,'');}f.exports=i;}),null);
__d('BlockMapBuilder',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').OrderedMap,i={createFromArray:function j(k){return h(k.map(function(l){return [l.getKey(),l];}));}};f.exports=i;}),null);
__d('BlockTree',['immutable','emptyFunction','findRangesImmutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List,i=c('immutable').Repeat,j=c('immutable').Record,k=c('emptyFunction').thatReturnsTrue,l='-',m={start:null,end:null},n=j(m),o={start:null,end:null,decoratorKey:null,leaves:null},p=j(o),q={generate:function t(u,v,w){var x=v.getLength();if(!x)return h.of(new p({start:0,end:0,decoratorKey:null,leaves:h.of(new n({start:0,end:0}))}));var y=[],z=w?w.getDecorations(v,u):h(i(null,x)),aa=v.getCharacterList();c('findRangesImmutable')(z,s,k,function(ba,ca){y.push(new p({start:ba,end:ca,decoratorKey:z.get(ba),leaves:r(aa.slice(ba,ca).toList(),ba)}));});return h(y);},getFingerprint:function t(u){return u.map(function(v){var w=v.get('decoratorKey'),x=w!==null?w+'.'+(v.get('end')-v.get('start')):'';return ''+x+'.'+v.get('leaves').size;}).join(l);}};function r(t,u){var v=[],w=t.map(function(x){return x.getStyle();}).toList();c('findRangesImmutable')(w,s,k,function(x,y){v.push(new n({start:x+u,end:y+u}));});return h(v);}function s(t,u){return t===u;}f.exports=q;}),null);
__d('CharacterMetadata',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').Map,k=c('immutable').OrderedSet,l=c('immutable').Record,m=k(),n={style:m,entity:null},o=l(n);h=babelHelpers.inherits(p,o);i=h&&h.prototype;p.prototype.getStyle=function(){return this.get('style');};p.prototype.getEntity=function(){return this.get('entity');};p.prototype.hasStyle=function(s){return this.getStyle().has(s);};p.applyStyle=function(s,t){var u=s.set('style',s.getStyle().add(t));return p.create(u);};p.removeStyle=function(s,t){var u=s.set('style',s.getStyle().remove(t));return p.create(u);};p.applyEntity=function(s,t){var u=s.getEntity()===t?s:s.set('entity',t);return p.create(u);};p.create=function(s){if(!s)return q;var t={style:m,entity:null},u=j(t).merge(s),v=r.get(u);if(v)return v;var w=new p(u);r=r.set(u,w);return w;};function p(){h.apply(this,arguments);}var q=new p(),r=j([[j(n),q]]);p.EMPTY=q;f.exports=p;}),null);
__d('ContentBlock',['immutable','findRangesImmutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').List,k=c('immutable').Map,l=c('immutable').OrderedSet,m=c('immutable').Record,n=l(),o={key:'',type:'unstyled',text:'',characterList:j(),depth:0,data:k()},p=m(o);h=babelHelpers.inherits(q,p);i=h&&h.prototype;q.prototype.getKey=function(){return this.get('key');};q.prototype.getType=function(){return this.get('type');};q.prototype.getText=function(){return this.get('text');};q.prototype.getCharacterList=function(){return this.get('characterList');};q.prototype.getLength=function(){return this.getText().length;};q.prototype.getDepth=function(){return this.get('depth');};q.prototype.getData=function(){return this.get('data');};q.prototype.getInlineStyleAt=function(t){var u=this.getCharacterList().get(t);return u?u.getStyle():n;};q.prototype.getEntityAt=function(t){var u=this.getCharacterList().get(t);return u?u.getEntity():null;};q.prototype.findStyleRanges=function(t,u){c('findRangesImmutable')(this.getCharacterList(),r,t,u);};q.prototype.findEntityRanges=function(t,u){c('findRangesImmutable')(this.getCharacterList(),s,t,u);};function q(){h.apply(this,arguments);}function r(t,u){return t.getStyle()===u.getStyle();}function s(t,u){return t.getEntity()===u.getEntity();}f.exports=q;}),null);
__d('SelectionState',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').Record,k={anchorKey:'',anchorOffset:0,focusKey:'',focusOffset:0,isBackward:false,hasFocus:false},l=j(k);h=babelHelpers.inherits(m,l);i=h&&h.prototype;m.prototype.serialize=function(){return 'Anchor: '+this.getAnchorKey()+':'+this.getAnchorOffset()+', '+'Focus: '+this.getFocusKey()+':'+this.getFocusOffset()+', '+'Is Backward: '+String(this.getIsBackward())+', '+'Has Focus: '+String(this.getHasFocus());};m.prototype.getAnchorKey=function(){return this.get('anchorKey');};m.prototype.getAnchorOffset=function(){return this.get('anchorOffset');};m.prototype.getFocusKey=function(){return this.get('focusKey');};m.prototype.getFocusOffset=function(){return this.get('focusOffset');};m.prototype.getIsBackward=function(){return this.get('isBackward');};m.prototype.getHasFocus=function(){return this.get('hasFocus');};m.prototype.hasEdgeWithin=function(n,o,p){var q=this.getAnchorKey(),r=this.getFocusKey();if(q===r&&q===n){var s=this.getStartOffset(),t=this.getEndOffset();return o<=t&&s<=p;}if(n!==q&&n!==r)return false;var u=n===q?this.getAnchorOffset():this.getFocusOffset();return o<=u&&p>=u;};m.prototype.isCollapsed=function(){return this.getAnchorKey()===this.getFocusKey()&&this.getAnchorOffset()===this.getFocusOffset();};m.prototype.getStartKey=function(){return this.getIsBackward()?this.getFocusKey():this.getAnchorKey();};m.prototype.getStartOffset=function(){return this.getIsBackward()?this.getFocusOffset():this.getAnchorOffset();};m.prototype.getEndKey=function(){return this.getIsBackward()?this.getAnchorKey():this.getFocusKey();};m.prototype.getEndOffset=function(){return this.getIsBackward()?this.getAnchorOffset():this.getFocusOffset();};m.createEmpty=function(n){return new m({anchorKey:n,anchorOffset:0,focusKey:n,focusOffset:0,isBackward:false,hasFocus:false});};function m(){h.apply(this,arguments);}f.exports=m;}),null);
__d('generateRandomKey',[],(function a(b,c,d,e,f,g){'use strict';var h={},i=Math.pow(2,24);function j(){var k=void 0;while(k===undefined||Object.prototype.hasOwnProperty.call(h,k)||!isNaN(+k))k=Math.floor(Math.random()*i).toString(32);h[k]=true;return k;}f.exports=j;}),null);
__d('ContentState',['BlockMapBuilder','CharacterMetadata','ContentBlock','DraftEntity','immutable','SelectionState','generateRandomKey','sanitizeDraftText'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').List,k=c('immutable').Record,l=c('immutable').Repeat,m={entityMap:null,blockMap:null,selectionBefore:null,selectionAfter:null},n=k(m);h=babelHelpers.inherits(o,n);i=h&&h.prototype;o.prototype.getEntityMap=function(){return c('DraftEntity');};o.prototype.getBlockMap=function(){return this.get('blockMap');};o.prototype.getSelectionBefore=function(){return this.get('selectionBefore');};o.prototype.getSelectionAfter=function(){return this.get('selectionAfter');};o.prototype.getBlockForKey=function(p){var q=this.getBlockMap().get(p);return q;};o.prototype.getKeyBefore=function(p){return this.getBlockMap().reverse().keySeq().skipUntil(function(q){return q===p;}).skip(1).first();};o.prototype.getKeyAfter=function(p){return this.getBlockMap().keySeq().skipUntil(function(q){return q===p;}).skip(1).first();};o.prototype.getBlockAfter=function(p){return this.getBlockMap().skipUntil(function(q,r){return r===p;}).skip(1).first();};o.prototype.getBlockBefore=function(p){return this.getBlockMap().reverse().skipUntil(function(q,r){return r===p;}).skip(1).first();};o.prototype.getBlocksAsArray=function(){return this.getBlockMap().toArray();};o.prototype.getFirstBlock=function(){return this.getBlockMap().first();};o.prototype.getLastBlock=function(){return this.getBlockMap().last();};o.prototype.getPlainText=function(p){return this.getBlockMap().map(function(q){return q?q.getText():'';}).join(p||'\n');};o.prototype.getLastCreatedEntityKey=function(){return c('DraftEntity').__getLastCreatedEntityKey();};o.prototype.hasText=function(){var p=this.getBlockMap();return p.size>1||p.first().getLength()>0;};o.prototype.createEntity=function(p,q,r){c('DraftEntity').__create(p,q,r);return this;};o.prototype.mergeEntityData=function(p,q){c('DraftEntity').__mergeData(p,q);return this;};o.prototype.replaceEntityData=function(p,q){c('DraftEntity').__replaceData(p,q);return this;};o.prototype.addEntity=function(p){c('DraftEntity').__add(p);return this;};o.prototype.getEntity=function(p){return c('DraftEntity').__get(p);};o.createFromBlockArray=function(p,q){var r=Array.isArray(p)?p:p.contentBlocks,s=c('BlockMapBuilder').createFromArray(r),t=s.isEmpty()?new (c('SelectionState'))():c('SelectionState').createEmpty(s.first().getKey());return new o({blockMap:s,entityMap:q||c('DraftEntity'),selectionBefore:t,selectionAfter:t});};o.createFromText=function(p){var q=arguments.length<=1||arguments[1]===undefined?/\r\n?|\n/g:arguments[1],r=p.split(q),s=r.map(function(t){t=c('sanitizeDraftText')(t);return new (c('ContentBlock'))({key:c('generateRandomKey')(),text:t,type:'unstyled',characterList:j(l(c('CharacterMetadata').EMPTY,t.length))});});return o.createFromBlockArray(s);};function o(){h.apply(this,arguments);}f.exports=o;}),null);
__d('UnicodeBidiService',['invariant','UnicodeBidi','UnicodeBidiDirection','UnicodeBidiGlobalDirection'],(function a(b,c,d,e,f,g,h){'use strict';function i(j){if(!j){j=c('UnicodeBidiGlobalDirection').getDir();}else c('UnicodeBidiDirection').isStrong(j)||h(0);this.$UnicodeBidiService1=j;this.reset();}i.prototype.reset=function(){this.$UnicodeBidiService2=this.$UnicodeBidiService1;};i.prototype.getDirection=function(j){this.$UnicodeBidiService2=c('UnicodeBidi').getDirection(j,this.$UnicodeBidiService2);return this.$UnicodeBidiService2;};f.exports=i;}),null);
__d('EditorBidiService',['immutable','UnicodeBidiService','nullthrows'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').OrderedMap,i,j={getDirectionMap:function k(l,m){if(!i){i=new (c('UnicodeBidiService'))();}else i.reset();var n=l.getBlockMap(),o=n.valueSeq().map(function(q){return c('nullthrows')(i).getDirection(q.getText());}),p=h(n.keySeq().zip(o));if(m!=null&&c('immutable').is(m,p))return m;return p;}};f.exports=j;}),null);
__d('EditorState',['BlockTree','ContentState','EditorBidiService','immutable','SelectionState'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').OrderedSet,i=c('immutable').Record,j=c('immutable').Stack,k={allowUndo:true,currentContent:null,decorator:null,directionMap:null,forceSelection:false,inCompositionMode:false,inlineStyleOverride:null,lastChangeType:null,nativelyRenderedContent:null,redoStack:j(),selection:null,treeMap:null,undoStack:j()},l=i(k);m.createEmpty=function(v){return m.createWithContent(c('ContentState').createFromText(''),v);};m.createWithContent=function(v,w){var x=v.getBlockMap().first().getKey();return m.create({currentContent:v,undoStack:j(),redoStack:j(),decorator:w||null,selection:c('SelectionState').createEmpty(x)});};m.create=function(v){var w=v.currentContent,x=v.decorator,y=babelHelpers['extends']({},v,{treeMap:o(w,x),directionMap:c('EditorBidiService').getDirectionMap(w)});return new m(new l(y));};m.set=function(v,w){var x=v.getImmutable().withMutations(function(y){var z=y.get('decorator'),aa=z;if(w.decorator===null){aa=null;}else if(w.decorator)aa=w.decorator;var ba=w.currentContent||v.getCurrentContent();if(aa!==z){var ca=y.get('treeMap'),da;if(aa&&z){da=q(ba,ba.getBlockMap(),ca,aa,z);}else da=o(ba,aa);y.merge({decorator:aa,treeMap:da,nativelyRenderedContent:null});return;}var ea=v.getCurrentContent();if(ba!==ea)y.set('treeMap',p(v,ba.getBlockMap(),ba.getEntityMap(),aa));y.merge(w);});return new m(x);};m.prototype.toJS=function(){return this.getImmutable().toJS();};m.prototype.getAllowUndo=function(){return this.getImmutable().get('allowUndo');};m.prototype.getCurrentContent=function(){return this.getImmutable().get('currentContent');};m.prototype.getUndoStack=function(){return this.getImmutable().get('undoStack');};m.prototype.getRedoStack=function(){return this.getImmutable().get('redoStack');};m.prototype.getSelection=function(){return this.getImmutable().get('selection');};m.prototype.getDecorator=function(){return this.getImmutable().get('decorator');};m.prototype.isInCompositionMode=function(){return this.getImmutable().get('inCompositionMode');};m.prototype.mustForceSelection=function(){return this.getImmutable().get('forceSelection');};m.prototype.getNativelyRenderedContent=function(){return this.getImmutable().get('nativelyRenderedContent');};m.prototype.getLastChangeType=function(){return this.getImmutable().get('lastChangeType');};m.prototype.getInlineStyleOverride=function(){return this.getImmutable().get('inlineStyleOverride');};m.setInlineStyleOverride=function(v,w){return m.set(v,{inlineStyleOverride:w});};m.prototype.getCurrentInlineStyle=function(){var v=this.getInlineStyleOverride();if(v!=null)return v;var w=this.getCurrentContent(),x=this.getSelection();if(x.isCollapsed())return s(w,x);return t(w,x);};m.prototype.getBlockTree=function(v){return this.getImmutable().getIn(['treeMap',v]);};m.prototype.isSelectionAtStartOfContent=function(){var v=this.getCurrentContent().getBlockMap().first().getKey();return this.getSelection().hasEdgeWithin(v,0,0);};m.prototype.isSelectionAtEndOfContent=function(){var v=this.getCurrentContent(),w=v.getBlockMap(),x=w.last(),y=x.getLength();return this.getSelection().hasEdgeWithin(x.getKey(),y,y);};m.prototype.getDirectionMap=function(){return this.getImmutable().get('directionMap');};m.acceptSelection=function(v,w){return n(v,w,false);};m.forceSelection=function(v,w){if(!w.getHasFocus())w=w.set('hasFocus',true);return n(v,w,true);};m.moveSelectionToEnd=function(v){var w=v.getCurrentContent(),x=w.getLastBlock(),y=x.getKey(),z=x.getLength();return m.acceptSelection(v,new (c('SelectionState'))({anchorKey:y,anchorOffset:z,focusKey:y,focusOffset:z,isBackward:false}));};m.moveFocusToEnd=function(v){var w=m.moveSelectionToEnd(v);return m.forceSelection(w,w.getSelection());};m.push=function(v,w,x){if(v.getCurrentContent()===w)return v;var y=x!=='insert-characters',z=c('EditorBidiService').getDirectionMap(w,v.getDirectionMap());if(!v.getAllowUndo())return m.set(v,{currentContent:w,directionMap:z,lastChangeType:x,selection:w.getSelectionAfter(),forceSelection:y,inlineStyleOverride:null});var aa=v.getSelection(),ba=v.getCurrentContent(),ca=v.getUndoStack(),da=w;if(aa!==ba.getSelectionAfter()||r(v,x)){ca=ca.push(ba);da=da.set('selectionBefore',aa);}else if(x==='insert-characters'||x==='backspace-character'||x==='delete-character')da=da.set('selectionBefore',ba.getSelectionBefore());var ea=v.getInlineStyleOverride();if(x!=='adjust-depth'&&x!=='change-block-type')ea=null;var fa={currentContent:da,directionMap:z,undoStack:ca,redoStack:j(),lastChangeType:x,selection:w.getSelectionAfter(),forceSelection:y,inlineStyleOverride:ea};return m.set(v,fa);};m.undo=function(v){if(!v.getAllowUndo())return v;var w=v.getUndoStack(),x=w.peek();if(!x)return v;var y=v.getCurrentContent(),z=c('EditorBidiService').getDirectionMap(x,v.getDirectionMap());return m.set(v,{currentContent:x,directionMap:z,undoStack:w.shift(),redoStack:v.getRedoStack().push(y),forceSelection:true,inlineStyleOverride:null,lastChangeType:'undo',nativelyRenderedContent:null,selection:y.getSelectionBefore()});};m.redo=function(v){if(!v.getAllowUndo())return v;var w=v.getRedoStack(),x=w.peek();if(!x)return v;var y=v.getCurrentContent(),z=c('EditorBidiService').getDirectionMap(x,v.getDirectionMap());return m.set(v,{currentContent:x,directionMap:z,undoStack:v.getUndoStack().push(y),redoStack:w.shift(),forceSelection:true,inlineStyleOverride:null,lastChangeType:'redo',nativelyRenderedContent:null,selection:x.getSelectionAfter()});};function m(v){this.$EditorState1=v;}m.prototype.getImmutable=function(){return this.$EditorState1;};function n(v,w,x){return m.set(v,{selection:w,forceSelection:x,nativelyRenderedContent:null,inlineStyleOverride:null});}function o(v,w){return v.getBlockMap().map(function(x){return c('BlockTree').generate(v,x,w);}).toOrderedMap();}function p(v,w,x,y){var z=v.getCurrentContent().set('entityMap',x),aa=z.getBlockMap(),ba=v.getImmutable().get('treeMap');return ba.merge(w.toSeq().filter(function(ca,da){return ca!==aa.get(da);}).map(function(ca){return c('BlockTree').generate(z,ca,y);}));}function q(v,w,x,y,z){return x.merge(w.toSeq().filter(function(aa){return y.getDecorations(aa,v)!==z.getDecorations(aa,v);}).map(function(aa){return c('BlockTree').generate(v,aa,y);}));}function r(v,w){var x=v.getLastChangeType();return w!==x||w!=='insert-characters'&&w!=='backspace-character'&&w!=='delete-character';}function s(v,w){var x=w.getStartKey(),y=w.getStartOffset(),z=v.getBlockForKey(x);if(y>0)return z.getInlineStyleAt(y-1);if(z.getLength())return z.getInlineStyleAt(0);return u(v,x);}function t(v,w){var x=w.getStartKey(),y=w.getStartOffset(),z=v.getBlockForKey(x);if(y<z.getLength())return z.getInlineStyleAt(y);if(y>0)return z.getInlineStyleAt(y-1);return u(v,x);}function u(v,w){var x=v.getBlockBefore(w),y;while(x){y=x.getLength();if(y)return x.getInlineStyleAt(y-1);x=v.getBlockBefore(x.getKey());}return h();}f.exports=m;}),null);