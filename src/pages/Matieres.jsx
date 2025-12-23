import studentsData from '../../data.json';

function Matieres() {
  // Extraire les matières uniques
  const courses = [...new Set(studentsData.map(item => item.course))].sort();
  
  // Calculer les statistiques par matière
  const courseStats = courses.map(course => {
    const courseGrades = studentsData.filter(item => item.course === course);
    const grades = courseGrades.map(item => item.grade);
    const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
    const studentCount = courseGrades.length;
    
    return {
      course,
      average,
      studentCount,
      maxGrade: Math.max(...grades),
      minGrade: Math.min(...grades)
    };
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Liste des Matières</h1>
      <p>Vue d'ensemble des cours et leurs statistiques</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {courseStats.map((stat) => (
          <div key={stat.course} style={{
            backgroundColor: '#1a1a1a',
            border: '2px solid #646cff',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h2 style={{ color: '#646cff', marginTop: 0 }}>{stat.course}</h2>
            
            <div style={{ marginTop: '1rem' }}>
              <p><strong>Nombre d'étudiants:</strong> {stat.studentCount}</p>
              <p><strong>Moyenne:</strong> <span style={{ color: '#646cff' }}>{stat.average}/100</span></p>
              <p><strong>Note maximale:</strong> <span style={{ color: '#4caf50' }}>{stat.maxGrade}</span></p>
              <p><strong>Note minimale:</strong> <span style={{ color: '#f44336' }}>{stat.minGrade}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matieres;
