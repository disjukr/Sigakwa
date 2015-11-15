import soundcloudBadge from 'soundcloud-badge-packed';
import SoundAnalyzer from './sound-analyzer';
import PIXI from 'pixi';
import $ from 'jquery';
import { shape, update as updateShape } from './shape';
import { shape as eqShape, update as updateEqShape } from './eq-shape';

let audio = new Audio();
let stage = new PIXI.Container();
let stageWidth, stageHeight, halfStageWidth, halfStageHeight;
let renderer = new PIXI.autoDetectRenderer(stageWidth, stageHeight); {
    let viewStyle = renderer.view.style;
    viewStyle.display = 'block';
    $(document.body).append(renderer.view);
}
let analyzer = new SoundAnalyzer(audio);
{ // layout
    function layout() {
        { // stage
            [stageWidth, stageHeight] = [window.innerWidth, window.innerHeight];
            [halfStageWidth, halfStageHeight] = [stageWidth / 2, stageHeight / 2];
            renderer.resize(stageWidth, stageHeight);
        }
        { // shape
            shape.x = halfStageWidth;
            shape.y = halfStageHeight;
        }
        { // eq shape
            eqShape.y = stageHeight;
        }
    }
    layout();
    $(window).resize(layout);
}

async function entry() {
    const audioSrc = await new Promise((resolve, reject) => {
        soundcloudBadge({
            client_id: '728e63edbf69f6c2bbb7eddb3d41849f',
            song: 'https://soundcloud.com/frz9999/right-light-rise-freezer-bootleg-mix',
            dark: false,
            getFonts: true
        }, (err, src) => {
            if (err) reject(err);
            else resolve(src);
        });
    });
    audio.crossOrigin = 'anonymous';
    audio.src = audioSrc;
    await new Promise(resolve => { audio.addEventListener('canplay', () => resolve()); });
    window.aaa = audio;
    audio.play();
    stage.addChild(shape);
    stage.addChild(eqShape);
    window.requestAnimationFrame(frame);
}

function frame() {
    window.requestAnimationFrame(frame);
    let { fftData, waveData } = analyzer;
    updateShape(analyzer.peak * 100);
    updateEqShape(fftData, waveData);
    renderer.render(stage);
}

entry();
