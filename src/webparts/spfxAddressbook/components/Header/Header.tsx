import * as React from "react";
import { Link } from "react-router-dom";
import { IStatesObj } from "../../../../Models/Models";
import "./Header.css";

export function HeaderComponent({
  statesObj,
  setStatesObj,
}: {
  statesObj: IStatesObj;
  setStatesObj: Function;
}) {
  function setShowForm() {
    setStatesObj({
      showForm: true,
      showDisplayDetails: false,
      selectedContactId: "",
      formAction: "add",
    });
  }
  function clickHandler(): void {
    setStatesObj({ ...statesObj, selectedContactId: "" });
  }

  return (
    <div>
      <h1 className="heading">Address Book</h1>
      <nav>
        <div className="navigation">
          <div className="navlinks">
            <div className="navigationitem">
              <Link
                className="navLinkItems"
                id="HOMElink"
                to="/"
                onClick={clickHandler}
              >
                HOME
              </Link>
            </div>
            <div className="navigationitem">
              <Link
                className="navLinkItems"
                id="addlink"
                to="/form/add"
                onClick={() => setShowForm()}
              >
                +ADD
              </Link>
            </div>
          </div>
          <div className="blogimage">
            <img src={require("../../assets/ImagesFolder/blog-icon.png")} />
          </div>
        </div>
      </nav>
    </div>
  );
}
