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
let distantX = 100;
let distantY = 150;
let offsetX = 30;
let offsetY = 30;
imgs.not.onload = function() {
    gateCtx.drawImage(imgs.not, offsetX, offsetY, imgWidth, imgHeight);
};
imgs.and.onload = function() {
    gateCtx.drawImage(imgs.and, distantX + offsetX, offsetY, imgWidth, imgHeight);
};
imgs.or.onload = function() {
    gateCtx.drawImage(imgs.or, distantX * 2 + offsetX, offsetY, imgWidth, imgHeight);
};
imgs.xor.onload = function() {
    gateCtx.drawImage(imgs.xor, offsetX, distantY + offsetY, imgWidth, imgHeight);
};
imgs.nand.onload = function() {
    gateCtx.drawImage(imgs.nand, distantX + offsetX, distantY + offsetY, imgWidth, imgHeight);
};
imgs.nor.onload = function() {
    gateCtx.drawImage(imgs.nor, distantX * 2 + offsetX, distantY + offsetY, imgWidth, imgHeight);
};