import React from "react";
import firebase from './firebase';
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

  pushPoint(){
    //push to the database
    this.setState({input: false})
    {/*
    const pointsref = firebase.database().ref("points")
    const newPointref = pointsref.push()
    newPointref.set({
      position: this.state.position,
      name: this.state.name,
      input: this.state.input,
      information: this.state.information,  
    })
    console.log("pushed to db", this.state.name)
    
    */} 
  }

  GetType = (icon) => {
    
    return (
      <Marker position={this.props.position} icon={icon}>
        if (this.state.input === true){
         console.log("input point"),
          <Popup>
          Name: <Input size="sm" variant="outline" placeholder="Name" onChange={ev => {this.setState({name: ev.target.value})}}/> <br />
          Case Status: <Input size="sm" variant="outline" placeholder="Case Status"  onChange={ev => {this.setState({information: ev.target.value})}}/> <br />
          <Button size = "xs" variant="solid" colorScheme="twitter" onClick={ev => {
            if (this.state.name != "" && this.state.information != ""){
              this.pushPoint();
            } }}> Submit </Button>
        </Popup>
        } else {
          console.log("normal point"),

          <Popup>
              Name: {this.state.name} <br />
              position: {this.state.position} <br />
              Case Status: {this.state.information}
            </Popup>
        }
      </Marker>
    )
    
  }

  render() {
    const covidIcon = L.icon({
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Redpoint.svg/768px-Redpoint.svg.png",

      iconSize: [30, 30], // size of the icon
      popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
    });

    return (
      <ChakraProvider>
        <div OnChange>
        {this.GetType(covidIcon)}
        </div>
      </ChakraProvider>
      
    );
  }
}

export default CovidPoint;
