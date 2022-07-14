import './styles.css';

import LogoNormal from '../../assets/logo-blue.png'

const Categoria = () => {
    return (
        <li className='categoria d-inline-block'>
            <div className='d-flex'>
                <div className='d-inline-block'>
                    <img src={LogoNormal} className='img-fluid img-border' />
                </div>
                <div className='d-inline-block pl-1'>
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
            </div>


        </li>
    )
}

export default Categoria