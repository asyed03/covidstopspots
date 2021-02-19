import './App.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Geocode from "react-geocode";
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      map: null
    }
  }

  changePos (pos, zoom) {
    const {map} = this.state;
    if (map) map.flyTo(pos, zoom);
  }

  render () {
    return (
      <ChakraProvider resetCSS = {false}>
        <div className = "App">
          <div id="title">
            <h1>
              CovidStopSpots
            </h1>
              <p>A responsive tracker for Covid-19.</p>
          
          </div>
          <div id="map">
            <MapContainer center={[43.653225, -79.383186]} zoom={13} scrollWheelZoom={false} whenCreated={map => this.setState({ map })}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[43.653225, -79.383186]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            <div id="searchbar">
            <SearchBar changePos = {this.changePos.bind(this)}></SearchBar>
            </div>
          </div>
      </div>
      </ChakraProvider>
    )
  }
}

export default App;
