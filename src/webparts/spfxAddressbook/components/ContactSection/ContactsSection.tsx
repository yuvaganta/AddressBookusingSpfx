import * as React from "react";

import { IStatesObj, IContact } from "../../../../Models/Models";
import { ContactServices } from "../../../../Services/ContactServices";
import { DisplayMiniDetails } from "../DisplayDetailsCards/DisplayMiniDetails";
let contactServices: ContactServices = new ContactServices();
export function ContactsSection({
  statesObj,
  setStatesObj,
}: {
  statesObj: IStatesObj;
  setStatesObj: Function;
}) {
  // let contacts: IContact[];
  // contactServices.getAllContacts().then((items) => {
  //   contacts = items as IContact[];
  //   console.log(contacts);
  // });
  return (
    <div>
      <h3>CONTACTS</h3>
      <div className="contactul">
        <ul className="contact" id="contactBook">
          {contactServices.getAllContacts().then((items) => {
            items.map((contact: IContact) => (
              <li>
                <DisplayMiniDetails
                  key={contact.Id}
                  contact={contact}
                  statesObj={statesObj}
                  setStatesObj={setStatesObj}
                ></DisplayMiniDetails>
              </li>
            ));
          })}
          ;
        </ul>
      </div>
    </div>
  );
}
