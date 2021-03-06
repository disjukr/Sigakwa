import PIXI from 'pixi';

let s = new PIXI.Graphics();
s.scale.y = -1;
export var shape = s;

export function update(fftData, waveData) {
    s.clear();
    s.lineStyle(1, 0xffffff);
    let x = 0;
    for (let d of fftData) {
        let _x = x += 3;
        s.moveTo(_x, 0);
        s.lineTo(_x, d * 0.5);
    }
    for (let d of waveData) {
        let _x = x += 3;
        s.moveTo(_x, 0x80 * 0.5);
        s.lineTo(_x, d * 0.5);
    }
};
