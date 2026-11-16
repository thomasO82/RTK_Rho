import { Link, useLocation } from 'react-router-dom'
import headerBg from '../../assets/header_bg.webp'
import reactLogo from '../../assets/react.svg'
import Searchbar from './Searchbar/Searchbar'
import './header.css'
export default function Header({ search, setSearch }) {
  const location = useLocation()
  return (
    <header>
      <div>
        <div>
          <img src={reactLogo} alt="React" />
        </div>
        <p>Recettes et planning de la semaine</p>
      </div>
      <h1>
        R<span>ecipes</span>I7
      </h1>
      <img src={headerBg} alt="" />
      {location.pathname === '/' && (
        <Searchbar search={search} setSearch={setSearch} />
      )}
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/planning">Planning</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
