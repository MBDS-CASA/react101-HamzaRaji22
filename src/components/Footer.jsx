function Footer() {
  return (
    <footer style={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      textAlign: 'center', 
      padding: '1rem',
      backgroundColor: '#242424'
    }}>
      <p>Tous droits réservés - Hamza Raji © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
