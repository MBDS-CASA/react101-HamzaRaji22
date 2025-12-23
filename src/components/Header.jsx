import logoUniversite from '../assets/logo-universite-cote-azur.svg'

function Header() {
  return (
    <header>
      <img src={logoUniversite} className="logo" alt="Logo Université Côte d'Azur" />
      <h1></h1>
      <h2>portail étudiant</h2>
    </header>
  );
}

export default Header;
