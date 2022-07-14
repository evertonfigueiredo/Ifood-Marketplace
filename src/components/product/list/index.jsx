import BifeCaseiro from '../../../assets/bifecaseiro.png'
import './styles.css';

const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src={BifeCaseiro} className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <label className='badge badge-primary'>R$ 30,00</label>
                    </h6>
                    <small>
                        <b>Nome do Produto</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;