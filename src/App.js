import React from 'react';
import BasicInfo from './components/BasicInfo';
import WorkSection from './components/WorkSection';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DevSetup from './components/DevSetup';
import styles from'./components/styles.css';


function App() {
  return (
    <div>
      <BasicInfo />
      <WorkSection />
      <Skills />
      <Resources />
      <DevSetup />
    </div>
  );
}

export default App;
