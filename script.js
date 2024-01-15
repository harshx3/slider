const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector('.nextBtn');
const image = document.querySelector('.image');
const loader = document.querySelector('.loader')

const imageList = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];
let currentIndex = 0;

 prevBtn.addEventListener('click', changeImage);
 nextBtn.addEventListener("click", changeImage);

 const buttonActions = {
    prevBtn: {
        action: () => {
            currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
            console.log('PrevBtn');
        }
    },
    nextBtn: {
        action: () => {
            currentIndex = (currentIndex + 1) % imageList.length;
            console.log('NextBtn');
        }
    }
};


 function changeImage() {

    let pressedBtn = null;
    if(event.key === "ArrowRight") {
        pressedBtn = 'nextBtn'
    }
    else if(event.key === "ArrowLeft") {
        pressedBtn = 'leftBtn';
    }

    if(pressedBtn) {
        buttonActions[pressedBtn].action();
    }
    else {
        console.log("invalid key");
    }
 
     const currentImg = imageList[currentIndex];

      loader.style.display = 'block';
      image.style.display = 'none';
      setTimeout(() => {
          image.src = `./images/${currentImg}.jpg`;
          loader.style.display = 'none';
      image.style.display = 'block';
        
      }, 100);

 }

 document.addEventListener('keydown', changeImgUsingKey);

