import logo from './logo.svg';
import './App.css';
import ListComponent from './component/ListComponent';
import HeaderComponent from './component/HeaderComponent';
import {Routes,Route} from "react-router-dom"
import AddComponent from './component/AddComponent';
import DetailComponent from './component/DetailComponent';


function App() {
  return (
    <>
        <HeaderComponent/>
        <Routes>
            <Route path='/student' element={<ListComponent/>}></Route>
            <Route path='/student/create' element={<AddComponent/>}></Route>
            <Route path={'/products/detail/:id'} element={<DetailComponent/>}></Route>
        </Routes>
    </>
  );
}

export default App;
