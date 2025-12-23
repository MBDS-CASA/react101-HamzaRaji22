function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenue sur le Portail Étudiant</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
        Ici, nous afficherons des informations interessantes :)
      </p>
      
      <div style={{
        marginTop: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '800px',
        margin: '3rem auto'
      }}>
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '8px',
          border: '2px solid #646cff'
        }}>
          <h2 style={{ color: '#646cff' }}>📚</h2>
          <h3>Matières</h3>
          <p>Consultez toutes les matières disponibles</p>
        </div>
        
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '8px',
          border: '2px solid #646cff'
        }}>
          <h2 style={{ color: '#646cff' }}>👨‍🎓</h2>
          <h3>Étudiants</h3>
          <p>Accédez aux informations des étudiants</p>
        </div>
        
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '8px',
          border: '2px solid #646cff'
        }}>
          <h2 style={{ color: '#646cff' }}>📊</h2>
          <h3>Notes</h3>
          <p>Visualisez les notes et statistiques</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
