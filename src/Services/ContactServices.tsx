// import React from "react";
import { contactList } from "../Models/Data";
import { IContact } from "../Models/Models";
export class ContactServices {
  static getContactById: any;
  AddContact(contact: IContact) {
    contactList.push(contact);
  }
  getContactById(contactId: string): IContact {
    var contact: IContact;
    contact = contactList.find((x: { id: string; }) => x.id === contactId) as IContact;
    if (contact == undefined) {
      contact = {
        id: "",
        name: "",
        email: "",
        mobile: "",
        landline: "",
        website: "",
        address: "",
      };
    }
    return contact;
  }
  UpdateContact(contactId: string, newContact: IContact) {
    let contact: IContact;
    contact = this.getContactById(contactId);
    contactList[contactList.indexOf(contact)] = newContact;
  }
  DeleteContact(contactId: string) {
    contactList.splice(contactList.indexOf(this.getContactById(contactId)), 1);
  }
}
