import Header from "../../components/header";
import LogoNormal from '../../assets/logo-blue.png'
import './styles.css';
import ProductCard from "../../components/product/card";

const Restaurante = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={LogoNormal} className='img-fluid img-border' />
                        <b>Digitalizando</b>
                        <div className="restaurante-infos">
                            <span className="mdi mdi-star"></span>
                            <p>
                                <b>2,8</b>
                            </p>
                            <span className="mdi mdi-cash-multiple"></span>
                            <p>
                                $$$
                            </p>
                            <span className="mdi mdi-crosshairs-gps"></span>
                            <p>
                                2.5km
                            </p>
                        </div>
                        <label className="badge badge-secondary">Frete Grátis</label>
                    </div>
                    <div className="col-10">
                        <h5 className="mb-4">Pratos completos</h5>
                        <div className="row">
                          {[1,2,3,4,5,6,7,8].map((p) => <ProductCard />)} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurante;