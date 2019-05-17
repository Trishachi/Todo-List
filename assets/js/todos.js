//Check off specific Todos by clicking
$("li").click(function(){
  // if($(this).css("color") === "rgb(128, 128, 128)"){
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });
  // } else {
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // }
  $(this).toggleClass("completed");
});


//Delete Todo by clicking on X:
$("span").click(function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
