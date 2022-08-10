const openMobileNav = document.getElementById('open-mobile-nav')
const mobileNav = document.querySelector('.mobile-nav')

openMobileNav.addEventListener('click', () => {
    if (openMobileNav.classList.contains('active')) {
        openMobileNav.classList.remove('active')
        mobileNav.classList.remove('active')
    }else{
        openMobileNav.classList.add('active')
        mobileNav.classList.add('active')

    }

})

const right=document.getElementById("right");
const left=document.getElementById("left");
const images = document.querySelector(".slider")
let sliderCount=0;

right.addEventListener('click', () => {
    images.scrollTo(images.scrollLeft + images.children[1].offsetLeft,0)
    sliderCount++
    if(sliderCount%4==0){
        images.scrollTo(images.scrollLeft - images.children[3].offsetLeft,0)
        
        
    }
    console.log(sliderCount)
  })
  left.addEventListener('click', () => {
    images.scrollTo(images.scrollLeft - images.children[1].offsetLeft,0)
    sliderCount--
    if(sliderCount%4==3 || sliderCount%4==-3){
        images.scrollTo(images.scrollLeft + images.children[3].offsetLeft,0)
        
        
    }
    console.log(sliderCount)

  })
 








