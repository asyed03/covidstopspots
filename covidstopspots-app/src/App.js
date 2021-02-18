import './App.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Geocode from "react-geocode";
import SearchBar from './SearchBar';

class App extends React.Component {
  render () {
    return (
      <ChakraProvider resetCSS = {false}>
        <div className = "App">
          <div id="title">
            <h1>
              CovidStopSpots
            </h1>
              <p>A responsive tracker for Covid-19.</p>
          <SearchBar></SearchBar>
          </div>
          <div id="map">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
      </div>
      </ChakraProvider>
    )
  }
}

export default App;
