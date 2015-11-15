export default class SoundAnalyzer {
    constructor(audio) {
        this.audio = audio;
        this.context = new AudioContext();
        this.source = this.context.createMediaElementSource(audio);
        this.analyzer = this.context.createAnalyser();
        this.analyzer.fftSize = 256;
        { // connect
            this.source.connect(this.analyzer);
            this.analyzer.connect(this.context.destination);
        }
    }
    get waveData() {
        let frequencyData = new Uint8Array(this.analyzer.frequencyBinCount);
        this.analyzer.getByteTimeDomainData(frequencyData);
        return frequencyData;
    }
    get fftData() {
        let frequencyData = new Uint8Array(this.analyzer.frequencyBinCount);
        this.analyzer.getByteFrequencyData(frequencyData);
        return frequencyData;
    }
    get peak() {
        return SoundAnalyzer.peak(this.waveData);
    }
    static peak(waveData) {
        let peak = -Infinity;
        for (let v of waveData) {
            v = Math.abs((v - 0x80) / 0x7f);
            if (v > peak) peak = v;
        }
        return peak;
    }
};
