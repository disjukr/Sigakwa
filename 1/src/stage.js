import PIXI from 'pixi';
import $ from 'jquery';

export var container = new PIXI.Container();

export var width;
export var height;
export var halfWidth;
export var halfHeight;

const $body = $(document.body);

function onresize() {
    [width, height] = [$body.width(), $body.height()];
    [halfWidth, halfHeight] = [width / 2, height / 2];
}
onresize();
$(window).resize(onresize);
