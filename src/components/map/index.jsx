import GoogleMapReact from "google-map-react"
import Marker from "../marker";
import './styles.css';

const Map = () => {
    const defaultProps = {
        center: {
            lat:-7.835,
            lng:-35.76,
        },
        zoom: 14
      };
    
    return (
        <div className="container-map">
            <GoogleMapReact bootstrapURLKeys={{key: process.env.REACT_APP_KEY_MAP}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker selected lat={-7.8375887} lng={-35.7631167} ></Marker>
                <Marker lat={-7.838568} lng={-35.759639} ></Marker>
            </GoogleMapReact>
        </div>
    )
}

export default Map