import PIXI from 'pixi';

export default class ColorTransformFilter extends PIXI.filters.ColorMatrixFilter {
    constructor(redMultiplier=1, greenMultiplier=1, blueMultiplier=1, alphaMultiplier=1,
                redOffset=0, greenOffset=0, blueOffset=0, alphaOffset=0) {
        super();
        this.matrix = [
            redMultiplier, 0, 0, 0, redOffset / 255,
            0, greenMultiplier, 0, 0, greenOffset / 255,
            0, 0, blueMultiplier, 0, blueOffset / 255,
            0, 0, 0, alphaMultiplier, alphaOffset / 255
        ];
    }
};
