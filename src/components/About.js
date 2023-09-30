import UserClass from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1
          className="text-2xl font-extrabold"
          style={{
            textAlign: "center",
          }}
        >
          ABOUT
        </h1>
        <UserContext.Consumer>
          {(data) => (
            <h1 className="text-center text-xl font-semibold">{data.loggedInUser}</h1>
          )}
        </UserContext.Consumer>

        <UserClass name="Ashwani Singh" location="jaunpur" />
      </div>
    );
  }
}

export default About;
