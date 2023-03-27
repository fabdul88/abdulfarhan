import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { caseStudyData } from './caseStudyData';
import { Footer } from '../Footer/Footer';
import caseStudyProj from '../../assets/casestudyproj.svg';

const CaseStudy = () => {
  const location = useLocation();
  const { projectname } = useParams();

  return (
    <>
      <main
        style={{ background: '#ffffff', minHeight: '100vh', padding: '50px 0' }}
      >
        {(location.pathname.includes(projectname) ===
          location?.state?.projName?.toLowerCase().includes(projectname) ||
          location.pathname.includes(projectname)) &&
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
                <h1>
                  CASE STUDY:{' '}
                  {location?.pathname?.includes(projectname) ||
                  location?.state?.projName.toLowerCase() === item.name ||
                  (location?.state?.projName === 'undefined' &&
                    location.pathname.includes(projectname))
                    ? item.name.toUpperCase()
                    : 'No Case Study Name Available'}
                </h1>
                <p>{item?.description}</p>
                <img
                  src={caseStudyProj}
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
