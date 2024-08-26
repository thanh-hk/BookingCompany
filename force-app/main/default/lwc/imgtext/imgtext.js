import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';
import style from '@salesforce/resourceUrl/css';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
loadStyle(this, style + '/style.css')
export default class Imgtext extends LightningElement {
    imageURL = IMAGES + '/about-1.png'
}