const gateCanvas = document.getElementById('gateCanvas');
const gateCtx = gateCanvas.getContext('2d');
const imgs = { 
    not: new Image(),
    and: new Image(),
    or: new Image(),
    xor: new Image(),
    nand: new Image(),
    nor: new Image()
 };
imgs.not.src = 'image/not.png';
imgs.and.src = 'image/and.png';
imgs.or.src = 'image/or.png';
imgs.xor.src = 'image/xor.png';
imgs.nand.src = 'image/nand.png';
imgs.nor.src = 'image/nor.png';

let imgWidth = 100;
let imgHeight = 100;
let imgX = 100;
let imgY = 150;
// 오프셋도 추가해서 제대로 조정
imgs.not.onload = function() {
    gateCtx.drawImage(imgs.not, imgX, 0, imgWidth, imgHeight);
};
imgs.and.onload = function() {
    gateCtx.drawImage(imgs.and, imgX * 2, 0, imgWidth, imgHeight);
};
imgs.or.onload = function() {
    gateCtx.drawImage(imgs.or, imgX * 3, 0, imgWidth, imgHeight);
};
imgs.xor.onload = function() {
    gateCtx.drawImage(imgs.xor, imgX, imgY, imgWidth, imgHeight);
};
imgs.nand.onload = function() {
    gateCtx.drawImage(imgs.nand, imgX * 2, imgY, imgWidth, imgHeight);
};
imgs.nor.onload = function() {
    gateCtx.drawImage(imgs.nor, imgX * 3, imgY, imgWidth, imgHeight);
};