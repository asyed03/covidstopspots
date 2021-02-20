import './SearchBar.css';
import * as React from "react";
import Geocode from "react-geocode";

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: "",
    }
    Geocode.setApiKey(`${process.env.REACT_APP_GEOCODE_API}`);
    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
  }
  

  render () {
    return (
            <div>
              Type Address: <input type= "text" onChange={event => {this.setState({inputValue: event.target.value})}} onKeyPress={event => {
                if (event.key === 'Enter' && this.state.inputValue != "") {
                  Geocode.fromAddress(this.state.inputValue).then(
                    (response) => {
                      const { lat, lng } = response.results[0].geometry.location;
                      console.log(lat, lng);
                      this.props.changePos([lat, lng], 14);
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
              }}></input>
              </div>
    )
  }
}

export default SearchBar;