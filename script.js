let left_div = document.querySelector('.left');
let right_div = document.querySelector('.right');
let left_img_display = document.querySelector('.left > img');
let right_img_display = document.querySelector('.right > img');
let buttons = document.querySelectorAll('.buttons > *');

ChangeWidth = (obj, e) => {
  let left = e + "%";
  let right = (100 - e) + "%";
  left_div.style.width = left;
  right_div.style.width = right;
  buttons.forEach((e) => e.classList.remove("active"));
  if (e > 50) {
    left_img_display.style.cssText = "display: inline; width: auto;";
    right_img_display.style.cssText = "display: none;";
  }
  else if (e < 50) {
    right_img_display.style.cssText = "display: inline; width: auto;";
    left_img_display.style.cssText = "display: none;";
  } else {
    left_img_display.style.cssText = "display: inline; width: 100%;";
    right_img_display.style.cssText = "display: inline; width: 100%;";
  }
  obj.classList.add("active");
}