
import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';
import style from '@salesforce/resourceUrl/css';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

loadStyle(this, style + '/style.css')

export default class Header extends LightningElement {
    get backgroundImage1() {
        const imageURL1 = IMAGES + '/tiktok.svg'
        return `background-image:url(${imageURL1})`;
    }
    get backgroundImage2() {
        const imageURL2 = IMAGES + '/facebook.svg'
        return `background-image:url(${imageURL2})`;
    }
    get backgroundImage3() {
        const imageURL3 = IMAGES + '/linkedin.svg'
        return `background-image:url(${imageURL3})`;
    }
    get backgroundImage4() {
        const imageURL4 = IMAGES + '/search.svg'
        return `background-image:url(${imageURL4})`;
    }

}