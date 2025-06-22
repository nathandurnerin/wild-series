import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="relative flex items-center bg-primary p-4">
      <div className="flex-1">
        <h1 className="text-xl md:text-3xl font-bold text-white">
          <Link to="/">
            Wild<span className="text-yellow-400">Series</span>.
          </Link>
        </h1>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="hidden md:flex gap-30 font-semibold text-sm">
          <li>
            <Link to="/programs" className="text-white font-medium text-sm">
              Séries
            </Link>
          </li>
          <li>
            <Link to="/categories" className="text-white font-medium text-sm">
              Catégories
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white font-medium text-sm">
              Mes favoris
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex justify-end items-center gap-3">
        <ul className="hidden md:flex gap-5 font-semibold text-sm items-center">
          <li className="text-yellow-400 font-medium text-sm">Déconnexion</li>
          <li className="text-white font-medium text-sm">John Doe</li>
        </ul>
        <div className="p-3 bg-white rounded-full w-3 h-3 md:w-6 md:h-6" />
      </div>
    </nav>
  );
}

export default NavBar;
