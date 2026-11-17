const notCanvas = document.getElementById('notGateCanvas');
const notCtx = notCanvas.getContext('2d');
const andCanvas = document.getElementById('andGateCanvas');
const andCtx = andCanvas.getContext('2d');
const orCanvas = document.getElementById('orGateCanvas');
const orCtx = orCanvas.getContext('2d');
const xorCanvas = document.getElementById('xorGateCanvas');
const xorCtx = xorCanvas.getContext('2d');
const nandCanvas = document.getElementById('nandGateCanvas');
const nandCtx = nandCanvas.getContext('2d');
const norCanvas = document.getElementById('norGateCanvas');
const norCtx = norCanvas.getContext('2d');

const gateImgs = {
    not: new Image(),
    and: new Image(),
    or: new Image(),
    xor: new Image(),
    nand: new Image(),
    nor: new Image()
};

for (const gate in gateImgs) {
    gateImgs[gate].src = `../image/${gate}.png`;

    gateImgs[gate].onload = () => {
        switch (gate) {
            case 'not':
                notCtx.drawImage(gateImgs.not, imgOffsetX, imgOffsetY, imgSize, imgSize);
                break;
            case 'and':
                andCtx.drawImage(gateImgs.and, imgOffsetX, imgOffsetY, imgSize, imgSize);
                break;
            case 'or':
                orCtx.drawImage(gateImgs.or, imgOffsetX, imgOffsetY, imgSize, imgSize);
                break;
            case 'xor':
                xorCtx.drawImage(gateImgs.xor, imgOffsetX, imgOffsetY, imgSize, imgSize);
                break;
            case 'nand':
                nandCtx.drawImage(gateImgs.nand, imgOffsetX, imgOffsetY, imgSize, imgSize);
                break;
            case 'nor':
                norCtx.drawImage(gateImgs.nor, imgOffsetX, imgOffsetY, imgSize, imgSize);
                break;
        }
    }
}


const imgSize = 100;
const imgOffsetX = 150;
const imgOffsetY = 75;