import React, { Component } from "react";
import "../assets/css/login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
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
    event.preventDefault();
    this.setState({ loading: true });
    await fetch("http://54.159.200.168:8081/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert("Error logging in please try again!");
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false });
          localStorage.setItem("token", data.token);
          this.props.history.push("/product");
        }
      })
      .catch(err => {
        alert("Error logging in please try again!");
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
                <span style={{ color: "#FFF" }}>SIGN IN</span>
              </button>
            )}
          </form>
          <div className="signup-link" style={{ fontSize: 12 }} onClick = {()=>this.props.history.push("/regist")}>
            Do not have an account?{" "}
            <span style={{ color: "rgb(28, 150, 65)", fontSize: 12 }}>
              SIGN UP
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
