import * as React from "react";
import { contactList } from "../../../../Models/Data";
import { IStatesObj, IContact } from "../../../../Models/Models";
import { DisplayMiniDetails } from "../DisplayDetailsCards/DisplayMiniDetails";
export function ContactsSection({
  statesObj,
  setStatesObj,
}: {
  statesObj: IStatesObj;
  setStatesObj: Function;
}) {
  return (
    <div>
      <h3>CONTACTS</h3>
      <div className="contactul">
        <ul className="contact" id="contactBook">
          {contactList.map((contact: IContact) => (
            <DisplayMiniDetails
              key={contact.id}
              contact={contact}
              statesObj={statesObj}
              setStatesObj={setStatesObj}
            ></DisplayMiniDetails>
          ))}
        </ul>
      </div>
    </div>
  );
}
