import Logo from "../../assets/logo.png";
import LogoWhite from "../../assets/logo-white.png";
import './styles.css';
import { Link } from "react-router-dom";

const Header = ({ whiteVersion, hideCard }) => {

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  }

  return (
    <div className="col-12 ">
      <header className="text-center py-1 px-4">
        <Link to='/'>
          <img src={whiteVersion ? LogoWhite : Logo} className="logo-white img-fluid" />
        </Link>

      </header>
      {
        !hideCard && <button className="btn btn-secondary cart-button" onClick={() => openDrawer()}>
          <span className="mdi mdi-cart"></span>
          2 Itens
        </button>
      }

    </div>
  );
};

export default Header;
