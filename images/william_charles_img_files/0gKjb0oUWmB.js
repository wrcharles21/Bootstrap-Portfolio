if (self.CavalryLogger) { CavalryLogger.start_js(["nUV95"]); }

__d("ProfileDOMID",[],(function a(b,c,d,e,f,g){f.exports={ABOVE_HEADER_TIMELINE:"pagelet_above_header_timeline",ABOVE_HEADER_TIMELINE_PLACEHOLDER:"above_header_timeline_placeholder",COVER:"fbProfileCover",MAIN_COLUMN:"pagelet_main_column",MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal",MAIN_COLUMN_PERSONAL_OTHER:"pagelet_main_column_personal_other",RIGHT_SIDEBAR:"pagelet_right_sidebar",TAB_LOAD_INDICATOR:"tab_load_indicator",TOP_SECTION:"timeline_top_section",FIG_PROFILE_PIC:"profile_fig_profile_pic",FIG_ACTION_BAR:"profile_fig_action_bar",FIG_SUBTITLE:"profile_fig_subtitle",DISCOVERY_INTENT_BUTTON:"discovery_intent_button",DISCOVERY_INTENT_BANNER:"discovery_intent_banner",PREFIX_MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal_"};}),null);
__d("ProfileOverviewDOMID",[],(function a(b,c,d,e,f,g){f.exports={MEDLEY_ROOT:"timeline-medley",PREFIX_APP_COLLECTION:"pagelet_timeline_app_collection_",PREFIX_COLLECTION_WRAPPER:"collection_wrapper_",PREFIX_MEDLEY:"pagelet_timeline_medley_",PREFIX_MEDLEY_HEADER:"medley_header_",PREFIX_RECOMMENDATION:"pagelet_recommendation_"};}),null);
__d("ProfileTabConst",[],(function a(b,c,d,e,f,g){f.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RECIPES:"recipes",RESUME:"resume",REVIEWS:"reviews",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SPORTS:"sports",TAGGED_NOTES:"notes_tagged",TIMELINE:"timeline",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",ENDORSEMENTS:"endorsements",ISSUES:"issues",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"live_videos",PAGE_EPISODES:"episodes",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"};}),null);
__d("TimelineScrollJankEventTypes",[],(function a(b,c,d,e,f,g){f.exports={BOTTOM_OUT:"bottom_out"};}),null);
__d("TimelineScrubberKey",[],(function a(b,c,d,e,f,g){f.exports={MONTH:"month",RECENT_ACTIVITY:"recent",YEAR:"year"};}),null);
__d('ProfileTimelineUITypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ProfileTimelineUILoggerConfig',this.$ProfileTimelineUITypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ProfileTimelineUILoggerConfig',this.$ProfileTimelineUITypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ProfileTimelineUITypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ProfileTimelineUITypedLogger1=babelHelpers['extends']({},this.$ProfileTimelineUITypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$ProfileTimelineUITypedLogger1.event=j;return this;};h.prototype.setEventMetadata=function(j){this.$ProfileTimelineUITypedLogger1.event_metadata=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setProfileID=function(j){this.$ProfileTimelineUITypedLogger1.profile_id=j;return this;};h.prototype.setRelationshipType=function(j){this.$ProfileTimelineUITypedLogger1.relationship_type=j;return this;};h.prototype.setUIComponent=function(j){this.$ProfileTimelineUITypedLogger1.ui_component=j;return this;};h.prototype.setVC=function(j){this.$ProfileTimelineUITypedLogger1.vc=j;return this;};var i={event:true,event_metadata:true,profile_id:true,relationship_type:true,ui_component:true,vc:true};f.exports=h;}),null);
__d('ScrollingPager',['Arbiter','CSS','DOM','OnVisible','UIPagelet','$','ge'],(function a(b,c,d,e,f,g){var h={};function i(j,k,l,m){'use strict';this.scroll_loader_id=j;this.pagelet_src=k;this.data=l;this.options=m||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true;}else this.target_id=j;this.scroll_area_id=this.options.scroll_area_id;this.handler=null;}i.prototype.setBuffer=function(j){'use strict';this.options.buffer=j;this.onvisible&&this.onvisible.setBuffer(j);};i.prototype.getBuffer=function(){'use strict';return this.options.buffer;};i.prototype.register=function(){'use strict';this.onvisible=new (c('OnVisible'))(c('$')(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,c('ge')(this.scroll_area_id));h[this.scroll_loader_id]=this;c('Arbiter').inform(i.REGISTERED,{id:this.scroll_loader_id});};i.prototype.getInstance=function(j){'use strict';return h[j];};i.prototype.getHandler=function(){'use strict';if(this.handler)return this.handler;function j(k){var l=c('ge')(this.scroll_loader_id);if(!l){this.onvisible.remove();return;}c('CSS').addClass(l.firstChild,'async_saving');var m=this.options.handler,n=this.options.force_remove_pager&&this.scroll_loader_id!==this.target_id;this.options.handler=function(){c('Arbiter').inform('ScrollingPager/loadingComplete');m&&m.apply(null,arguments);if(n)c('DOM').remove(l);};if(k)this.data.pager_fired_on_init=true;c('UIPagelet').loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options);}return j.bind(this);};i.prototype.setHandler=function(j){'use strict';this.handler=j;};i.prototype.removeOnVisible=function(){'use strict';this.onvisible.remove();};i.prototype.checkBuffer=function(){'use strict';this.onvisible&&this.onvisible.checkBuffer();};i.getInstance=function(j){'use strict';return h[j];};Object.assign(i,{REGISTERED:'ScrollingPager/registered'});f.exports=i;}),null);
__d('ProfileTabUtils',['ProfileOverviewDOMID','ProfileTabConst'],(function a(b,c,d,e,f,g){function h(j){return !j||j===c('ProfileTabConst').TIMELINE||j===c('ProfileTabConst').WALL;}var i={isActivityLogTab:function j(k){return k===c('ProfileTabConst').ALL_ACTIVITY||k===c('ProfileTabConst').APPROVAL;},isOverviewTab:function j(k){return k===c('ProfileTabConst').INFO||k===c('ProfileTabConst').OVERVIEW;},isTimelineTab:h,isMapTab:function j(k){return k===c('ProfileTabConst').MAP;},tabHasFixedAds:function j(k){return true;},tabHasScrubber:function j(k){return i.isActivityLogTab(k);},tabHasStickyHeader:h,getIDForCollectionToken:function j(k){return c('ProfileOverviewDOMID').PREFIX_APP_COLLECTION+k;},getIDForSectionKey:function j(k){return c('ProfileOverviewDOMID').PREFIX_MEDLEY+k;}};f.exports=i;}),null);
__d('ProfileNavRef',['LinkController','Parent','URI'],(function a(b,c,d,e,f,g){var h='pnref',i='data-'+h,j=false;f.exports={_resolveRef:function k(l){var m=[];l=c('Parent').byAttribute(l,i);while(l){m.unshift(l.getAttribute(i));l=c('Parent').byAttribute(l.parentNode,i);}return m.join('.');},track:function k(){if(j)return;j=true;c('LinkController').registerHandler(function(l){var m=this._resolveRef(l);if(m)l.href=new (c('URI'))(l.href).addQueryData(h,m).toString();}.bind(this));}};}),null);
__d('TimelineComponentKeys',['ImmutableObject'],(function a(b,c,d,e,f,g){var h=new (c('ImmutableObject'))({ADS:'ads',ASYNC_NAV:'async_nav',CONTENT:'content',COVER_NAV:'cover_nav',ESCAPE_HATCH:'escape_hatch',LOGGING:'logging',NAV:'nav',SCRUBBER:'scrubber',STICKY_COLUMN:'sticky_column',STICKY_HEADER:'sticky_header',STICKY_HEADER_NAV:'sticky_header_nav'});f.exports=h;}),null);
__d('TimelineConstants',[],(function a(b,c,d,e,f,g){var h={DS_LOADED:'timeline-capsule-loaded',DS_COLUMN_HEIGHT_DIFFERENTIAL:'timeline-column-diff-height',SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:'TimelineConstants/sectionExpand',SECTION_LOADING:'TimelineConstants/sectionLoading',SECTION_LOADED:'TimelineConstants/sectionLoaded',SECTION_FULLY_LOADED:'TimelineConstants/sectionFullyLoaded',SECTION_REGISTERED:'TimelineConstants/sectionRegistered',UNIT_SEGMENT_LOADED:'TimelineConstants/unitSegmentLoaded'};f.exports=h;}),null);
__d('TimelineLegacySections',['fbt','CSS','DOM','getElementText'],(function a(b,c,d,e,f,g,h){var i={},j={},k=false,l=[],m={},n={get:function o(p){return Object.prototype.hasOwnProperty.call(j,p)?j[p]:null;},getAll:function o(){return j;},remove:function o(p){for(var q=0;q<l.length;q++)if(l[q]===p){l[q]=null;break;}delete j[p];},removeAll:function o(){j={};},set:function o(p,q){j[p]=q;},addOnVisible:function o(p,q){m[p]=q;},destroyOnVisible:function o(p){var q=m[p];if(q){q.remove();c('DOM').remove(q.getElement());}m[p]=null;},removeOnVisible:function o(p){var q=m[p];if(q)q.remove();},removeAllOnVisibles:function o(){Object.keys(m).forEach(function(p){return this.removeOnVisible(p);}.bind(this));},getOnVisible:function o(p){return m[p];},setMainSectionOrder:function o(p,q){l[q]=p;},getMainSectionOrder:function o(){return l;},addLoadPagelet:function o(p,q){i[p]=q;},cancelLoadPagelet:function o(p){if(i[p])i[p].cancel();},cancelLoadPagelets:function o(){Object.keys(i).forEach(function(p){return this.cancelLoadPagelet(p);}.bind(this));i={};},shouldForceNoFriendActivity:function o(){return k;},forceNoFriendActivity:function o(){k=true;},collapsePlaceHolderHeaders:function o(){var p,q,r=false;for(var s=0;s<l.length;s++){var t=l[s];if(!t)continue;var u=n.get(t);if(!u)continue;if(u.canScrollLoad()||u.isLoaded()){if(!u.isLoaded()){c('CSS').removeClass(u.getNode(),'fbTimelineTimePeriodSuppressed');c('CSS').addClass(u.getNode(),'fbTimelineTimePeriodUnexpanded');}if(p&&q){this.combineSectionHeaders(p,q);if(r)p.deactivateScrollLoad();r=true;}p=null;q=null;continue;}else if(p){q=u;u.deactivateScrollLoad();}else{p=u;q=u;if(r)u.activateScrollLoad();}c('CSS').removeClass(u.getNode(),'fbTimelineTimePeriodSuppressed');c('CSS').addClass(u.getNode(),'fbTimelineTimePeriodUnexpanded');}},combineSectionHeaders:function o(p,q){c('CSS').removeClass(q.getNode(),'fbTimelineTimePeriodUnexpanded');c('CSS').addClass(q.getNode(),'fbTimelineTimePeriodSuppressed');var r=c('DOM').find(p.getNode(),'span.sectionLabel'),s=c('DOM').find(q.getNode(),'span.sectionLabel');if(!s.getAttribute('data-original-label'))s.setAttribute('data-original-label',c('getElementText')(s));if(r.getAttribute('data-month')&&s.getAttribute('data-month')&&r.getAttribute('data-year')==s.getAttribute('data-year')){c('DOM').setContent(s,h._("Show {month1} - {month2} {year}",[h.param('month1',s.getAttribute('data-month')),h.param('month2',r.getAttribute('data-month')),h.param('year',r.getAttribute('data-year'))]));}else if(r.getAttribute('data-year')!==s.getAttribute('data-year')){c('DOM').setContent(s,h._("Show {year1} - {year2}",[h.param('year1',s.getAttribute('data-year')),h.param('year2',r.getAttribute('data-year'))]));}else c('DOM').setContent(s,h._("Show {year}",[h.param('year',s.getAttribute('data-year'))]));}};f.exports=n;}),null);
__d('TimelineScrollJankLogger',['Banzai','BanzaiLogger','TimelineScrollJankEventTypes','debounceCore','emptyFunction'],(function a(b,c,d,e,f,g){var h='TimelineScrollJankLoggerConfig',i='timeline_scroll_jank',j=50;function k(event,n,o,p){c('BanzaiLogger').log(h,{event:event,profileid:n,currentsection:p,sessionid:o});}var l=c('Banzai').isEnabled(i)?c('debounceCore')(k,j):c('emptyFunction'),m={logBottomOut:l.bind(null,c('TimelineScrollJankEventTypes').BOTTOM_OUT)};f.exports=m;}),null);
__d('TimelineController',['Arbiter','BlueBar','CSS','DataStore','DOMQuery','Event','ProfileDOMID','ProfileNavRef','ProfileTabConst','ProfileTabUtils','Run','ScrollingPager','TidyArbiter','TimelineComponentKeys','TimelineConstants','TimelineLegacySections','TimelineScrollJankLogger','TimelineScrubberKey','UITinyViewportAction','Vector','$','forEachObject','ge','queryThenMutateDOM','randomInt','tidyEvent'],(function a(b,c,d,e,f,g){var h=740,i=5,j='top',k='paddingTop',l='paddingTop',m=null,n=false,o=null,p=null,q,r={},s={},t=[],u=null,v=0,w=c('Vector').getViewportDimensions(),x=false,y=false,z=false;function aa(ma,na,oa){oa=oa||[];if(r[ma])return r[ma][na].apply(r[ma],oa);s[ma]=s[ma]||{};s[ma][na]=oa;return false;}function ba(){if(x)x=fa(c('ge')('rightCol'),l,la.getCurrentScrubber());if(y)y=fa(c('$')(c('ProfileDOMID').ABOVE_HEADER_TIMELINE),j);if(z)z=fa(c('BlueBar').getBar(),k);}function ca(){v=c('Vector').getScrollPosition();var ma=v.y+w.y,na=c('Vector').getDocumentDimensions().y-ma;if(na<i)c('TimelineScrollJankLogger').logBottomOut(o,q);}function da(){ba();if(c('ProfileTabUtils').tabHasStickyHeader(m))aa(c('TimelineComponentKeys').STICKY_HEADER,'check',[v.y]);aa(c('TimelineComponentKeys').CONTENT,'checkCurrentSectionChange');}function ea(){c('queryThenMutateDOM')(ca,da,'TimelineController/scrollListener');}function fa(ma,na,oa){if(!ma)return false;if(v.y<=0){ga(ma,na);return false;}if(oa&&c('CSS').hasClass(oa.getRoot(),'fixed_elem')){ga(ma,na);return false;}var pa=parseInt(ma.style[na],10)||0;if(v.y<pa){c('CSS').addClass(ma,'timeline_fixed');ma.style[na]=v.y+'px';}else c('CSS').removeClass(ma,'timeline_fixed');return true;}function ga(ma,na){ma.style[na]='0px';c('CSS').removeClass(ma,'timeline_fixed');}function ha(){w=c('Vector').getViewportDimensions();}function ia(){c('queryThenMutateDOM')(ha,function(){aa(c('TimelineComponentKeys').ADS,'adjustAdsToFit');aa(c('TimelineComponentKeys').STICKY_HEADER_NAV,'adjustMenuHeights');aa(c('TimelineComponentKeys').STICKY_HEADER,'check',[v.y]);},'TimelineController/resize');}function ja(event,ma){var na=c('Vector').getScrollPosition();ma=Math.min(ma,na.y);var oa=c('ge')('rightCol');if(oa){oa.style[l]=ma+'px';x=true;}la.showAboveHeaderContent(ma);z=c('UITinyViewportAction').isTinyHeight();if(z)c('BlueBar').getBar().style[k]=ma+'px';c('Arbiter').inform('reflow');}function ka(){while(t.length)t.pop().remove();c('forEachObject')(r,function(na,oa){na.reset&&na.reset();});m=null;o=null;q=null;r={};s={};u=null;n=false;y=false;if(x){var ma=c('ge')('rightCol');if(ma)ga(ma,l);}x=false;if(z){ga(c('BlueBar').getBar(),k);z=false;}c('DataStore').purge(c('TimelineConstants').DS_LOADED);c('DataStore').purge(c('TimelineConstants').DS_COLUMN_HEIGHT_DIFFERENTIAL);}var la={init:function ma(na,oa,pa){if(n)return;if(c('ProfileTabUtils').isTimelineTab(oa))oa=c('ProfileTabConst').TIMELINE;n=true;o=na;q=c('randomInt')(Number.MAX_SAFE_INTEGER).toString();p=pa.relationship_type;t.push(c('Event').listen(window,'scroll',ea),c('Event').listen(window,'resize',ia));c('tidyEvent')(c('TidyArbiter').subscribe('TimelineCover/coverCollapsed',ja));c('ProfileNavRef').track();c('Run').onLeave(ka);la.registerCurrentKey(oa);var qa='#'+c('TimelineScrubberKey').WAY_BACK;if(window.location.hash===qa)var ra=c('Arbiter').subscribe(c('TimelineConstants').SECTION_FULLY_LOADED,function(){aa(c('TimelineComponentKeys').CONTENT,'navigateToSection',[c('TimelineScrubberKey').WAY_BACK]);ra.unsubscribe();});},setAdsTracking:function ma(na){aa(c('TimelineComponentKeys').ADS,'start',[na]);},showAboveHeaderContent:function ma(na){var oa=c('Vector').getScrollPosition();na=Math.min(na,oa.y);var pa=c('$')(c('ProfileDOMID').ABOVE_HEADER_TIMELINE);if(pa.firstChild){var qa=c('$')(c('ProfileDOMID').ABOVE_HEADER_TIMELINE_PLACEHOLDER);qa.style.height=pa.offsetHeight+'px';pa.style.top=na+'px';y=true;}},registerCurrentKey:function ma(na){m=na;u=na!==c('ProfileTabConst').MAP&&c('Vector').getViewportDimensions().y<h&&c('ProfileTabUtils').tabHasScrubber(na);u=u||c('BlueBar').getBar().offsetTop;aa(c('TimelineComponentKeys').ADS,'setShortMode',[u]);aa(c('TimelineComponentKeys').ADS,'updateCurrentKey',[na]);aa(c('TimelineComponentKeys').ADS,'adjustAdsToFit');aa(c('TimelineComponentKeys').COVER_NAV,'handleTabChange',[na]);aa(c('TimelineComponentKeys').SCRUBBER,'handleTabChange',[na]);aa(c('TimelineComponentKeys').ESCAPE_HATCH,'handleTabChange',[na]);aa(c('TimelineComponentKeys').STICKY_COLUMN,'adjust');aa(c('TimelineComponentKeys').STICKY_HEADER,'handleTabChange',[na]);ea();},getProfileID:function ma(){return o;},getRelationshipType:function ma(){return p;},getCurrentKey:function ma(){return m;},getCurrentScrubber:function ma(){return r[c('TimelineComponentKeys').SCRUBBER];},getCurrentStickyHeaderNav:function ma(){return r[c('TimelineComponentKeys').STICKY_HEADER_NAV];},scrubberHasLoaded:function ma(na){c('CSS').conditionClass(na.getRoot(),'fixed_elem',!u);aa(c('TimelineComponentKeys').ADS,'registerScrubber',[na]);},scrubberHasChangedState:function ma(){aa(c('TimelineComponentKeys').ADS,'adjustAdsToFit');},scrubberWasClicked:function ma(na){aa(c('TimelineComponentKeys').LOGGING,'logScrubberClick',[na]);},stickyHeaderNavWasClicked:function ma(na){aa(c('TimelineComponentKeys').LOGGING,'logStickyHeaderNavClick',[na]);},sectionHasChanged:function ma(na,oa){var pa=[na,oa];aa(c('TimelineComponentKeys').STICKY_HEADER_NAV,'updateSection',pa);aa(c('TimelineComponentKeys').SCRUBBER,'updateSection',pa);aa(c('TimelineComponentKeys').ADS,'loadAdsIfEnoughTimePassed');aa(c('TimelineComponentKeys').LOGGING,'logSectionChange',pa);},navigateToSection:function ma(na){aa(c('TimelineComponentKeys').CONTENT,'navigateToSection',[na]);},adjustStickyHeaderWidth:function ma(){aa(c('TimelineComponentKeys').STICKY_HEADER,'adjustWidth');},hideStickyHeaderNavSectionMenu:function ma(){aa(c('TimelineComponentKeys').STICKY_HEADER_NAV,'hideSectionMenu');},register:function ma(na,oa){r[na]=oa;if(s[na]){c('forEachObject')(s[na],function(pa,qa){aa(na,qa,pa);});delete s[na];}},adjustScrollingPagerBuffer:function ma(na,oa){var pa=c('DataStore').get(c('TimelineConstants').DS_COLUMN_HEIGHT_DIFFERENTIAL,oa);if(pa){var qa=c('ScrollingPager').getInstance(na);qa&&qa.setBuffer(qa.getBuffer()+Math.abs(pa));}},runOnceWhenSectionFullyLoaded:function ma(na,oa,pa){var qa=c('TimelineLegacySections').get(oa),ra=false;if(qa){var sa=c('DOMQuery').scry(qa.getNode(),'.fbTimelineCapsule');ra=sa.some(function(ua){var va=c('DataStore').get(c('TimelineConstants').DS_LOADED,ua.id);if(parseInt(va,10)>=parseInt(pa,10)){na();return true;}});}if(!ra)var ta=c('Arbiter').subscribe(c('TimelineConstants').SECTION_FULLY_LOADED,function(ua,va){if(va.scrubberKey===oa&&va.pageIndex===pa){na();ta.unsubscribe();}});}};f.exports=la;}),null);
__d('ProfileTimelineUILogger',['Banzai','ProfileTimelineUITypedLogger','TimelineController'],(function a(b,c,d,e,f,g){var h='profile_timeline_ui';function i(event,k,l){var m=c('TimelineController').getProfileID(),n=c('TimelineController').getRelationshipType();if(c('Banzai').isEnabled(h)&&!!m&&!!n)new (c('ProfileTimelineUITypedLogger'))().setEvent(event).setUIComponent(k).setProfileID(m).setRelationshipType(n).setEventMetadata(l).log();}var j={logCoverNavItemClick:function k(l){i('click','cover_nav_item',{tab_key:l});},logCoverNavMoreItemClick:function k(l){i('click','cover_nav_more_item',{tab_key:l});},logScrubberClick:function k(l){i('click','scrubber',{section_key:l});},logStickyHeaderImpression:function k(){i('view','sticky_header',{});},logStickyHeaderNavItemClick:function k(l){i('click','sticky_header_nav_item',{tab_key:l});},logStickyHeaderScrubberClick:function k(l){i('click','sticky_header_scrubber',{section_key:l});},logStickyHeaderNavItemWithJumperClick:function k(l){i('click','sticky_header_nav_item_with_jumper',{tab_key:l});},logStickyHeaderScrubberWithJumperClick:function k(l){i('click','sticky_header_scrubber_with_jumper',{section_key:l});},logJumperRecentStoriesButtonClick:function k(l){i('click','jumper_recent_stories_button',{cursor:l});},logJumperMoreStoriesSpinnerView:function k(l){i('view','jumper_more_stories_spinner',{cursor:l});}};f.exports=j;}),null);
__d('legacy:ui-scrolling-pager-js',['ScrollingPager'],(function a(b,c,d,e,f,g){b.ScrollingPager=c('ScrollingPager');}),3);