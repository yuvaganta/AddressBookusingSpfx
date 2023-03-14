import { Guid } from "guid-typescript";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {
  IStatesObj,
  IContact,
  IValidates,
  IFormData,
} from "../../../../Models/Models";
import { ContactServices } from "../../../../Services/ContactServices";
import { ValidateForm } from "../../../../Services/Validations";

import "./FormSection.css";
let validateForm: ValidateForm = new ValidateForm();
let contactServices: ContactServices = new ContactServices();
export function FormSection({
  setStatesObj,
  statesObj,
}: {
  setStatesObj: Function;
  statesObj: IStatesObj;
}) {
  const navigate = useNavigate();
  let contactUsed: any;
  contactUsed = contactServices.getContactById(statesObj.selectedContactId);
  const [formFields, setFormFields] = useState<IContact>({ ...contactUsed });
  useEffect(() => {
    setFormFields({ ...contactUsed });
    setValidates({
      isNameValidate: false,
      isEmailValidate: false,
      isMobileValidate: false,
    });
  }, [statesObj]);
  const [validates, setValidates] = useState<IValidates>({
    isNameValidate: false,
    isEmailValidate: false,
    isMobileValidate: false,
  });
  function handleChange(e: any) {
    let lableName = e.target.name;
    setFormFields({ ...formFields, [lableName]: e.target.value });
  }
  function cancelHandler() {
    if (statesObj.formAction == "add") {
      setStatesObj({
        showForm: false,
        showDisplayDetails: false,
        selectedContactId: "",
      });
      navigate("/");
    } else {
      setStatesObj({
        showForm: false,
        showDisplayDetails: true,
        selectedContactId: contactUsed.id,
      });
      navigate("/details/" + statesObj.selectedContactId);
    }
    setValidates({
      isNameValidate: false,
      isEmailValidate: false,
      isMobileValidate: false,
    });
  }

  function submitHandler(e: any) {
    e.preventDefault();
    let isName: boolean, isEmail: boolean, isMobile: boolean;
    isName = validateForm.ValidateName(formFields.name);
    isEmail = validateForm.ValidateEmail(formFields.email);
    isMobile = validateForm.ValidateMobile(formFields.mobile);
    if (!isEmail && !isMobile && !isName) {
      if (statesObj.formAction == "add") {
        let newContact: IContact;
        newContact = {
          Id: Guid.create().toString(),
          name: formFields.name,
          email: formFields.email,
          mobile: formFields.mobile,
          address: formFields.address,
          website: formFields.website,
          landline: formFields.landline,
        };
        contactServices.addContact(newContact);
        setStatesObj({
          ...statesObj,
          showForm: false,
          showDisplayDetails: true,
          selectedContactId: newContact.Id,
        });
        navigate("/details/" + newContact.Id);
      } else {
        if (
          window.confirm(
            "Are you sure you want to edit " + contactUsed.name + "'s details"
          )
        ) {
          let newContact: IContact;
          newContact = {
            Id: statesObj.selectedContactId,
            name: formFields.name,
            email: formFields.email,
            mobile: formFields.mobile,
            address: formFields.address,
            website: formFields.website,
            landline: formFields.landline,
          };
          contactServices.updateContact(newContact.Id, newContact);
          let varForm: IFormData = {
            action: "",
            name: "",
            Id: "",
            mobile: "",
            address: "",
            email: "",
            website: "",
            landline: "",
          };
          setFormFields(varForm);
          setStatesObj({
            ...statesObj,
            showForm: false,
            showDisplayDetails: true,
            selectedContactId: newContact.Id,
          });
          navigate("/details/" + statesObj.selectedContactId);
        } else {
          setStatesObj({
            ...statesObj,
            showForm: false,
            showDisplayDetails: true,
          });
          navigate("/details/" + statesObj.selectedContactId);
        }
      }
    } else {
      setValidates({
        isNameValidate: isName,
        isEmailValidate: isEmail,
        isMobileValidate: isMobile,
      });
    }
  }
  const { id } = useParams();
  useEffect(() => {
    setStatesObj({ ...statesObj, selectedContactId: id });
    if (id != "add") {
      setStatesObj({ ...statesObj, formAction: "edit" });
    }
  }, [id]);

  return (
    <div className="addingDetails">
      <form id="addingDetailsForm" onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <span className="star">*</span>
        </div>
        <div>
          <input
            type="text"
            id="addName"
            className="inbox"
            name="name"
            value={formFields.name}
            onChange={handleChange}
          />
        </div>
        {validates.isNameValidate && (
          <div className="warnings" id="nameWarning">
            Enter your name
          </div>
        )}
        <div>
          <label>Email</label>
          <span className="star">*</span>
        </div>
        <div>
          <input
            type="text"
            id="addEmail"
            className="inbox"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        {validates.isEmailValidate && (
          <div className="warnings" id="emailWarning">
            {" "}
            Enter Valid Email Id
          </div>
        )}
        <div>
          <label id="mobilelabel">
            Mobile<span className="star">*</span>
          </label>
          <label>LandLine</label>
        </div>
        <div>
          <input
            type="text"
            id="addMobile"
            name="mobile"
            value={formFields.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            id="addLandline"
            name="landline"
            value={formFields.landline}
            onChange={handleChange}
          />
        </div>
        {validates.isMobileValidate && (
          <div className="warnings" id="mobileWarning">
            Enter Mobile Number
          </div>
        )}
        <div>
          <label>Website</label>
        </div>
        <div>
          <input
            type="text"
            className="inbox"
            name="website"
            id="addWebsite"
            value={formFields.website}
            onChange={handleChange}
          />
        </div>
        <div className="warnings" id="websiteWarning"></div>
        <div>
          <label>Address</label>
        </div>
        <div>
          <textarea
            id="addAddress"
            name="address"
            value={formFields.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="buttondiv">
          {statesObj.formAction == "add" && (
            <button className="formbutton" id="addButton" type="submit">
              Add
            </button>
          )}
          {statesObj.formAction == "edit" && (
            <button className="formbutton" id="editButton" type="submit">
              Edit
            </button>
          )}
          <button id="cancelButton" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
