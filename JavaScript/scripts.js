$(function() {
    $("#catButton").on("click", function(){
        $('#catModal').modal('toggle');
    });
});

$(function() {
    $("#catButton").on("click", function(){
        if ($("#catButton").children("i").hasClass("fa-chevron-down")) {
            $("#catButton").children("i").removeClass("fa-chevron-down");
            $("#catButton").children("i").addClass("fa-chevron-up");
        } else {
            $("#catButton").children("i").removeClass("fa-chevron-up");
            $("#catButton").children("i").addClass("fa-chevron-down"); 
        }
    });
});