import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactosPage} from '../../pages/contactos/contactos';
import {ContactService} from '../../services/contacts.service';
import {Contact} from '../../models/contact.model';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  contacts: Contact[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  ionViewWillEnter(){
    this.contacts=this.ContactService.getContacts(); //definir los servicios tambien en app.module.ts en providers
  }

  onLoadNewPage() {
    this.navCtrl.push(ContactosPage);
  }

  onItemTapped($event, contact){

  }


}
