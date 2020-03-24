import React, { Component } from "react";
import '../assets/css/login.css';
class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = e => { 
        this.setState({
            [e.target.name] : e.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://54.159.200.168:8081/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            if(data.message){
                alert('Error logging in please try again!');
            }else{
                localStorage.setItem('token', data.token)
                this.props.history.push('/product')
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in please try again!');
        })
      }

    render(){
        if(localStorage.getItem('token') !== null){
          this.props.history.push('/product')
      }
        return(
            <div>
                <div className = "login-container">
                    <form  onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                            <tr>
                                <td><input placeholder = "Username" className = "login-input" type = "text" value={this.state.username} name = "username" onChange = {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td><input  placeholder = "Password" className = "login-input" type = "password" value={this.state.password} name = "password" onChange = {this.handleChange}/></td>
                            </tr>
                            </tbody>
                        </table>            
                        <button className ="login" type = "submit"><span style={{color: '#FFF'}}>LOG IN</span></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;