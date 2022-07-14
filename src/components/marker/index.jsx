import './styles.css'
import MarkerIcon from '../../assets/marker.png'
import Logo from '../../assets/logo-blue.png'
import MarkerIconSelected from '../../assets/marker-selected.png'

const Marker = ({selected}) => {
    return (
        <div className='marker'>
            <img className='bg-marker' src={selected ? MarkerIconSelected : MarkerIcon} />
            <img className='img-marker' src={Logo} />
        </div>

    )
}

export default Marker;