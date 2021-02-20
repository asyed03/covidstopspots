import './App.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet';
import SearchBar from './SearchBar';
import CovidPoint from './CovidPoint';

function LocationMarker() {
  const [position, setPosition] = React.useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      map: null,
      points: []
    }
  }

  changePos = (pos, zoom) => {
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
            <MapContainer id = "1" center={[43.653226, -79.3831843]} zoom={13} scrollWheelZoom={false} whenCreated={map => this.setState({ map })}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
             <CovidPoint position={[43.653226, -79.3831843]} name="point1" information="random point"></CovidPoint>
             <CovidPoint position={[50.653226, -79.3831843]} name="point2" information="random point"></CovidPoint>
            </MapContainer>
            <div id="searchbar">
            <SearchBar changePos = {this.changePos}></SearchBar>
            </div>
          </div>
      </div>
      </ChakraProvider>
    )
  }
}

export default App;
