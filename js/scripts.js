$(function(){
  var currentStoryName = "";

  /* Смена оформления в зависимости от текущего времени суток */
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  
  if (currentHour >= 20 || currentHour < 6) {
    $("body").addClass("bg--dark");
    $(".main-content").addClass("bg--dark");
    $(".main-header").addClass("main-header--dark");
    $(".main-footer").addClass("main-footer--dark");
    $(".main-header__navigator-item-ref").css("color","azure");
  }
  
  $(".main-content__day").click(function(){
    $(".main-content__viewer").removeClass(".main-content__viewer--visible");
    $(".main-content__day").removeClass("main-content__day--pressed");
    $(".main-content__viewer-story").empty();
    var elem = this;
    var viewer = document.getElementById("viewer_id");
    var storyName = elem.id.replace("day-","");
    var storyId ="story-" + storyName;
    var whereToPlaceImg = document.getElementsByClassName("main-content__viewer-img");
    var idParent = elem.parentElement.id;
    var whereImgToPlaceIn = document.getElementById("between-weeks-" + idParent.substring(5,idParent.length));
    if (currentStoryName == storyName) {
      $(".main-content__viewer").addClass("main-content__viewer--hidden");
      currentStoryName = "";
    } else {
      $("#" + storyId).clone().appendTo($(".main-content__viewer-story" ));
      $(".main-content__viewer").appendTo(whereImgToPlaceIn);
      $(".main-content__viewer").removeClass("main-content__viewer--hidden");
      $(".main-content__viewer").addClass("main-content__viewer--visible");
      $("#" + elem.id).addClass("main-content__day--pressed");
      whereToPlaceImg[0].src = "img/story_images/gif_" + storyName + ".gif";
      currentStoryName = storyName;
    }
  });
  
  $(".main-content__nav-item").click(function(){
    $(".main-content__nav-item").removeClass("main-content__nav-item--active");
    $(this).addClass("main-content__nav-item--active");
    $(".main-content__month").removeClass("main-content__month--visible");
    $("#" + this.id.replace("title-","month-")).addClass("main-content__month--visible");
  });
});