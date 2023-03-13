import * as React from "react";
import { ISpfxAddressbookProps } from "./ISpfxAddressbookProps";
import App from "./App";

export default class SpfxAddressbook extends React.Component<
  ISpfxAddressbookProps,
  {}
> {
  public render(): React.ReactElement<ISpfxAddressbookProps> {
    return <App></App>;
  }
}
