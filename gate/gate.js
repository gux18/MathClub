// 기본 설정
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

// 게이트, 스위치 이미지 그리기
for (const gate in gateImgs) {
  gateImgs[gate].src = `../image/${gate}.png`;

  gateImgs[gate].onload = () => {
    ctxs[gate].drawImage(
      gateImgs[gate],
      imgOffsetX.gate,
      imgOffsetY.gate,
      imgSize.gate,
      imgSize.gate
    );
  };
}

function waitForLoad(img) {
  return new Promise((resolve, reject) => {
    img.addEventListener('load', resolve, { once: true });
    img.addEventListener(
      'error',
      () => reject(new Error('스위치 이미지 로드 실패')),
      { once: true }
    );
  });
}

const offReady = waitForLoad(switchImgs.Off);
const onReady = waitForLoad(switchImgs.On);

// 로드 리스너를 등록한 뒤 src를 설정합니다.
switchImgs.Off.src = '../image/offSwitch.jpg';
switchImgs.On.src = '../image/onSwitch.jpg';

Promise.all([offReady, onReady])
  .then(() => {
    // 기존 Off.onload의 그리기 코드
    for (const gateCtx in ctxs) {
      if (gateCtx == 'not') {
        ctxs[gateCtx].drawImage(
          switchImgs.Off,
          imgOffsetX.switch.input,
          imgOffsetY.switch.mid,
          imgSize.switch.width,
          imgSize.switch.height
        );
        ctxs[gateCtx].drawImage(
          switchImgs.Off,
          imgOffsetX.switch.output,
          imgOffsetY.switch.mid,
          imgSize.switch.width,
          imgSize.switch.height
        );
      } else {
        ctxs[gateCtx].drawImage(
          switchImgs.Off,
          imgOffsetX.switch.input,
          imgOffsetY.switch.top,
          imgSize.switch.width,
          imgSize.switch.height
        );
        ctxs[gateCtx].drawImage(
          switchImgs.Off,
          imgOffsetX.switch.input,
          imgOffsetY.switch.bottom,
          imgSize.switch.width,
          imgSize.switch.height
        );
        ctxs[gateCtx].drawImage(
          switchImgs.Off,
          imgOffsetX.switch.output,
          imgOffsetY.switch.mid,
          imgSize.switch.width,
          imgSize.switch.height
        );
      }
    }

    // 기존 On.onload의 그리기 코드
    ctxs['not'].drawImage(
      switchImgs.On,
      imgOffsetX.switch.output,
      imgOffsetY.switch.mid,
      imgSize.switch.width,
      imgSize.switch.height
    );
    ctxs['nand'].drawImage(
      switchImgs.On,
      imgOffsetX.switch.output,
      imgOffsetY.switch.mid,
      imgSize.switch.width,
      imgSize.switch.height
    );
    ctxs['nor'].drawImage(
      switchImgs.On,
      imgOffsetX.switch.output,
      imgOffsetY.switch.mid,
      imgSize.switch.width,
      imgSize.switch.height
    );
  })
  .catch((error) => console.error(error));

//세부조정
const imgSize = {
  gate: 100,
  switch: {
    width: 80,
    height: 40 // 너비/2, 이미지 바꾸면 조정해야 함.
  }
};

const imgOffsetX = {
  gate: 150, // 캔버스 너비/2 - gate 너비/2
  switch: {
    input: 20,
    output: 300 // 캔버스 너비 - switch 너비 - 20
  }
};

const imgOffsetY = {
  gate: 75,
  switch: {
    mid: 105, // 1입력, 출력 | 캔버스 높이/2 - switch 높이/2
    top: 60, // 2입력 | 캔버스 높이/2 - switch 높이/2 +- 45
    bottom: 150
  }
};

