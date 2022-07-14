import Categoria from '../../components/categoria'
import Header from '../../components/header'
import Map from '../../components/map'
import './styles.css'

const Home = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container-fluid restaurante-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Todos Restaurantes</h5>
                </div>
                <ul className="col-12 restaurante-list">
                    {[1,2,3,4,5,6,7,8,9].map((p) => <Categoria/>)}
                </ul>
                <Map></Map>
            </div>
        </div>
    )
}

export default Home