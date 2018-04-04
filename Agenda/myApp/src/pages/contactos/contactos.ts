import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactService} from '../../services/contacts.service';
import {Contact} from '../../models/contact.model';
/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  constructor(public navCtrl: NavController, private contactService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  onAddContact(value:Contact) {
    this.contactService.addContact(value);
    this.navCtrl.pop();
  }

}