//입력 처리
let switchState = {
  not: {
    input: false,
    output: true
  },
  and: {
    input: { top: false, bottom: false },
    output: false
  },
  or: {
    input: { top: false, bottom: false },
    output: false
  },
  xor: {
    input: { top: false, bottom: false },
    output: false
  },
  nand: {
    input: { top: false, bottom: false },
    output: true
  },
  nor: {
    input: { top: false, bottom: false },
    output: true
  }
};

for (const gateCtx in ctxs) {
  ctxs[gateCtx].canvas.addEventListener('click', (event) => {
    const rect = ctxs[gateCtx].canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const inputClicked = {
      top:
        x >= imgOffsetX.switch.input &&
        x <= imgOffsetX.switch.input + imgSize.switch.width &&
        y >= imgOffsetY.switch.top &&
        y <= imgOffsetY.switch.top + imgSize.switch.height,
      mid:
        x >= imgOffsetX.switch.input &&
        x <= imgOffsetX.switch.input + imgSize.switch.width &&
        y >= imgOffsetY.switch.mid &&
        y <= imgOffsetY.switch.mid + imgSize.switch.height,
      bottom:
        x >= imgOffsetX.switch.input &&
        x <= imgOffsetX.switch.input + imgSize.switch.width &&
        y >= imgOffsetY.switch.bottom &&
        y <= imgOffsetY.switch.bottom + imgSize.switch.height
    };

    if (gateCtx === 'not' && inputClicked.mid) {
      switchState.not.input = !switchState.not.input;
      let switchKind = switchState.not.input ? 'On' : 'Off';
      ctxs.not.drawImage(
        switchImgs[switchKind],
        imgOffsetX.switch.input,
        imgOffsetY.switch.mid,
        imgSize.switch.width,
        imgSize.switch.height
      );

      switchState.not.output = calculate('not', switchState.not.input);
      switchKind = switchState.not.output ? 'On' : 'Off';
      ctxs.not.drawImage(
        switchImgs[switchKind],
        imgOffsetX.switch.output,
        imgOffsetY.switch.mid,
        imgSize.switch.width,
        imgSize.switch.height
      );

      console.log(
        `게이트 : ${gateCtx} , 입력 : ${switchState.not.input} , 출력 : ${switchState.not.output}`
      );
    } else if (gateCtx !== 'not' && (inputClicked.top || inputClicked.bottom)) {
      const inputLocate = inputClicked.top ? 'top' : 'bottom';
      switchState[gateCtx].input[inputLocate] =
        !switchState[gateCtx].input[inputLocate];
      let switchKind =
        switchState[gateCtx].input[inputLocate] ? 'On' : 'Off';
      ctxs[gateCtx].drawImage(
        switchImgs[switchKind],
        imgOffsetX.switch.input,
        imgOffsetY.switch[inputLocate],
        imgSize.switch.width,
        imgSize.switch.height
      );

      const outputState = calculate(
        gateCtx,
        switchState[gateCtx].input.top,
        switchState[gateCtx].input.bottom
      );
      switchKind = outputState ? 'On' : 'Off';
      if (switchState[gateCtx].output != outputState) {
        switchState[gateCtx].output = outputState;
        ctxs[gateCtx].drawImage(
          switchImgs[switchKind],
          imgOffsetX.switch.output,
          imgOffsetY.switch.mid,
          imgSize.switch.width,
          imgSize.switch.height
        );
      }
      console.log(
        `게이트 : ${gateCtx} , 입력 : ${switchState[gateCtx].input.top}, ${switchState[gateCtx].input.bottom} , 출력 : ${switchState[gateCtx].output}`
      );
    }
  });
}

function calculate(gateType, input1, input2) {
  // input은 불리언 | not의 경우 input2 처리하지 않음
  switch (gateType) {
    case 'not':
      return !input1;
    case 'and':
      return input1 && input2;
    case 'or':
      return input1 || input2;
    case 'xor':
      return input1 !== input2;
    case 'nand':
      return !(input1 && input2);
    case 'nor':
      return !(input1 || input2);
    default:
      throw new Error(`Unknown gate type: ${gateType}`);
  }
}
// 추가로 할 것 : 전선 기능