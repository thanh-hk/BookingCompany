import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';
import style from '@salesforce/resourceUrl/css';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

loadStyle(this, style + '/style.css')

export default class Categories extends LightningElement {
    get backgroundImage1() {
        const kidimageURL = IMAGES + '/child-head.svg'
        return `background-image:url(${kidimageURL})`;
    }
    get backgroundImage2() {
        const loveimageURL = IMAGES + '/flower-bouquet.svg'
        return `background-image:url(${loveimageURL})`;
    }
    get backgroundImage3() {
        const artimageURL = IMAGES + '/swatchbook.svg'
        return `background-image:url(${artimageURL})`;
    }
    get backgroundImage4() {
        const historyimageURL = IMAGES + '/file-medical-alt.svg'
        return `background-image:url(${historyimageURL})`;
    }

}