(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9enj":function(t,e,n){"use strict";n.r(e);var i=n("DUip"),o=n("Valr"),c=n("VO3q"),r=n("K9Ia"),a=n("67Y/"),s=n("xMyE"),l=n("15JJ"),p=n("TYT/"),g=n("QrbZ"),f=n("Frqi"),d=function(t,e){return["/my-work",t,e]};function u(t,e){if(1&t&&(p.Rb(0,"div",4),p.Rb(1,"div",5),p.Nb(2,"img",6),p.Qb(),p.Rb(3,"div",7),p.Rb(4,"div",8),p.xc(5),p.Qb(),p.Qb(),p.Qb()),2&t){var n=e.$implicit;p.hc("routerLink",p.lc(4,d,n.category,n.id)),p.Bb(2),p.hc("src",null==n.thumbnail?null:n.thumbnail.url,p.rc)("alt",n.projectName),p.Bb(3),p.zc(" ",n.projectName," ")}}function h(t,e){if(1&t&&(p.Rb(0,"div",2),p.vc(1,u,6,7,"div",3),p.Qb()),2&t){var n=p.cc();p.Bb(1),p.hc("ngForOf",n.portfolioItems)}}function b(t,e){1&t&&p.Nb(0,"app-loading")}var m=function(){function t(t,e,n,i){this.portfolioService=t,this.dialog=e,this.route=n,this.router=i,this.tags$=new r.a,this.categoryOrder=["spades","diamonds","clubs","hearths","duck"]}return t.prototype.ngOnInit=function(){var t=this;this.route.paramMap.pipe(Object(a.a)((function(t){return t.get("categoryId")})),Object(s.a)((function(e){return t.currentCategory=e})),Object(l.a)((function(e){return t.portfolioService.getProjectsByCategory(e)}))).subscribe((function(e){t.portfolioItems=e}))},t.prototype.goNextCategory=function(){var t=this.categoryOrder.indexOf(this.currentCategory);this.goToCategory(this.categoryOrder[t+1])},t.prototype.goPreviousCategory=function(){var t=this.categoryOrder.indexOf(this.currentCategory);0!==t&&this.goToCategory(this.categoryOrder[t-1])},t.prototype.goToCategory=function(t){this.router.navigate("duck"!==t?["/my-work",t]:["/duck"])},t.\u0275fac=function(e){return new(e||t)(p.Mb(c.a),p.Mb(g.b),p.Mb(i.a),p.Mb(i.b))},t.\u0275cmp=p.Gb({type:t,selectors:[["app-portfolio"]],decls:3,vars:2,consts:[["class","portfolio-container","data-mc-options","{ 'touchAction': 'pan-x' }",4,"ngIf","ngIfElse"],["loadingTemplate",""],["data-mc-options","{ 'touchAction': 'pan-x' }",1,"portfolio-container"],["class","portfolio-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"portfolio-item",3,"routerLink"],[1,"portfolio-thumbnail-container"],[3,"src","alt"],[1,"portfolio-item-additional-info"],[1,"portfolio-item-name"]],template:function(t,e){if(1&t&&(p.vc(0,h,2,1,"div",0),p.vc(1,b,1,0,"ng-template",null,1,p.wc)),2&t){var n=p.nc(2);p.hc("ngIf",e.portfolioItems)("ngIfElse",n)}},directives:[o.k,o.j,i.c,f.a],styles:['[_nghost-%COMP%]{width:100%;-webkit-box-orient:vertical;flex-direction:column}.portfolio-container[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-direction:normal}.portfolio-container[_ngcontent-%COMP%]{max-width:100%;flex-wrap:nowrap;-webkit-box-orient:horizontal;flex-direction:row;overflow-x:auto;-webkit-overflow-scrolling:touch;touch-action:pan-x}.portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:350px;width:210px;cursor:pointer;margin-right:10px;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);border-collapse:collapse;border-radius:16px;margin-bottom:20px;-webkit-box-flex:0;flex:0 0 auto;background-color:#f89938}.portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:350px;width:210px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}@media (min-width:600px){.portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:500px;width:300px}}.portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:nth-child(4){grid-column:1/span 2;grid-row:2/span 2}.portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-item-additional-info[_ngcontent-%COMP%]{display:-webkit-box;display:flex;position:absolute;top:100%;left:0;background:rgba(0,0,0,.5);color:#fff;width:100%;height:100%;-webkit-box-pack:stretch;justify-content:stretch;-webkit-box-align:end;align-items:flex-end;-webkit-transition:top .5s ease-in-out;transition:top .5s ease-in-out;font-family:"Cedarville Cursive",cursive;padding:1rem;text-align:left}.portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-item-additional-info[_ngcontent-%COMP%]   .portfolio-item-name[_ngcontent-%COMP%]{font-size:2rem}.portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:active   .portfolio-item-additional-info[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:focus   .portfolio-item-additional-info[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item-additional-info[_ngcontent-%COMP%]{top:0}']}),t}(),v=n("PCNd"),O=n("mrSG"),y=n("NLVS"),C=function(t){return t.jpeg="image/jpeg",t.png="image/png",t.mp4="video/mp4",t}({}),M=["videoElement"];function x(t,e){if(1&t){var n=p.Sb();p.Rb(0,"img",2),p.Zb("dragstart",(function(t){return p.pc(n),p.cc().preventDrag(t)})),p.Qb()}if(2&t){var i=p.cc();p.hc("src",i.image.url,p.rc)("alt",i.image.title)}}function P(t,e){if(1&t&&p.Nb(0,"video",3,4),2&t){var n=p.cc();p.hc("src",n.image.url,p.rc)}}var w=function(){function t(){this.active=!1,this.contentTypes=C}return t.prototype.ngOnInit=function(){},t.prototype.ngOnChanges=function(t){this.videoElement&&this.videoElement.nativeElement&&(t.active.previousValue&&!t.active.currentValue&&this.videoElement.nativeElement.pause(),!t.active.previousValue&&t.active.currentValue&&(this.videoElement.nativeElement.currentTime=0,this.videoElement.nativeElement.play()),!t.active.isFirstChange()||!t.active.currentValue||(this.videoElement.nativeElement.currentTime=0))},t.prototype.ngAfterViewInit=function(){this.videoElement&&this.videoElement.nativeElement&&this.active&&this.videoElement.nativeElement.play()},t.prototype.preventDrag=function(t){t.preventDefault()},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Gb({type:t,selectors:[["app-media-display"]],viewQuery:function(t,e){var n;1&t&&p.Bc(M,!0),2&t&&p.mc(n=p.ac())&&(e.videoElement=n.first)},inputs:{image:"image",active:"active"},features:[p.zb],decls:3,vars:2,consts:[["class","slide-image","draggable","false",3,"src","alt","dragstart",4,"ngIf","ngIfElse"],["videoTemplate",""],["draggable","false",1,"slide-image",3,"src","alt","dragstart"],["loop","",1,"slide-image",3,"src"],["videoElement",""]],template:function(t,e){if(1&t&&(p.vc(0,x,1,2,"img",0),p.vc(1,P,2,1,"ng-template",null,1,p.wc)),2&t){var n=p.nc(2);p.hc("ngIf",e.image.contentType!==e.contentTypes.mp4)("ngIfElse",n)}},directives:[o.k],styles:["[_nghost-%COMP%]{position:absolute;top:0;width:100%;height:100%;background:#000;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex}[_nghost-%COMP%]   .slide-image[_ngcontent-%COMP%]{min-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}"]}),t}();function _(t,e){if(1&t){var n=p.Sb();p.Rb(0,"div",3),p.Zb("swiperight",(function(){p.pc(n);var t=p.cc();return t.goToImage(t.active-1)}))("swipeleft",(function(){p.pc(n);var t=p.cc();return t.goToImage(t.active+1)})),p.Nb(1,"app-media-display",4),p.Qb()}if(2&t){var i=e.$implicit,o=e.index,c=p.cc();p.Db("active",o===c.active)("left",o<c.active)("right",o>c.active),p.Bb(1),p.hc("image",i)("active",o===c.active)}}function k(t,e){if(1&t){var n=p.Sb();p.Rb(0,"a",5),p.Zb("click",(function(){p.pc(n);var t=e.index;return p.cc().goToImage(t)})),p.Qb()}if(2&t){var i=e.index,o=p.cc();p.Db("active",i===o.active)}}var j=function(t){return t[t.RIGHT_ARROW=39]="RIGHT_ARROW",t[t.LEFT_ARROW=37]="LEFT_ARROW",t}({}),I=function(){function t(){this.selected=new p.n,this.active=0,this.contentTypes=C}return t.prototype.ngOnInit=function(){this.emitSelectedImage()},t.prototype.emitSelectedImage=function(){this.selected.emit({index:this.active,image:this.images[this.active]})},t.prototype.goToImage=function(t){this.active=Math.min(Math.max(t,0),this.images.length-1),this.emitSelectedImage()},t.prototype.keyEvent=function(t){t.keyCode===j.RIGHT_ARROW&&this.goToImage(this.active+1),t.keyCode===j.LEFT_ARROW&&this.goToImage(this.active-1)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Gb({type:t,selectors:[["app-gallery"]],hostBindings:function(t,e){1&t&&p.Zb("keyup",(function(t){return e.keyEvent(t)}),!1,p.oc)},inputs:{images:"images"},outputs:{selected:"selected"},decls:3,vars:2,consts:[["class","slide-container",3,"active","left","right","swiperight","swipeleft",4,"ngFor","ngForOf"],[1,"dots-container"],["class","dot-slide",3,"active","click",4,"ngFor","ngForOf"],[1,"slide-container",3,"swiperight","swipeleft"],[1,"slide-image",3,"image","active"],[1,"dot-slide",3,"click"]],template:function(t,e){1&t&&(p.vc(0,_,2,8,"div",0),p.Rb(1,"div",1),p.vc(2,k,1,2,"a",2),p.Qb()),2&t&&(p.hc("ngForOf",e.images),p.Bb(2),p.hc("ngForOf",e.images))},directives:[o.j,w],styles:["[_nghost-%COMP%]{position:relative;overflow:hidden}[_nghost-%COMP%], [_nghost-%COMP%]   .slide-container[_ngcontent-%COMP%]{width:100%;height:100%;background:#000}[_nghost-%COMP%]   .slide-container[_ngcontent-%COMP%]{position:absolute;top:0;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;opacity:0}[_nghost-%COMP%]   .slide-container.active[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   .dots-container[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%;z-index:3}[_nghost-%COMP%]   .dots-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot-slide[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}[_nghost-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot-slide[_ngcontent-%COMP%]{width:16px;height:16px;background:url(/assets/icons/gallery_off.png) no-repeat 50%;margin:5px;cursor:pointer}[_nghost-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot-slide.active[_ngcontent-%COMP%]{background:url(/assets/icons/gallery_on.png) no-repeat 50%}"]}),t}(),E=n("2mMm"),R=n("utYi");function T(t,e){if(1&t&&(p.Pb(0),p.Nb(1,"div",9),p.Ob()),2&t){var n=p.cc(2);p.Bb(1),p.hc("innerHTML",n.technicalSpeficication,p.qc)}}var Q=function(t){return["/my-work",t]};function S(t,e){if(1&t){var n=p.Sb();p.Rb(0,"div",1),p.Rb(1,"app-gallery",2),p.Zb("selected",(function(t){return p.pc(n),p.cc().setGalleryInformation(t)})),p.Qb(),p.Rb(2,"div",3),p.Rb(3,"button",4),p.Rb(4,"mat-icon",5),p.xc(5,"close"),p.Qb(),p.Qb(),p.Qb(),p.Rb(6,"div",6),p.Rb(7,"h2"),p.xc(8),p.Qb(),p.Nb(9,"div",7),p.vc(10,T,2,1,"ng-container",8),p.Qb(),p.Qb()}if(2&t){var i=e.ngIf,o=p.cc();p.Bb(1),p.hc("images",i.images),p.Bb(2),p.hc("routerLink",p.kc(5,Q,i.category)),p.Bb(5),p.yc(o.title),p.Bb(1),p.hc("innerHTML",o.description,p.qc),p.Bb(1),p.hc("ngIf",o.technicalSpeficication)}}var B=function(){function t(t,e,n){this.route=t,this.service=e,this.htmlParser=n}return t.prototype.ngOnInit=function(){var t=this;this.project$=this.route.paramMap.pipe(Object(l.a)((function(e){return t.service.getProjectById(e.get("id"))})),Object(a.a)((function(e){return Object(O.a)(Object(O.a)({},e),{description:t.htmlParser.transform(e.description),technicalSpecifications:t.htmlParser.transformLongText(e.technicalSpecifications)})})),Object(s.a)((function(e){t.selectedProject=e})))},t.prototype.setGalleryInformation=function(t){var e=t.image;if(0===t.index)return this.title=this.selectedProject.projectName,this.description=this.selectedProject.description,void(this.technicalSpeficication=this.selectedProject.technicalSpecifications);this.title=e.title,this.description=e.description,this.technicalSpeficication=null},t.\u0275fac=function(e){return new(e||t)(p.Mb(i.a),p.Mb(c.a),p.Mb(y.a))},t.\u0275cmp=p.Gb({type:t,selectors:[["app-project-details"]],decls:2,vars:3,consts:[["class","project-details-container",4,"ngIf"],[1,"project-details-container"],[1,"back-gallery",3,"images","selected"],[1,"project-details-actions"],["mat-icon-button","","aria-label","Close",1,"close-button",3,"routerLink"],["aria-hidden",""],[1,"gallery-information"],[1,"project-description",3,"innerHTML"],[4,"ngIf"],[1,"technical-specification",3,"innerHTML"]],template:function(t,e){1&t&&(p.vc(0,S,11,7,"div",0),p.dc(1,"async")),2&t&&p.hc("ngIf",p.ec(1,1,e.project$))},directives:[o.k,I,E.b,i.c,R.a],pipes:[o.b],styles:["[_nghost-%COMP%]{height:100%;background-color:#262626}.back-gallery[_ngcontent-%COMP%], [_nghost-%COMP%]{position:absolute;top:0;left:0;width:100%}.back-gallery[_ngcontent-%COMP%]{height:50%}@media (min-width:600px){.back-gallery[_ngcontent-%COMP%]{height:100%}}h2[_ngcontent-%COMP%]{font-size:1.2rem;margin:.2rem}h3[_ngcontent-%COMP%]{margin:0;font-size:1rem}.project-details-container[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0}.close-top-button[_ngcontent-%COMP%]{z-index:1;background:transparent;color:#fff}.gallery-information[_ngcontent-%COMP%]{z-index:1;position:relative;background:#fff;width:100%;padding:20px;position:absolute;top:50%;max-height:50%;overflow-y:auto}@media (min-width:600px){.gallery-information[_ngcontent-%COMP%]{top:auto;width:350px;margin-left:30px;max-width:90%;background:hsla(0,0%,100%,.7);max-height:inherit;bottom:45px}}.content[_ngcontent-%COMP%]{height:100%;-webkit-box-pack:start;justify-content:flex-start;overflow-y:auto}.content[_ngcontent-%COMP%], .project-details-actions[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.project-details-actions[_ngcontent-%COMP%]{-webkit-box-pack:end;justify-content:flex-end;padding:10px;font-size:2rem;z-index:1;position:relative}.technical-specification[_ngcontent-%COMP%]{margin-top:1rem;color:#777;font-size:.8rem;font-weight:700;font-style:italic}"]}),t}(),F=n("E1rE");n.d(e,"PortfolioModule",(function(){return z}));var L=[{path:"",component:m},{path:":categoryId",component:m},{path:":categoryId/:id",component:B}],z=function(){function t(){}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(e){return new(e||t)},imports:[[o.c,F.e,i.e.forChild(L),v.a]]}),t}()}}]);