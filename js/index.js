//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////헤더////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const elHeader1 = document.querySelector('.header1');
const eldiv1 = document.querySelector('.header1 img');
const eldiv2 = document.querySelectorAll('.header1 > .header2 > div');
const eldiv3 = document.querySelectorAll('.header1 > .header3 > img');

eldiv2.forEach((div2)=>{
    div2.addEventListener('mouseenter',()=>{
        elHeader1.style = `background-color: #fff;`;
        elHeader1.classList.add('active');
        document.getElementById("imgId").src = "./img/logoOn.png";
        document.getElementById("imgId2").src = "./img/intranet.png";
        document.getElementById("imgId3").src = "./img/menuIconon.png";
    })
});

window.addEventListener('scroll',()=>{
    let delta = window.pageYOffset;
    console.log(delta)
    if(delta > 0) {
        elHeader1.style = `background-color: #fff;`;
        elHeader1.classList.add('active');
        document.getElementById("imgId").src = "./img/logoOn.png";
        document.getElementById("imgId2").src = "./img/intranet.png";
        document.getElementById("imgId3").src = "./img/menuIconon.png";
    }
});

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////백그라운드 이미지 변경/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const bgImg = document.querySelector('.main-page > .main-top');

let imgArray = ['01.jpg','02.jpg','03.jpg'];
let imgIndex = 1;


function changeImg(){
    
    bgImg.style =  `background-image: url('./img/${imgArray[imgIndex]}');`;
    imgIndex++;
    if(imgIndex >= imgArray.length)
    {
        imgIndex=0;
    }
}
setInterval(changeImg,5000);