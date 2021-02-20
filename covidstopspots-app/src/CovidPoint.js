import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { ChakraProvider, Button, Input} from "@chakra-ui/react";

class CovidPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: this.props.position,
      name: this.props.name,
      input: this.props.input,
      information: this.props.information,
      key: this.props.key
    };
  }

  pushPoint(name, info){
    //push to the database
    console.log("pushed to db", name, info)
    this.setState({input: false})
  }

  GetType = (icon) => {
    if (this.state.input === true){
      return (
        console.log("input point"),
        <Marker position={this.state.position} icon={icon}>
            <Popup>
              Name: <Input size="sm" variant="outline" placeholder="Name" onChange={ev => {this.setState({name: ev.target.value})}}/> <br />
              Case Status: <Input size="sm" variant="outline" placeholder="Case Status"  onChange={ev => {this.setState({information: ev.target.value})}}/> <br />
              <Button size = "xs" variant="solid" colorScheme="twitter" onClick={ev => {
                if (this.state.name != "" && this.state.information != ""){
                  this.pushPoint(this.state.name, this.state.information);
                }}}> Submit </Button>
            </Popup>
        </Marker>
      )
    }
    return (
      console.log("normal point"),
      <Marker position={this.props.position} icon={icon}>
            <Popup>
              Name: {this.state.name} <br />
              position: {this.state.position} <br />
              Case Status: {this.state.information}
            </Popup>
      </Marker>
    )
    
  }

  render() {
    const covidIcon = L.icon({
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Redpoint.svg/768px-Redpoint.svg.png",

      iconSize: [30, 30], // size of the icon
      iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
      popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
    });

    return (
      <ChakraProvider>
        <div>
        {this.GetType(covidIcon)}
        </div>
      </ChakraProvider>
      
    );
  }
}

export default CovidPoint;
