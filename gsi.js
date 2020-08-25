$(document).ready(function() {
    $.post("gsi.json", "",
        function (data, textStatus, jqXHR) {
            $("#d1").text(data.menu.id);
        },
        "json"
    );
});