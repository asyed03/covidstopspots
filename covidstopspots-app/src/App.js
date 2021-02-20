import './App.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet';
import SearchBar from './SearchBar';
import CovidPoint from './CovidPoint';
import LocationMarkers from './LocationMarkers';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      map: null,
      points: [<CovidPoint
      position={[43.653226, -79.3831843]}
      name="point1"
      information="random point"
      input = {false}
    ></CovidPoint>,
    <CovidPoint
      position={[50.653226, -79.3831843]}
      name="point2"
      information="random point"
      input = {true}
    ></CovidPoint>]
    }
  }

  changePos = (pos, zoom) => {
    const {map} = this.state;
    if (map) map.flyTo(pos, zoom);
  }

  fetchPoints = (newPoints) => {
    this.setState({points: newPoints})
    this.state.points.length > 0 && this.state.points.map(
      (point) => {
        return point
      }
      ) 
  }

  render() {
    return (
      <div className="App">
        <div id="title">
          <h1>CovidStopSpots</h1>
          <p>A responsive tracker for Covid-19.</p>
        </div>
        <div id="map">
          <MapContainer
            id="1"
            center={[43.653226, -79.3831843]}
            zoom={13}
            scrollWheelZoom={false}
            whenCreated={(map) => this.setState({ map })}
            style={{ height: "100vh " }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {this.state.points.length > 0 && this.state.points.map(
      (point) => {
        return point
      }) }
            {/* <CovidPoint
              position={[43.653226, -79.3831843]}
              name="point1"
              information="random point"
            ></CovidPoint>
            <CovidPoint
              position={[50.653226, -79.3831843]}
              name="point2"
              information="random point"
            ></CovidPoint> */}
            <LocationMarkers points={this.state.points} fetchPoints={this.fetchPoints}></LocationMarkers>
          </MapContainer>
        </div>
      </div>
    );
  }
}

export default App;
