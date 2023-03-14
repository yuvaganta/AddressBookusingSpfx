import * as React from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router";
import { IContact, IStatesObj } from "../../../../Models/Models";

export function DisplayMiniDetails({
  contact,
  setStatesObj,
  statesObj,
}: {
  contact: IContact;
  setStatesObj: Function;
  statesObj: IStatesObj;
}) {
  const navigate = useNavigate();
  function handleClick(id: string) {
    console.log(id);
    setStatesObj({
      ...statesObj,
      selectedContactId: id,
      showForm: false,
      showDisplayDetails: true,
    });
    console.log(statesObj.selectedContactId);
    navigate("/details/" + contact.Id);
  }
  return (
    <div id={contact.Id} onClick={(e) => handleClick(e.currentTarget.id)}>
      <div
        className={`eachContact ${
          statesObj.selectedContactId == contact.Id ? "activeContact" : ""
        }`}
      >
        <h1 className="Name">{contact.name}</h1>
        <p className="email">{contact.email}</p>
        <p className="mobile">{contact.mobile}</p>
      </div>
    </div>
  );
}
