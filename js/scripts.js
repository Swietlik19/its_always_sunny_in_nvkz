let currentStoryName = "";

/* Смена цветовой схемы в зависимости от текущего времени суток */
let changeColorScheme = function() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();

  if (currentHour >= 20 || currentHour < 6) {
    document.querySelector("body").classList.add("bg--dark");
    document.querySelector(".main-content").classList.add("bg--dark");
    document.querySelector(".main-header").classList.add("main-header--dark");
    document.querySelector(".main-footer").classList.add("main-footer--dark");
    let refObjs = document.querySelectorAll(".main-header__navigator-item-ref");
    for (elem of refObjs) elem.style.color = "azure";
  }
};
changeColorScheme();

/* Функция при клике по дням */
let changeDay = function(elemDay) {
  let viewer = document.getElementById("viewer_id");
  let storyName = elemDay.id.replace("day-","");
  let story = document.getElementById("story-" + storyName);
  let whereToPlaceImg = document.querySelector(".main-content__viewer-img");
  let idParent = elemDay.parentElement.id;
  let whereStoryToPlaceIn = document.getElementById("between-weeks-" + idParent.substring(5,idParent.length));
  
  viewer.classList.remove("main-content__viewer--visible");
  let dayObjs = document.querySelectorAll(".main-content__day");
  for (elem of dayObjs) elem.classList.remove("main-content__day--pressed");
  document.querySelector(".main-content__viewer-story").innerHTML = "";
  
  if (currentStoryName == storyName) {
    viewer.classList.add("main-content__viewer--hidden");
    currentStoryName = "";
  } else {
    /* Переносим историю дня в viewer если она есть, если нет - переносим пусто */
    document.querySelector(".main-content__viewer-story" ).innerHTML = (story || "" != "") ? story.innerHTML : "";
    whereStoryToPlaceIn.insertBefore(viewer, null);
    viewer.classList.remove("main-content__viewer--hidden");
    viewer.classList.add("main-content__viewer--visible");
    elemDay.classList.add("main-content__day--pressed");
    whereToPlaceImg.src = "img/story_images/gif_" + storyName + ".gif";
    currentStoryName = storyName;
  }
};

/* Функция при смене месяцев на навигаторе месяцев */
let changeMonth = function(elemMonth) {
  let navObjs = document.querySelectorAll(".main-content__nav-item");
  for (elem of navObjs) elem.classList.remove("main-content__nav-item--active");
  elemMonth.classList.add("main-content__nav-item--active");
  
  let monthObjs = document.querySelectorAll(".main-content__month");
  for (elem of monthObjs) elem.classList.remove("main-content__month--visible");
  
  /* Расчитываем ID таблички с выбранным месяцем, делаем её видимой */
  document.getElementById(elemMonth.id.replace("title-","month-")).classList.add("main-content__month--visible");
};