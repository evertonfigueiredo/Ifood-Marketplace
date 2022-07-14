import { useState, useEffect } from 'react';
import Product from "../product/list";
import { Dock } from 'react-dock';
import './styles.css';

const Sidebar = () => {

    const [opened, setOpened] = useState(false)

    useEffect(() => {
        window.addEventListener('openCart', ()=>{
            setOpened(true);
        })
    }, []);

    return (
        <Dock position='right'
            isVisible={opened}
            onVisibleChange={(visible) => {
                setOpened(visible)
            }}>
            <div className="container-fluid h-100 pt-4 sidebar">
                <h5>Meu carrinho (5)</h5>
                <div className="row product-sidebar">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (<Product />))}
                </div>
                <div className="row align-items-end footer">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <b className='d-inline-block'>Total</b>
                        <h3 className='d-inline-block'>R$ 90,00</h3>
                    </div>
                    <div className='d-grid h-50' style={{padding: 0}}>
                    <button className='btn btn-lg btn-primary rounded-0 algin-items-center'>Finalizar Comprar</button>
                    </div>
                </div>
            </div>
        </Dock>
    )
}

export default Sidebar;