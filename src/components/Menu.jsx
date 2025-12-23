import { NavLink } from "react-router-dom"

function Menu() {
  const menuStyle = {
    width: '250px',
    backgroundColor: '#1a1a1a',
    padding: '2rem 0',
    position: 'fixed',
    left: 0,
    top: '120px',
    bottom: '60px',
    borderRight: '2px solid #646cff',
    overflowY: 'auto'
  };

  const linkStyle = {
    display: 'block',
    padding: '1rem 2rem',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.3s',
    borderLeft: '4px solid transparent'
  };

  const activeLinkStyle = {
    backgroundColor: '#242424',
    borderLeft: '4px solid #646cff',
    color: '#646cff',
    fontWeight: 'bold'
  };

  return (
    <nav style={menuStyle}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {})
            })}
          >
            🏠 Accueil
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/etudiants" 
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {})
            })}
          >
            👨‍🎓 Étudiants
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/notes" 
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {})
            })}
          >
            📊 Notes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/matieres" 
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {})
            })}
          >
            📚 Matières
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/apropos" 
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {})
            })}
          >
            ℹ️ À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
