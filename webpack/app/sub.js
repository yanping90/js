import $ from "jquery"

export default {
    test: function() {
        //var greet = document.createElement('div');
        //greet.textContent = "Hi there and greetings!";

        return $("body").html("hello world");
    }
}
