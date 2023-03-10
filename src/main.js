import anime from 'animejs';
import { text } from './modules/module';

console.log(text)

anime({
    targets: 'h1',
    rotate: 360,
    duration: 1000,
})



const moduleURL = import.meta.url;
const relativeURL = "https://parceljs.org/logo.49e8bbc1.svg";

console.log(import.meta);

const img = document.createElement('img');
document.body.append(img);

const imgUrl = new URL(relativeURL, moduleURL);
img.src = imgUrl.href



