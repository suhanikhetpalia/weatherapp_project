import React, { Component } from 'react';

import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName : null,
            }
        this.handleSearchInput = this.handleSearchInput.bind(this);
      }
      updateCityName(e) {
        this.setState({ cityName: e.target.value })
      }

handleSearchInput() {
    console.log('handleSearchInput fired');
    this.props.searchCity(this.state.cityName);
}
  render() {
    return (
      <div
      style={{textAlign: 'center'}}>
<input            className="cityname"
									placeholder="Enter City Name..."
                  value={this.state.cityName}
									onChange={e => this.updateCityName(e)}
								/>  
    <button className='searchbutton'
       onClick={this.handleSearchInput}
        >Search</button>
      </div>
    );
  }
}
SearchBar.propTypes = {
    searchCity: PropTypes.func
  };
export default SearchBar;
