import logo from './logo.svg';
import './App.css';
import { StudentInfoComponent } from './Components/StudentInfoComponent';
const Student = [
  {
      id:1,
      name: 'Nguyễn Trúc Linh',
      age: 22,
      address: 'Quảng Nam'
  },
  {
      id:1,
      name: 'Nguyễn Bảo Ngân',
      age: 20,
      address: 'Đà Nẵng'
  },
  {
      id:1,
      name: 'Nguyễn Văn Thanh Tuấn',
      age: 21,
      address: 'Quảng Nam'
  }
]
function App() {
  return (
    <div>
       <StudentInfoComponent list ={Student} />
    </div>
  );
}

export default App;
