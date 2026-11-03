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
let imgX = 250;
let imgY = 0;

imgs.not.onload = function() {
    gateCtx.drawImage(imgs.not, imgX, 0, imgWidth, imgHeight);
};
imgs.and.onload = function() {
    gateCtx.drawImage(imgs.and, imgX, imgY, imgWidth, imgHeight);
};
imgs.or.onload = function() {
    gateCtx.drawImage(imgs.or, 200, 0, imgWidth, imgHeight);
};
imgs.xor.onload = function() {
    gateCtx.drawImage(imgs.xor, 0, 100, imgWidth, imgHeight);
};
imgs.nand.onload = function() {
    gateCtx.drawImage(imgs.nand, 100, 100, imgWidth, imgHeight);
};
imgs.nor.onload = function() {
    gateCtx.drawImage(imgs.nor, 200, 100, imgWidth, imgHeight);
};