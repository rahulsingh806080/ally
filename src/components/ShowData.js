import React, { Component } from "react";
// import childData from "../utilityservices";
import ChildData from "./ChildData";
class ShowData extends Component {
  constructor() {
    super();
    this.state = {
      baseData: [],
      wholeData: [],
      showDiv: true
    };
  }

  show = () => {
    this.setState(prevState => ({
      showDiv: !prevState.showDiv
    }));
  };
  componentDidMount() {
    let objectives = [];
    fetch("https://okrcentral.github.io/sample-okrs/db.json")
      .then(response => {
        return response.json();
      })
      .then(results => {
        objectives = results.data.filter(planet => {
          return planet.parent_objective_id === "";
        });
        console.log(objectives);

        this.setState({
          baseData: objectives,
          wholeData: results.data
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.baseData.map(item => (
          <div>
            <div onClick={this.show}>Show </div>
            <div>{item.title}</div>
            {this.state.showDiv && (
              <ChildData baseitem={item} childitem={this.state.wholeData} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ShowData;
