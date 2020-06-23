import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

if (process.client) {
    gsap.registerPlugin(SplitText);
}

export const lineSplit = lines => {
    let line = new SplitText(lines, {
        type: 'lines, words, chars',
        linesClass: 'split-line',
    });

    return line;
};
