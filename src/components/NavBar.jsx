import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Gordo Random</h1>
      <ul>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/categoria/entrada">Entradas</Link>
        </li>
        <li>
          <Link to="/categoria/platoprincipal">Platos principales</Link>
        </li>
        <li>
          <Link to="/categoria/postre">Postres</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
