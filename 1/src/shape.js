import PIXI from 'pixi';

let s = new PIXI.Graphics();
export var shape = s;

export function update(size) {
    s.clear();
    if (size <= 0) return;
    s.beginFill(0xffffff);
    s.drawCircle(0, 0, size);
    s.endFill();
};
