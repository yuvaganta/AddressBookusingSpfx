import { IContact } from "../Models/Models";
import { sp } from "@pnp/sp/presets/all";
export class ContactServices {
  addContact = async (contact: IContact) => {
    await sp.web.lists
      .getByTitle("ContactList")
      .items.add({
        name: contact.name,
        mobile: contact.mobile,
        email: contact.email,
        landline: contact.landline,
        address: contact.address,
        website: contact.website,
      })
      .then(() => {
        return true;
      });
  };
  getContactById = async (contactId: string): Promise<IContact> => {
    const contact: any = await sp.web.lists
      .getByTitle("ContactList")
      .items.getById(parseInt(contactId))
      .get();
    return contact;
  };
  deleteContact = async (contactId: string): Promise<boolean> => {
    return await sp.web.lists
      .getByTitle("ContactList")
      .items.getById(parseInt(contactId))
      .delete()
      .then(() => {
        return true;
      });
  };
  updateContact = async (
    contactId: string,
    contact: IContact
  ): Promise<boolean> => {
    return sp.web.lists
      .getByTitle("ContactList")
      .items.getById(parseInt(contactId))
      .update({
        name: contact.name,
        mobile: contact.mobile,
        email: contact.email,
        landline: contact.landline,
        address: contact.address,
        website: contact.website,
      })
      .then(() => {
        return true;
      });
  };
  getAllContacts = async () => {
    console.log(sp.web.lists.getByTitle("ContactList").items.get());
    return await sp.web.lists.getByTitle("ContactList").items.get();
  };
}
