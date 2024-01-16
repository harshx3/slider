const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector('.nextBtn');
const image = document.querySelector('.image');
const loader = document.querySelector('.loader')

const imageList = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];
let currentIndex = 0;

 prevBtn.addEventListener('click', changeImage);
 nextBtn.addEventListener("click", changeImage);
 document.addEventListener('keydown', changeImage);

 function changeImage() {
    if(this === prevBtn || event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        console.log(event.key);
    }
    else if(this === nextBtn || event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % imageList.length;
    }
    else {
        console.log('invalid');
    }

    const currentImage = imageList[currentIndex];

    loader.style.display = 'block';
    image.style.display = 'none';
    setTimeout(() => {
        image.src = `./images/${currentImage}.jpg`
        loader.style.display = 'none';
       image.style.display = 'block';
    }, 100);


    console.log('change image called');
 }