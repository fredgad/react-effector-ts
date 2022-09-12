import { Route, Routes } from 'react-router-dom';

import { Error404Page } from '../pages/error404';
import { MainPage } from '../pages/main';
import { UiKitPage } from '../pages/ui-kit';
import { Header } from '../widgets/ui/organism/header';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/ui" element={<UiKitPage />}></Route>
        <Route path="*" element={<Error404Page />}></Route>
      </Routes>
    </>
  );
}

export default App;
