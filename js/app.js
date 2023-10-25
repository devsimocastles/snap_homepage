const wrapper = document.querySelector(".wrapper");
const menu_slider = document.querySelector(".menu__slider");
const navbar = document.querySelector(".navbar");


const desktop_menu = `
<img src="images/logo.svg" alt="logo" class="nav__icon">
<div class="content">
  <ul class="links">
    <li class="dropdown features">
       <a href="#" class="dropdown__title">Features</a>
       <div class="dropdown__content">
        <a href="#">
          <img src="images/icon-todo.svg" class="menu__icons" >Todo List</a>
        <a href="#">
          <img src="images/icon-calendar.svg" class="menu__icons" >Calendar</a>
        <a href="#">
          <img src="/images/icon-reminders.svg" class="menu__icons reminder" >Reminders</a>
        <a href="#">
          <img src="images/icon-planning.svg" class="menu__icons" >Planning</a>
       </div> 
    </li>
    <li class="dropdown company">
       <a href="#" class="dropdown__title">Company</a>
       <div class="dropdown__content">
          <a href="#">History</a>
          <a href="#">Our Team</a>
          <a href="#">Blog</a>
       </div>   
    </li>
    <li> <a href="#">Careers</a></li>
    <li> <a href="#">About</a></li>
  </ul>

  <ul class="user__buttons">
    <li><a href="#" class="login">Login</a></li>
    <li><a href="#" class="register">Register</a></li>
  </ul>
</div>`;

const mobile_menu = `
<img src="images/logo.svg" alt="logo" class="nav__icon">
<img src="images/icon-menu.svg" alt="menu icon" class="nav__icon mobile__menu__icon">
`;

function turnMenu (el, remove, add) {
    el.classList.remove(remove);
    el.classList.add(add);
}

function changeNavbar(){
    if (innerWidth >= 1024) {
        document.querySelector(".hero__img").setAttribute("src", "https://raw.githubusercontent.com/devsimocastles/snap_homepage/main/images/image-hero-desktop.png");
        navbar.innerHTML = desktop_menu;
    }
    else {
        navbar.innerHTML = mobile_menu;
        const close_icon = document.getElementById("close");
        const open_icon = document.querySelector(".mobile__menu__icon");
        open_icon.addEventListener("click", () => {
            turnMenu(wrapper, "sliderOff", "sliderOn");
            close_icon.addEventListener("click", () => {
                turnMenu(wrapper, "sliderOn", "sliderOff");
            })
        })
    }
}



window.addEventListener("resize", changeNavbar);
window.addEventListener("load", changeNavbar);
