import { NavLink } from 'react-router-dom';
import planet from '../assets/planet-icon.png';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className={'w-10 h-10 items-center justify-center flex'}>
        <img src={planet} />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'blue-gradient_text' : 'text-white'
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'blue-gradient_text' : 'text-white'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? 'blue-gradient_text' : 'text-white'
          }
        >
          Explore
        </NavLink>
        <NavLink
          to="/flight"
          className={({ isActive }) =>
            isActive ? 'blue-gradient_text' : 'text-white'
          }
        >
          Flight
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
