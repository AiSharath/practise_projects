const imagecEl=document.querySelector('.img-container');
const btnEl=document.querySelector('.btn');

btnEl.addEventListener('click',()=>{
     imgNum=10;
    addNewImg();
});

function addNewImg(){
    for (let i = 0; i < imgNum; i++) {
        const newImg=document.createElement("img");      
    newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imagecEl.appendChild(newImg);
}
}