const btnToggle = document.getElementById('btnToggle');
const btnClose = document.getElementById('btnClose');
const navMenu = document.getElementById('navMenu');
const iconToggle = document.querySelectorAll('.iconToggle');
const ocultList = document.querySelectorAll('.ocultList');

btnToggle.addEventListener("click", () => {
   navMenu.style.transition = '.3s';
   navMenu.style.right = 0;
})

btnClose.addEventListener("click", ()=>{
   navMenu.style.transition = 'none';
   navMenu.style.right = "-100%"
})

iconToggle.forEach(btn => {
   btn.addEventListener("click", (e)=> {
      const parent = e.target.parentElement.children[1];
      if(e.target.innerText === "SOCIAL"){
         ocultList[0].classList.toggle('open');
         parent.classList.toggle('rotate');
      } else {
         ocultList[1].classList.toggle('open');
         parent.classList.toggle('rotate');
      }
   })
})