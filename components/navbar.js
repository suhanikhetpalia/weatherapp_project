import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            }
      }
  render() {
    return (
      <div className="navbar">
     <span style={{color: 'white' , fontSize: '34px'}}>Weather App</span>
      </div>
    );
  }
}
export default NavBar;
