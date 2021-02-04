(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1GRv":function(t,e,i){"use strict";i.r(e),i.d(e,"SelectionPageModule",(function(){return u}));var n=i("ofXK"),s=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),a=i("fXoL"),c=i("0GEM");function l(t,e){if(1&t&&(a.Mb(0,"ion-select-option",15),a.jc(1),a.Lb()),2&t){const t=e.$implicit;a.cc("value",t.title),a.xb(1),a.kc(t.title)}}const b=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.fairs=e,this.selectedFair=!1,this.selectedUsertype=!1}ngOnDestroy(){this.fairsInfoSubscription.unsubscribe()}ngOnInit(){this.fairsInfoSubscription=this.fairs.getFairs().subscribe(t=>{this.allFairs=Object.values(t),console.log(typeof t),console.log(this.allFairs)})}setFair(t){this.fair=t.detail.value,this.selectedFair=!0,console.log("setting the fair to "+this.fair)}setUsertype(t){console.log(t),this.usertype=t.detail.value,this.selectedUsertype=!0,console.log("setting the usertype to "+this.usertype),this.allFairs.find(t=>{switch(this.id=t._id,this.date=t.date,this.fair=t.title,this.summary=t.summary,this.address=t.address,this.city=t.city,this.state=t.state,this.zip=t.zip,this.usertype){case"student":this.agenda=JSON.stringify(t.studentAgenda),this.faq=JSON.stringify(t.studentFAQ),this.partners=JSON.stringify(t.partners),console.log("Student");break;case"chaperone":this.agenda=JSON.stringify(t.chaperoneAgenda),this.faq=JSON.stringify(t.chaperoneFAQ),this.partners=JSON.stringify(t.partners),console.log("Chaperone");break;case"volunteer":this.agenda=JSON.stringify(t.volunteerAgenda),this.faq=JSON.stringify(t.volunteerFAQ),this.partners=JSON.stringify(t.partners),console.log("Volunteers");break;case"partner":this.agenda=JSON.stringify(t.partnerAgenda),this.faq=JSON.stringify(t.partnerFAQ),this.partners=JSON.stringify(t.partners),console.log("Partner")}})}fairPage(){console.log("going to the fair page"),this.router.navigate(["/fair-page",this.id,this.fair,this.date,this.address,this.city,this.state,this.zip,this.usertype,this.summary,this.agenda,this.faq,this.partners])}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(r.g),a.Hb(c.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-selection"]],decls:54,vars:4,consts:[["slot","start"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","8","size-lg","8"],[1,"desciption"],[1,"line-input"],["placeholder","Select fair",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"className"],["placeholder","Select user type",3,"ionChange"],["value","student"],["value","volunteer"],["value","chaperone"],["value","partner"],["size-xs","11","size-sm","10","size-md","8","size-lg","8",1,"ion-text-center"],[1,"orange-button",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",0),a.Ib(3,"ion-back-button"),a.Mb(4,"ion-title"),a.jc(5,"Back"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-content"),a.Mb(7,"ion-grid"),a.Mb(8,"ion-row",1),a.Mb(9,"ion-col",2),a.Mb(10,"h1"),a.jc(11,"Fairs"),a.Lb(),a.Mb(12,"p",3),a.jc(13,"Text about this page goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid officiis dicta at iste rerum illo nulla non. Accusamus praesentium nisi provident numquam, quaerat atque veritatis, vitae exercitationem soluta culpa amet."),a.Lb(),a.Lb(),a.Lb(),a.Mb(14,"ion-row",1),a.Mb(15,"ion-col",2),a.Mb(16,"ion-list",4),a.Mb(17,"ion-label"),a.Mb(18,"h2"),a.jc(19,"Select a fair"),a.Lb(),a.Lb(),a.Mb(20,"ion-item"),a.Mb(21,"ion-select",5),a.Ub("ionChange",(function(t){return e.setFair(t)})),a.ic(22,l,2,2,"ion-select-option",6),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(23,"ion-row",1),a.Mb(24,"ion-col",2),a.Mb(25,"div",7),a.Mb(26,"ion-list",4),a.Mb(27,"ion-label"),a.Mb(28,"h2"),a.jc(29,"What will you be coming as?"),a.Lb(),a.Mb(30,"ul"),a.Mb(31,"li"),a.jc(32,"Student"),a.Lb(),a.Mb(33,"li"),a.jc(34,"Chaperone"),a.Lb(),a.Mb(35,"li"),a.jc(36,"Volunteer"),a.Lb(),a.Mb(37,"li"),a.jc(38,"Partner"),a.Lb(),a.Lb(),a.Lb(),a.Mb(39,"ion-item"),a.Mb(40,"ion-select",8),a.Ub("ionChange",(function(t){return e.setUsertype(t)})),a.Mb(41,"ion-select-option",9),a.jc(42,"Student"),a.Lb(),a.Mb(43,"ion-select-option",10),a.jc(44,"Volunteer"),a.Lb(),a.Mb(45,"ion-select-option",11),a.jc(46,"Chaperone"),a.Lb(),a.Mb(47,"ion-select-option",12),a.jc(48,"Partner"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(49,"ion-row",1),a.Mb(50,"ion-col",13),a.Mb(51,"div",7),a.Mb(52,"ion-button",14),a.Ub("click",(function(){return e.fairPage()})),a.jc(53," Next "),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.xb(22),a.bc("ngForOf",e.allFairs),a.xb(3),a.bc("className",e.selectedFair?"on":"off"),a.xb(26),a.bc("className",e.selectedUsertype?"on":"off"),a.xb(1),a.bc("disabled",!e.fair&&!e.usertype))},directives:[o.p,o.H,o.h,o.d,o.e,o.G,o.k,o.o,o.z,o.j,o.u,o.t,o.s,o.A,o.Q,n.h,o.B,o.g],styles:["ion-row[_ngcontent-%COMP%]{margin-bottom:20px}h1[_ngcontent-%COMP%]{color:#0055a5;font-size:3em;z-index:999;margin-top:40px}h2[_ngcontent-%COMP%]{font-weight:600;font-size:1.45em;line-height:1.85em;background:#faa71b;color:#fff;padding:5px 0 5px 20px;margin-bottom:24px;border-radius:5px}ion-select-option[_ngcontent-%COMP%]{background:#fff}.desciption[_ngcontent-%COMP%]{font-size:1.2em;line-height:1.6em;padding-bottom:30px;border-bottom:2px solid #f0f0f0;color:#333}.off[_ngcontent-%COMP%], .on[_ngcontent-%COMP%]{opacity:0}.on[_ngcontent-%COMP%]{-webkit-animation:slide-up .2s ease .5s forwards;animation:slide-up .2s ease .5s forwards}li[_ngcontent-%COMP%]{font-size:1.7em;margin:10px 0;color:#0055a5}@-webkit-keyframes slide-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(-10px)}}@keyframes slide-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(-10px)}}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(b)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[n.b,s.d,s.k,o.I,p]]}),t})()}}]);