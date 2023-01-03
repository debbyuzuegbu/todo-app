import React from 'react';
import AppContent from './Component/AppContent';
import AppHeader from './Component/AppHeader';
import PageTitle from './Component/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
