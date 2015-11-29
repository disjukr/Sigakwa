import PIXI from 'pixi';
import * as stage from './stage';

import ColorTransformFilter from './ColorTransformFilter';

let container = new PIXI.Container();
let circles = new PIXI.Container();
let rt1 = new PIXI.RenderTexture(stage.renderer, stage.width, stage.height);
let rt2 = new PIXI.RenderTexture(stage.renderer, stage.width, stage.height);
let rts1 = new PIXI.Sprite(rt1);
let rts2 = new PIXI.Sprite(rt2);
let df = new PIXI.filters.DisplacementFilter(rts2);
let cf = new ColorTransformFilter(0.95, 0.95, 0.95);
let a = 0;

rts1.filters = [df, cf];
container.addChild(circles);
container.addChild(rts1);
container.addChild(rts2);

{ // onresize
    function onresize() {
        rt1.resize(stage.width, stage.height);
        rt2.resize(stage.width, stage.height);
    }
    onresize();
    stage.e.on('resize', onresize);
}

export var shape = container;

class Circle extends PIXI.Graphics {
    constructor(x, y, dx, dy, size, color) {
        super();
        [this.x, this.y] = [x, y];
        [this.dx, this.dy] = [dx, dy];
        this.size = size;
        this.blendMode = PIXI.BLEND_MODES.ADD;
        if (size > 0) {
            this.beginFill(color);
            this.drawCircle(0, 0, size);
            this.endFill();
        }
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < -this.size) this.remove();
        if (this.x > stage.width + this.size) this.remove();
        if (this.y < -this.size) this.remove();
        if (this.y > stage.height + this.size) this.remove();
    }
    remove() {
        circles.removeChild(this);
    }
    static gen(pow) {
        let size = pow * (stage.innerSquareSize / 5);
        let spd = (size * 0.3) + 10;
        let angle = Math.random() * Math.PI * 2;
        let c = new Circle(
            stage.halfWidth,
            stage.halfHeight,
            Math.cos(angle) * spd,
            Math.sin(angle) * spd,
            size,
            (Math.random() * 0xFFFFFF) & 0x333333
        );
        return c;
    }
}

export function update(pow) {
    circles.addChild(Circle.gen(pow));
    circles.addChild(Circle.gen(pow));
    for (let circle of circles.children) circle.move();
    a += (Math.random() * 8 - 4) * pow;
    let s = (stage.innerSquareSize / 4);
    df.scale.x = Math.cos(a) * pow * s;
    df.scale.y = Math.sin(a) * pow * s;
    rt1.render(rts1);
    rt1.render(circles);
    rt2.render(container);
};
