import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';
import style from '@salesforce/resourceUrl/css';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

loadStyle(this, style + '/style.css')
export default class Hero extends LightningElement {
  
    get backgroundImage() {
        const backgroundUrl = IMAGES + '/bg_1.png'
        return `background-image:url(${backgroundUrl})`;
    }
}