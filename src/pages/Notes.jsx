import { useState } from 'react';
import studentsData from '../../data.json';

function Notes() {
  // Calculer les statistiques
  const calculateStats = () => {
    const grades = studentsData.map(item => item.grade);
    const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
    const max = Math.max(...grades);
    const min = Math.min(...grades);
    return { average, max, min };
  };

  const stats = calculateStats();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Notes des Étudiants</h1>
      
      <div style={{
        display: 'flex',
        gap: '2rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #646cff',
          minWidth: '150px'
        }}>
          <h3>Moyenne</h3>
          <p style={{ fontSize: '2rem', color: '#646cff', margin: 0 }}>{stats.average}</p>
        </div>
        
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #4caf50',
          minWidth: '150px'
        }}>
          <h3>Note Max</h3>
          <p style={{ fontSize: '2rem', color: '#4caf50', margin: 0 }}>{stats.max}</p>
        </div>
        
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #f44336',
          minWidth: '150px'
        }}>
          <h3>Note Min</h3>
          <p style={{ fontSize: '2rem', color: '#f44336', margin: 0 }}>{stats.min}</p>
        </div>
      </div>

      <div style={{
        maxHeight: '500px',
        overflowY: 'auto',
        border: '1px solid #646cff',
        borderRadius: '8px',
        padding: '1rem'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#242424', position: 'sticky', top: 0 }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Étudiant</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Cours</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Note</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((item) => (
              <tr key={item.unique_id} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '0.8rem' }}>
                  {item.student.firstname} {item.student.lastname}
                </td>
                <td style={{ padding: '0.8rem' }}>{item.course}</td>
                <td style={{ 
                  padding: '0.8rem',
                  color: item.grade >= 50 ? '#4caf50' : '#f44336',
                  fontWeight: 'bold'
                }}>
                  {item.grade}/100
                </td>
                <td style={{ padding: '0.8rem' }}>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Notes;
