import { LightningElement } from 'lwc';
import style from '@salesforce/resourceUrl/css';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
loadStyle(this, style + '/style.css')

export default class Navbar extends LightningElement {
    handleHamburgerClicked() {   
        const navMenu = this.template.querySelector('.mobile-menu');       
        navMenu.classList.toggle('responsive');
    }
  
   
}