import React, { PureComponent } from "react";

export default class PureDisplay extends PureComponent {
  render() {
    return <p>Pure Component says: {this.props.value}</p>;
  }
}
