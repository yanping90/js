
function Eb () {
    this.eventStore = {};
}

Eb.prototype.on = function (ev, handler) {
    if(typeof handler != "function"){
        return;
    }
    if(typeof this.eventStore[ev] == "undefined"){
        this.eventStore[ev]=[];
    }
    this.eventStore[ev].push(handler);
};

Eb.prototype.emit = function (ev, params) {
    if(typeof this.eventStore[ev] == "undefined"){
        return;
    }
    for(var i=0;i<this.eventStore[ev].length;i++){
        this.eventStore[ev][i].apply(null, params);
    }
};

var eb = new Eb;
eb.on("ev1", function () {
    console.log(arguments);
});
eb.emit("ev1", ["hello"]);
eb.emit("ev1", ["hello", "a2"]);
//eb.emit("ev2", ["a1", "a2"]);

//var name = "window->name";
//var showName = function(){
//    console.log(this.name);
//};
//function F1 (){
//    this.name = "F1->name";
//}
//function F2 (){
//    this.name = "F2->name";
//}
//
//var f1 = new F1;
//var f2 = new F2;
//showName.call(null);
//showName.call(f1);
//showName.call(f2);

