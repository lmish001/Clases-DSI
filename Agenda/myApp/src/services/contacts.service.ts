import {Contact} from "../models/contact.model";

export class ContactService{
    private contacts: Contact [] =
    [{"nombre":"Andres", "organizacion":"UC3M","movil":"677548523","correo":"andres@gmail.com"}];

    constructor(){

    }
    addContact(value: Contact) {
        this.contacts.push(value);
    }
    getContacts(){
        return this.contacts;
    }
}