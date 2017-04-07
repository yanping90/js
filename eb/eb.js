
function Eb () {
    this.eventStore = {};
}

Eb.prototype.on = function (ev, handler) {
    this.eventStore[ev] = handler;
};

Eb.prototype.emit = function (ev) {
    if(typeof this.eventStore[ev] =="function"){
        this.eventStore[ev].apply(null,Array.prototype.slice.call(arguments,1));
    }
};

var eb = new Eb;
eb.on("ev1", function (a) {
    console.log(a);
});
eb.on("ev2", function (a,b) {
    console.log(a,b);
});
eb.emit("ev1","hello");
eb.emit("ev2","hello","world");
