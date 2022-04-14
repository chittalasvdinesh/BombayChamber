let headerEl=document.getElementById('header');
let nav =document.getElementById('nav');
var image=document.getElementById('image');

console.log(image.offsetHeight)
console.log(headerEl.offsetHeight)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > headerEl.offsetHeight ||document.documentElement.scrollTop > headerEl.offsetHeight) {
    nav.classList.add('navbar-bg')
  } else {
    nav.classList.remove('navbar-bg')
  }
}

arr=[
    './Images/BlackIcon.png',
    './Images/nav-icon.png',
    './Images/bcImg.png'
]
obj={

}

i=0

image.style.height=image.offsetHeight+'px';
console.log(image.height)

setInterval(imagesSlider,3000);

function imagesSlider(){
    if (i<arr.length){
        
        image.src=arr[i];
        i+=1
    }

    else{
        i=0
    }

    


}

function prevSlide(){
    if (i>0){
        i-=1
        image.src=arr[i]
        
    }

    else{
        i=arr.length-1;
        image.src=arr[i]
    }
    

}



function nextSlide(){
    if (i<arr.length-1){
        i+=1
        image.src=arr[i]
        
    }

    else{
        i=0
        image.src=arr[i]
    }
}


window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.service-card');

    for(i=0;i < reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 10;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}