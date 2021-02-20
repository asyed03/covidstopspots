import './SearchBar.css';
import * as React from "react";
import { MapContainer, Marker } from 'react-leaflet';
import * as L from 'leaflet';
import { Popup } from 'react-leaflet';

class CovidPoint extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      positon: this.props.position,
      name: this.props.name,
      information: this.props.information,
    }
  }
  

  render () {
    const covidIcon = L.icon({
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Redpoint.svg/768px-Redpoint.svg.png',
  
      iconSize:     [30, 30], // size of the icon
      iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  });

    return (
    <div>
      <Marker position={this.state.positon} icon={covidIcon}>
        <Popup>
          Name: {this.state.name} <br />
          Case Status: {this.state.information}
        </Popup>
      </Marker>
    </div>
    )
  }
}

export default CovidPoint;