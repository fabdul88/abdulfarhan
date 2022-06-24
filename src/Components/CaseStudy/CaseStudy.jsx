import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { caseStudyData } from './caseStudyData';
import { Footer } from '../Footer/Footer';
import construction from '../../assets/under_construction.svg';

const CaseStudy = () => {
  const location = useLocation();
  const { projectname } = useParams();

  return (
    <>
      <main style={{ background: '#ffffff', minHeight: '100vh' }}>
        {location.pathname.includes(projectname) ===
          location.state.projName.toLowerCase().includes(projectname) &&
          caseStudyData
            .filter((item) => item.name.toLowerCase() === projectname && item)
            .map((item) => (
              <div
                style={{
                  fontFamily: 'MontserratB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '50px 0',
                }}
                key={item.name}
              >
                <h1>CASE STUDY: {location.state.projName}</h1>
                <p>{item.description}</p>
                <img
                  src={construction}
                  alt=""
                  style={{ width: '60vw', height: '60vh', padding: '15px' }}
                />
              </div>
            ))}
      </main>
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: ' #252525',
          width: '100vw',
        }}
      >
        <Footer />
      </footer>
    </>
  );
};

export { CaseStudy };
