$(document).ready(function() {
    $("#centered").css("top", function() {
        return ($(document).height()/2 - $("#centered").height()/2);
    });
    $("#centered").css("left", function() {
        return ($(document).width()/2 - $("#centered").width()/2);
    });
});