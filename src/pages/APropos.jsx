function APropos() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>À Propos</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Portail Étudiant - Université Côte d'Azur</h2>
        <p>
          Bienvenue sur le portail étudiant de l'Université Côte d'Azur. 
          Cette application a été développée dans le cadre du cours d'introduction à React.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Fonctionnalités</h2>
        <ul style={{ lineHeight: '2' }}>
          <li>Consultation des informations des étudiants</li>
          <li>Visualisation des notes et statistiques</li>
          <li>Liste complète des matières enseignées</li>
          <li>Navigation intuitive avec React Router</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Technologies Utilisées</h2>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '1rem'
        }}>
          {['React', 'Vite', 'React Router', 'JavaScript ES6+'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#646cff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Développeur</h2>
        <p><strong>Hamza Raji</strong></p>
        <p>Master MBDS - Université Côte d'Azur</p>
      </section>

      <section style={{ 
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
        border: '2px solid #646cff'
      }}>
        <h3 style={{ color: '#646cff', marginTop: 0 }}>Contact</h3>
        <p>Pour toute question ou suggestion concernant cette application, 
        n'hésitez pas à contacter le développeur.</p>
      </section>
    </div>
  );
}

export default APropos;
