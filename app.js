function $(el) {
  return document.querySelector(el);
}

const menuIcon = $('#menu_icon');
const menuList = $('.menu_small_screen');

let open = false;

menuIcon.addEventListener('click', () => {
  if (open) {
    menuList.style.display = 'none';
    open = false;
  } else {
    menuList.style.display = 'flex';
    open = true;
  }
});
