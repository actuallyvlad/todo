$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$('input[type="text"]').keypress(function(e){
  if(e.which === 13) {
    var taskText = $(this).val();

    if (taskText) {
      $("ul").append('<li><span><i class="fas fa-trash"></i></span> ');
      // !! escape html
      $("li:last-child").append(document.createTextNode(taskText));
      $("ul").append("</li>");
    }

    $(this).val("");
  }
});

$("h1 i").click(function(){
  $('input[type="text"]').fadeToggle();
  $("h1 i").toggleClass("fa-minus");
  $("h1 i").toggleClass("fa-plus");
});