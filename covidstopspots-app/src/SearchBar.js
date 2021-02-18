import './SearchBar.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

class SearchBar extends React.Component {
  render () {
    return (
      <ChakraProvider resetCSS = {true}>
        <div>
          <input id="searchbar"></input>
        </div>
      </ChakraProvider>
    )
  }
}

export default SearchBar;