//Check off specific Todos by clicking
$("ul").on("click", "li", function(){
//code runs when an li is clikced inside the ul
  $(this).toggleClass("completed");
});


//Delete Todo by clicking on X:
$("ul").on("click", "span", function(event){
  //code runs when an span is clikced inside the ul
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Codes for adding Todos
//Notes
// - Xter code for enter key is 13
//Which method - For key or mouse events, this property indicates the specific key or button that was pressed.
$("input[type = 'text']").keypress(function(event){
  if(event.which === 13){
    //grab new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //Add new todo to end of li
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    //Clear out the input field
  }
});

//Toogling Add new todo Application
$(".fa-edit").click(function(){
  $("input[type='text']").fadeToggle();
});
