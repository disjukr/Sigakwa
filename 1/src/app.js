import soundcloudBadge from 'soundcloud-badge-packed';
import SoundAnalyzer from './sound-analyzer';
import PIXI from 'pixi';
import $ from 'jquery';
import * as stage from './stage';
import { shape, update as updateShape } from './shape';
import { shape as eqShape, update as updateEqShape } from './eq-shape';

const $body = $(document.body);
let audio = new Audio();
let renderer = new PIXI.autoDetectRenderer(stage.width, stage.height); {
    let viewStyle = renderer.view.style;
    viewStyle.display = 'block';
    $(document.body).append(renderer.view);
}
let analyzer = new SoundAnalyzer(audio);
{ // onresize
    function onresize() {
        renderer.resize(stage.width, stage.height);
        { // shape
            shape.x = stage.halfWidth;
            shape.y = stage.halfHeight;
        }
        { // eq shape
            eqShape.y = stage.height;
        }
    }
    onresize();
    $(window).resize(onresize);
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
    { // scene
        stage.container.addChild(shape);
        stage.container.addChild(eqShape);
        window.requestAnimationFrame(frame);
    }
    { // audio
        audio.crossOrigin = 'anonymous';
        audio.src = audioSrc;
        await new Promise(resolve => { audio.addEventListener('canplay', () => resolve()); });
        audio.play();
    }
}

function frame() {
    window.requestAnimationFrame(frame);
    let { fftData, waveData } = analyzer;
    updateShape(analyzer.peak * 100);
    updateEqShape(fftData, waveData);
    renderer.render(stage.container);
}

entry();
