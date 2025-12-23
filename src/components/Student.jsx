import { useState } from 'react';
import studentsData from '../../data.json';

function Student() {
  // Fonction pour obtenir un étudiant aléatoire
  const getRandomStudent = () => {
    const randomIndex = Math.floor(Math.random() * studentsData.length);
    return studentsData[randomIndex];
  };

  // État initial avec un étudiant aléatoire
  const [currentStudent, setCurrentStudent] = useState(getRandomStudent());

  // Fonction pour changer d'étudiant
  const handleNextStudent = () => {
    setCurrentStudent(getRandomStudent());
  };

  return (
    <div style={{
      border: '2px solid #646cff',
      borderRadius: '8px',
      padding: '2rem',
      margin: '2rem auto',
      maxWidth: '500px',
      backgroundColor: '#1a1a1a'
    }}>
      <h2 style={{ color: '#646cff', marginBottom: '1.5rem' }}>Informations Étudiant</h2>
      
      <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <p><strong>Prénom:</strong> {currentStudent.student.firstname}</p>
        <p><strong>Nom:</strong> {currentStudent.student.lastname}</p>
        <p><strong>ID:</strong> {currentStudent.student.id}</p>
        <p><strong>Cours:</strong> {currentStudent.course}</p>
        <p><strong>Note:</strong> {currentStudent.grade}/100</p>
        <p><strong>Date:</strong> {currentStudent.date}</p>
      </div>

      <button 
        onClick={handleNextStudent}
        style={{
          backgroundColor: '#646cff',
          color: 'white',
          padding: '0.8rem 1.5rem',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#535bf2'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#646cff'}
      >
        Étudiant Suivant (React Hook)
      </button>
    </div>
  );
}

export default Student;
