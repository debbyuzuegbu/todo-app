import React from 'react';
import AppHeader from './Component/AppHeader';
import PageTitle from './Component/PageTitle';
import style from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
