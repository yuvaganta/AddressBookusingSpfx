// import React from "react";
export interface IContact {
    name:string;
    Id:string;
    email:string;
    mobile:string;
    website:string;
    landline:string;
    address:string;
}
export interface IFormData{
    action:string;
    Id:string;
    name:string;
    email:string;
    mobile:string;
    address:string;
    website:string;
    landline:string;
}
export interface IValidates{
    isNameValidate:boolean;
    isEmailValidate:boolean;
    isMobileValidate:boolean;
}
export interface IStatesObj{
   
    showForm:boolean;
    showDisplayDetails:boolean;
      selectedContactId:string;
      formAction:string
}