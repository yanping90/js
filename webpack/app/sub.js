import $ from "jquery"
var config = require("./config.json");
//export default {
//    test: function() {
//        return $("body").html(config.text);
//    }
//}

//module.exports = function() {
//    console.log(config.text);
//};
module.exports = function() {
    var d1=new Date("2017-4-24").getTime()-new Date().getTime();
    if(d1<0){
        return ;
    }
    var day =d1 / (24*60*60*1000) >>0 ;
    var hour = d1 / (60*60*1000) % 24 >> 0;
    var minute = d1 / (60 * 1000) %60 >>0;
    var second = d1 % 60 >>0;
};