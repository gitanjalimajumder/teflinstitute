(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{Rddo:function(o,e,s){"use strict";s.r(e),s.d(e,"AddonModWorkshopPrefetchHandlerLazyService",(function(){return v})),s.d(e,"AddonModWorkshopPrefetchHandler",(function(){return g}));var d=s("mrSG"),i=s("ULAo"),t=s("Xzvb"),r=s("4pns"),n=s("ozqY"),a=s("mWdr"),c=s("9+EE"),h=s("bFG1"),p=s("j3ag"),l=s("i1f9"),u=s("8/zp"),f=s("GuJL"),A=s("o74T"),k=s("fXoL");let v=(()=>{class AddonModWorkshopPrefetchHandlerLazyService extends A.a{getFiles(o,e){return Object(d.a)(this,void 0,void 0,(function*(){return(yield this.getWorkshopInfoHelper(o,e,{omitFail:!0})).files}))}getWorkshopInfoHelper(o,e,s={}){var i;return Object(d.a)(this,void 0,void 0,(function*(){let t,r,n=[],h=[];const p=Object.assign({cmId:o.id},s),f=yield c.b.getSite(s.siteId);s.siteId=null!==(i=s.siteId)&&void 0!==i?i:f.getId();const A=f.getUserId();try{t=yield l.AddonModWorkshop.getWorkshop(e,o.id,s)}catch(o){if(s.omitFail)return{groups:[],files:[]};throw o}try{if(h=this.getIntroFilesFromInstance(o,t),h=h.concat(t.instructauthorsfiles||[]).concat(t.instructreviewersfiles||[]),r=yield l.AddonModWorkshop.getWorkshopAccessInformation(t.id,p),r.canviewallsubmissions){const e=yield a.a.getActivityGroupInfo(o.id,!1,void 0,s.siteId);e.groups&&0!=e.groups.length||(e.groups=[{id:0,name:""}]),n=e.groups}const e=yield l.AddonModWorkshop.getUserPlanPhases(t.id,p),i=u.AddonModWorkshopHelper.canSubmit(t,r,e[l.AddonModWorkshopPhase.PHASE_SUBMISSION].tasks),c=u.AddonModWorkshopHelper.canAssess(t,r),f=[];return i&&f.push(u.AddonModWorkshopHelper.getUserSubmission(t.id,{userId:A,cmId:o.id}).then((o=>{o&&(h=h.concat(o.contentfiles||[]).concat(o.attachmentfiles||[]))}))),r.canviewallsubmissions&&t.phase>=l.AddonModWorkshopPhase.PHASE_SUBMISSION&&f.push(l.AddonModWorkshop.getSubmissions(t.id,p).then((e=>Object(d.a)(this,void 0,void 0,(function*(){yield Promise.all(e.map((e=>Object(d.a)(this,void 0,void 0,(function*(){h=h.concat(e.contentfiles||[]).concat(e.attachmentfiles||[]);const s=yield l.AddonModWorkshop.getSubmissionAssessments(t.id,e.id,{cmId:o.id});s.forEach((o=>{h=h.concat(o.feedbackattachmentfiles).concat(o.feedbackcontentfiles)})),t.phase>=l.AddonModWorkshopPhase.PHASE_ASSESSMENT&&c&&(yield Promise.all(s.map((o=>u.AddonModWorkshopHelper.getReviewerAssessmentById(t.id,o.id)))))})))))}))))),t.phase>=l.AddonModWorkshopPhase.PHASE_ASSESSMENT&&c&&f.push(u.AddonModWorkshopHelper.getReviewerAssessments(t.id,p).then((o=>{o.forEach((o=>{h=h.concat(o.feedbackattachmentfiles).concat(o.feedbackcontentfiles)}))}))),yield Promise.all(f),{workshop:t,groups:n,files:h.filter((o=>void 0!==o))}}catch(o){if(s.omitFail)return{workshop:t,groups:n,files:h.filter((o=>void 0!==o))};throw o}}))}invalidateContent(o,e){return Object(d.a)(this,void 0,void 0,(function*(){yield l.AddonModWorkshop.invalidateContent(o,e)}))}isDownloadable(o,e){return Object(d.a)(this,void 0,void 0,(function*(){const s=yield l.AddonModWorkshop.getWorkshop(e,o.id,{readingStrategy:1});return(yield l.AddonModWorkshop.getWorkshopAccessInformation(s.id,{cmId:o.id})).canswitchphase||s.phase>l.AddonModWorkshopPhase.PHASE_SETUP}))}prefetch(o,e){return this.prefetchPackage(o,e,(s=>this.prefetchWorkshop(o,e,s)))}getAllGradesReport(o,e,s,i){return Object(d.a)(this,void 0,void 0,(function*(){const d=[];e.forEach((e=>{d.push(l.AddonModWorkshop.fetchAllGradeReports(o,{groupId:e.id,cmId:s,siteId:i}))}));const t=yield Promise.all(d),r={};return t.forEach((o=>{o.forEach((o=>{o.submissionid&&(r[o.submissionid]=o)}))})),h.a.objectToArray(r)}))}prefetchWorkshop(o,e,s){return Object(d.a)(this,void 0,void 0,(function*(){const a=[],p={readingStrategy:2,siteId:s},f=Object.assign({cmId:o.id},p),A=(yield c.b.getSite(s)).getUserId(),k=yield this.getWorkshopInfoHelper(o,e,p);if(!k.workshop)return;const v=k.workshop,m=[],g=[];m.push(n.a.addFilesToQueue(s,k.files,this.component,o.id)),m.push(l.AddonModWorkshop.getWorkshopAccessInformation(v.id,f).then((e=>Object(d.a)(this,void 0,void 0,(function*(){const i=yield l.AddonModWorkshop.getUserPlanPhases(v.id,f),t=u.AddonModWorkshopHelper.canSubmit(v,e,i[l.AddonModWorkshopPhase.PHASE_SUBMISSION].tasks),r=u.AddonModWorkshopHelper.canAssess(v,e),c=[];t&&(c.push(l.AddonModWorkshop.getSubmissions(v.id,f)),a.push(A));let h=Promise.resolve();e.canviewallsubmissions&&v.phase>=l.AddonModWorkshopPhase.PHASE_SUBMISSION&&(h=this.getAllGradesReport(v.id,k.groups,o.id,s).then((o=>{o.forEach((o=>{a.push(o.userid),o.submissiongradeoverby&&a.push(o.submissiongradeoverby),o.reviewedby&&o.reviewedby.forEach((o=>{a.push(o.userid),g[o.assessmentid]=o.assessmentid})),o.reviewerof&&o.reviewerof.forEach((o=>{a.push(o.userid),g[o.assessmentid]=o.assessmentid}))}))}))),v.phase>=l.AddonModWorkshopPhase.PHASE_ASSESSMENT&&r&&(h=h.finally((()=>Object(d.a)(this,void 0,void 0,(function*(){const e=yield u.AddonModWorkshopHelper.getReviewerAssessments(v.id,{userId:A,cmId:o.id,siteId:s});let d=[];e.forEach((o=>{var e,s,i;(null===(e=o.submission)||void 0===e?void 0:e.authorid)==A&&m.push(l.AddonModWorkshop.getAssessment(v.id,o.id,f)),a.push(o.reviewerid),a.push(o.gradinggradeoverby),g[o.id]=o.id,d=d.concat((null===(s=o.submission)||void 0===s?void 0:s.attachmentfiles)||[]).concat((null===(i=o.submission)||void 0===i?void 0:i.contentfiles)||[])})),yield n.a.addFilesToQueue(s,d,this.component,o.id)}))))),h=h.finally((()=>{if(g.length>0)return Promise.all(g.map((o=>l.AddonModWorkshop.getAssessmentForm(v.id,o,f))))})),c.push(h),v.phase==l.AddonModWorkshopPhase.PHASE_CLOSED&&(c.push(l.AddonModWorkshop.getGrades(v.id,f)),e.canviewpublishedsubmissions&&c.push(l.AddonModWorkshop.getSubmissions(v.id,f))),yield Promise.all(c)}))))),m.push(i.a.getModuleBasicInfoByInstance(v.id,"workshop",{siteId:s})),m.push(i.a.getModuleBasicGradeInfo(o.id,s)),m.push(h.a.ignoreErrors(t.a.getCourseByField("id",e,s))),yield Promise.all(m),yield r.a.prefetchProfiles(a,e,s)}))}sync(o,e,s){return Object(d.a)(this,void 0,void 0,(function*(){return f.AddonModWorkshopSync.syncWorkshop(o.instance,s)}))}}return AddonModWorkshopPrefetchHandlerLazyService.ɵfac=function AddonModWorkshopPrefetchHandlerLazyService_Factory(o){return m(o||AddonModWorkshopPrefetchHandlerLazyService)},AddonModWorkshopPrefetchHandlerLazyService.ɵprov=k.uc({token:AddonModWorkshopPrefetchHandlerLazyService,factory:AddonModWorkshopPrefetchHandlerLazyService.ɵfac,providedIn:"root"}),AddonModWorkshopPrefetchHandlerLazyService})();const m=k.Gc(v),g=Object(p.M)(v)}}]);