import BifeCaseiro from '../../../assets/bifecaseiro.png'
import './styles.css';

const ProductCard = () => {
    return (
        <div className="product col-3">
            <img src={BifeCaseiro} className="img-fluid align-center" />
            <button className='btn btn-primary rounded-circle'>
               + 
            </button>
            <h4>
                <label className='badge badge-primary'>R$ 90,00</label>
            </h4>
            <small>
                <b>Bife Caseiro feito na hora</b>
            </small>
            
        </div>
    )
}

export default ProductCard