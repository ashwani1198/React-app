import UserClass from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          ABOUT
        </h1>
        <UserClass name="Ashwani Singh" location="jaunpur" />
      </div>
    );
  }
}

export default About;
