import EventEmitter from 'events';
import PIXI from 'pixi';
import $ from 'jquery';

const $body = $(document.body);

function w() { return $body.width(); }
function h() { return $body.height(); }

export var container = new PIXI.Container();
export var renderer = new PIXI.autoDetectRenderer(w(), h());

export var width;
export var height;
export var halfWidth;
export var halfHeight;
export var innerSquareSize;
export var outerSquareSize;

export var e = new EventEmitter();

function onresize() {
    [width, height] = [w(), h()];
    [halfWidth, halfHeight] = [width / 2, height / 2];
    [innerSquareSize, outerSquareSize] = [Math.min(width, height), Math.max(width, height)];
    renderer.resize(width, height);
    e.emit('resize');
}
onresize();
$(window).resize(onresize);
