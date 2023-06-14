const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow_up');
document.addEventListener('scroll', ()=>{
  if(headerHeight < window.scrollY){
    header.classList.add('dark');
  }else{
    header.classList.remove('dark');
  }

  if (window.scrollY > 250) { 
    arrowUp.classList.add('active'); 
  } 
  else { 
    arrowUp.classList.remove('active'); 
  }
}) 

const hamburger = document.querySelector('.hamburger_menu');
const closeIcon = document.querySelector('.close_icon');
const sideBar = document.querySelector('.sidebar');

hamburger.addEventListener('click', openSidebar);
closeIcon.addEventListener('click', closeSidebar);

arrowUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
})

function openSidebar(){   
  document.body.style.overflow = "hidden";
    sideBar.classList.add('active');
}
function closeSidebar(){
  document.body.style.overflow = "auto";
    sideBar.classList.remove('active');
}