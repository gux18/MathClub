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
let offsetX = 150;
let offsetY = 75;

const gateSelect = document.getElementById('gateSelect');

function drawSelectedGate() {
    const loadingImage = imgs[gateSelect.value];
    gateCtx.clearRect(30, offsetY, imgWidth, imgHeight);
    if (loadingImage.complete && loadingImage.naturalWidth > 0) {
        gateCtx.drawImage(loadingImage, offsetX, offsetY, imgWidth, imgHeight);
    }

    drawWire();
}

Object.values(imgs).forEach(image => {
    image.addEventListener('load', () => {
        if (imgs[gateSelect.value] === image) {
            drawSelectedGate();
        }
    });
});

gateSelect.addEventListener('change', drawSelectedGate);
drawSelectedGate();

function drawWire() {
    //입력 부분
    if (gateSelect.value === 'not') {
        //1개
        gateCtx.beginPath();
        gateCtx.moveTo(30, 125);
        gateCtx.lineTo(150, 125);
        gateCtx.stroke();
    }
    else {
        //2개
    }

    //출력 부분
}