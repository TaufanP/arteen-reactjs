import React, { Component } from "react";
import "../assets/css/login.css";
import axios from "axios";
class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      loading: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async event => {
    const { name, username, password } = this.state;
    event.preventDefault();
    const data = {
      name,
      username,
      password
    };
    this.setState({ loading: true });
    await axios
      .post("http://54.159.200.168:8081/api/v1/users/", data)
      .then(res => {
        this.props.history.push("/")
        this.setState({ loading: false });
      })
      .catch(err => {
        alert("Registration failed! Please try again!")
        this.setState({ loading: false });
      });
  };

  render() {
    if (localStorage.getItem("token") !== null) {
      this.props.history.push("/product");
    }
    const { loading } = this.state;
    return (
      <div>
        <div className="login-container">
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <input
                      placeholder="Complete Name"
                      className="login-input"
                      type="text"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Username"
                      className="login-input"
                      type="text"
                      value={this.state.username}
                      name="username"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Password"
                      className="login-input"
                      type="password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {loading ? (
              <button className="processing" type="submit">
                <span style={{ color: "#333" }}>PROCESSING . . .</span>
              </button>
            ) : (
              <button className="login" type="submit">
                <span style={{ color: "#FFF" }}>SIGN UP</span>
              </button>
            )}
          </form>
          <div
            className="signup-link"
            style={{ fontSize: 12 }}
            onClick={() => this.props.history.push("/")}
          >
            Already have an account?{" "}
            <span style={{ color: "rgb(28, 150, 65)", fontSize: 12 }}>
              SIGN IN
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
