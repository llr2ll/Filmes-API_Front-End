import { Link } from "react-router-dom";
import './footer.css'

function Footer() {
    return (
        <>
            <Link to={'/management'} className='add'><button className='btn'>Gerenciar Filmes</button></Link>
        </>
    );
  }

export default Footer;