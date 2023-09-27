import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        url: "dummy user",
        login: "dummy login",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ashwani1198");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { login, url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {url}</h2>
        <h3>userId : {login}</h3>
        <h4>Contact : ashvins639@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
