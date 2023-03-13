import "./MainSection.css";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";
import { ContactsSection } from "../ContactSection/ContactsSection";
import { FormSection } from "../FormSection/FormSection";
import { Route, Routes } from "react-router-dom";
import * as React from "react";
import { IStatesObj } from "../../../../Models/Models";
// import {styles } from "MainSection.module.css";
export function MainSection({
  statesObj,
  setStatesObj,
}: {
  statesObj: IStatesObj;
  setStatesObj: Function;
}) {
  return (
    <div className="MainSection">
      <ContactsSection
        statesObj={statesObj}
        setStatesObj={setStatesObj}
      ></ContactsSection>
      <Routes>
        <Route
          path={"/details/:id"}
          element={
            <DisplayDetails statesObj={statesObj} setStatesObj={setStatesObj} />
          }
        ></Route>
        <Route
          path={"/form/:id"}
          element={
            <FormSection statesObj={statesObj} setStatesObj={setStatesObj} />
          }
        ></Route>
      </Routes>
    </div>
  );
}
