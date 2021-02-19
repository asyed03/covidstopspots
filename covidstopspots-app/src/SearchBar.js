import './SearchBar.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Geocode from "react-geocode";

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: "",
    }
    Geocode.setApiKey("AIzaSyBoJbAbUKMLOxpwTIz76GgK0Fq00n1LbYo");
    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
  }
  

  render () {
    return (
    <div>
      type address: <input type= "text" id="searchbar" onChange={event => {this.setState({inputValue: event.target.value})}} onKeyPress={event => {
                if (event.key === 'Enter') {
                  Geocode.fromAddress(this.state.inputValue).then(
                    (response) => {
                      const { lat, lng } = response.results[0].geometry.location;
                      console.log(lat, lng);
                      this.props.changePos([lat, lng], 15);
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