// import React from "react";
// import { IFormData } from "../Models/Models";
export class ValidateForm {
  ValidateName(tempName: string) {
    if (tempName == "") {
      return true;
    } else {
      return false;
    }
  }
  ValidateEmail(tempEmail: string) {
    if (tempEmail == "") {
      return true;
    } else {
      var emalRef = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;
      if (emalRef.test(tempEmail)) {
        return false;
      } else {
        return true;
      }
    }
  }
  ValidateMobile(tempMobile: string) {
    if (tempMobile == "" || tempMobile.length != 14) {
      return true;
    } else {
      return false;
    }
  }
}
