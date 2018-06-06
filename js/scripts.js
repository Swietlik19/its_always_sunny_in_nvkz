$(function(){
  var currentStoryName = "";

  /* Смена оформления в зависимости от текущего времени суток */
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  
  if (currentHour >= 20 || currentHour < 6) {
    $("body").addClass("bg--dark");
    $(".main-content").addClass("bg--dark");
    $(".main-header").addClass("main-header--dark");
    $(".main-header__navigator-item-ref").css("color","azure");
  }
  
  $(".main-content__day").click(function(){
    $(".main-content__viewer").removeClass(".main-content__viewer--visible");
    $(".main-content__day").removeClass("main-content__day--pressed");
    var elem = this;
    var viewer = document.getElementById("viewer_id");
    var storyName = elem.id.replace("day-","");
    var whereToPlaceImg = document.getElementsByClassName("main-content__viewer-img");
    var idParent = elem.parentElement.id;
    var whereToPlaceIn = document.getElementById("between-weeks-" + idParent.substring(5,idParent.length));
    if (currentStoryName == storyName) {
      $(".main-content__viewer").addClass("main-content__viewer--hidden");
      currentStoryName = "";
    } else {
      $(".main-content__viewer").appendTo(whereToPlaceIn);
      $(".main-content__viewer").removeClass("main-content__viewer--hidden");
      $(".main-content__viewer").addClass("main-content__viewer--visible");
      $("#" + elem.id).addClass("main-content__day--pressed");
      whereToPlaceImg[0].src = "img/story_images/gif_" + storyName + ".gif";
      currentStoryName = storyName;
    }
  });
});