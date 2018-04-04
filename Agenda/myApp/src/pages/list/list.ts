import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ContactosPage} from '../../pages/contactos/contactos';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  contacts: {nombre:string,numero:string} []=[];

  constructor (public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadNewPage() {
    this.navCtrl.push(ContactosPage);
  }
}
