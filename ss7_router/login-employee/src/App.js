import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListComponent from './component/ListComponent';
import LoginComponent from './component/LoginComponent';

function App() {
  return (
      <>
        <Routes>
          <Route path='' element={<LoginComponent/>}></Route>
          <Route path='/home' element={<ListComponent/>}></Route>
        </Routes>
      </>
  );
}

export default App;
