const canvases = {
    not: document.getElementById('notGateCanvas'),
    and: document.getElementById('andGateCanvas'),
    or: document.getElementById('orGateCanvas'),
    xor: document.getElementById('xorGateCanvas'),
    nand: document.getElementById('nandGateCanvas'),
    nor: document.getElementById('norGateCanvas')
};
const ctxs = {
    not: canvases.not.getContext('2d'),
    and: canvases.and.getContext('2d'),
    or: canvases.or.getContext('2d'),
    xor: canvases.xor.getContext('2d'),
    nand: canvases.nand.getContext('2d'),
    nor: canvases.nor.getContext('2d')
};

const gateImgs = {
    not: new Image(),
    and: new Image(),
    or: new Image(),
    xor: new Image(),
    nand: new Image(),
    nor: new Image()
};

const switchImgs = {
    On: new Image(),
    Off: new Image()
};
switchImgs.On.src = '../image/onSwitch.jpg';
switchImgs.Off.src = '../image/offSwitch.jpg';

for (const gate in gateImgs) {
    gateImgs[gate].src = `../image/${gate}.png`;

    gateImgs[gate].onload = () => {
        ctxs[gate].drawImage(gateImgs[gate], imgOffsetX.gate, imgOffsetY.gate, imgSize.gate, imgSize.gate);
    }
}

switchImgs.Off.onload = () => {
    for (const ctx in ctxs) {
        if (ctx == 'not') {
            ctxs[ctx].drawImage(switchImgs.Off, imgOffsetX.switch.input, imgOffsetY.switch.mid, imgSize.switch.width, imgSize.switch.height);
            ctxs[ctx].drawImage(switchImgs.Off, imgOffsetX.switch.output, imgOffsetY.switch.mid, imgSize.switch.width, imgSize.switch.height);
        }
        else {
            ctxs[ctx].drawImage(switchImgs.Off, imgOffsetX.switch.input, imgOffsetY.switch.top, imgSize.switch.width, imgSize.switch.height);
            ctxs[ctx].drawImage(switchImgs.Off, imgOffsetX.switch.input, imgOffsetY.switch.bottom, imgSize.switch.width, imgSize.switch.height);
            ctxs[ctx].drawImage(switchImgs.Off, imgOffsetX.switch.output, imgOffsetY.switch.mid, imgSize.switch.width, imgSize.switch.height);
        }
    }
};

//계수조정
const imgSize = {
    gate : 100,
    switch : {
        width : 80,
        height : 40 // 너비/2, 이미지 바꾸면 조정해야 함.
    }
};
const imgOffsetX = {
    gate : 150, // 캔버스 너비/2 - gate 너비/2
    switch : {
        input : 20,
        output : 300 // 캔버스 너비 - switch 너비 - 20
    }
};
const imgOffsetY = {
    gate : 75,
    switch : {
        mid : 105, //1입력, 출력 | 캔버스 높이/2 - switch 높이/2
        top : 60,  //2입력 | 캔버스 높이/2 - switch 높이/2 +- 45
        bottom : 150 
    }
};