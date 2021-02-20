import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import CovidPoint from "./CovidPoint";

function LocationMarkers(props) {
  const [position, setPosition] = useState([]);
  useMapEvents({
    dblclick(ev) {
      console.log("double clicked");
      const { lat, lng } = ev.latlng;
      setPosition([lat, lng]);
      const newPoints = [...props.points];
      console.log(newPoints);
      newPoints.push(<CovidPoint position={position} input={true}></CovidPoint>);
      props.fetchPoints(newPoints);
    }
  });

  return null;

}

export default LocationMarkers;
