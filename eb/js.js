function Eb(){
    this.eventStore={};
}
Eb.prototype.on=function(eb,handler){
    this.eventStore[eb]=handler;
}
Eb.prototype.emit=function(eb){
    if(typeof this.eventStore[eb] =="function"){
        this.eventStore[eb].apply(null,Array.prototype.slice.call(arguments,1));
    }

}
var eb=new Eb;
eb.on("eb1",function(a){
    console.log(a);
});
eb.emit("eb1","hello");
