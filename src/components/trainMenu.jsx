import React, { Component } from "react";
import '../assets/css/trainMenu.css';

class TrainMenu extends Component{
    render(){
        return(
            <div>
                <div className = "train-menu">
                    <div
                        className = "add-button"
                        onClick = {e => {
                            this.props.showModal();
                        }}>
                        <img src={require('../assets/images/add.svg')} alt="add product"/>
                    </div>
                </div>                
            </div>
        )
    }
}

export default TrainMenu;