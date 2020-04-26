import React, { Component } from "react";
// import childData from "../utilityservices";

class ChildData extends Component {
  constructor() {
    super();
    this.state = {
      baseData: [],
      wholeData: []
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.childitem
          .filter(item => item.parent_objective_id === this.props.baseitem.id)
          .map(item => (
            <div>{item.title}</div>
          ))}
      </div>
    );
  }
}

export default ChildData;
