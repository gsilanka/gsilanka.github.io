$(document).ready(function() {
    $("#d1").load("gsi.txt", "data", function (response, status, request) {
        this;
    });
});