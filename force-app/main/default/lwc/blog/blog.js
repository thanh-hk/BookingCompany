import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';
import style from '@salesforce/resourceUrl/css';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
loadStyle(this, style + '/style.css')

export default class Blog extends LightningElement {
    imageURL1 = IMAGES + '/pic-1.png';
    imageURL2 = IMAGES + '/pic2.png';
    imageURL3 = IMAGES + '/pic3.png';
}