cordova.define("cordova-plugin-moodleapp.moodleapp", function(require, exports, module) {
"use strict";(()=>{var o=class{async setNavigationBarColor(a){await new Promise((s,e)=>{cordova.exec(s,e,"SystemUI","setNavigationBarColor",[a])})}};var i={systemUI:new o};module.exports=i;})();

});
