import axios from "axios"
// const studentList = [
//     {
//         id: 1,
//         name: 'Nguyễn Trúc Linh',
//         phone: '0987654321',
//         email: 'truclinhnguyen@gmail.com',
//         gender: 'Nữ',
//         interest: 'Đọc sách',
//         location: 'Quảng Nam'
//     },
//     {
//         id: 2,
//         name: 'Nguyễn Bảo Ngân',
//         phone: '0987654321',
//         email: 'ngannguyen@gmail.com',
//         gender: 'Nữ',
//         interest: 'Đọc sách',
//         location: 'Quảng Nam'
//     },
//     {
//         id: 3,
//         name: 'Nguyễn Văn Thanh Tuấn',
//         phone: '0987654321',
//         email: 'thanhtuan@gmail.com',
//         gender: 'Nam',
//         interest: 'Đọc sách',
//         location: 'Quảng Nam'
//     }
//   ]
  export async function getAllStudent() {
    try{
        const response = await axios.get("http://localhost:8080/student");
        console.log(response); 
        return response.data;
    }catch(e){
        console.log("Lỗi"+e);
    }
        // return studentList;
    }
    
    export async function addNewStudent(student) {
    // kết nối API để thêm mới
        try{
        const response = await axios.post("http://localhost:8080/student", student);
        
    }catch(e){
        console.log("Lỗi"+e);
    }
    } 
    export async function getStudentById(id) {
        try{
            const response = await axios.get("http://localhost:8080/student/"+id);
            console.log(response); 
            return response.data;
        }catch(e){
            console.log("Lỗi"+e);  
            return null;
        }
        
    }
    export async function deleteStudentById(id){
        try{
            const response = await axios.delete("http://localhost:8080/student/"+id);
            console.log(response); 
            return response.data;
        }catch(e){
            console.log("Lỗi"+e);  
            return null;
        }
    }
    export async function searchStudentByName(searchName){
        try{
            const response = await axios.get(`http://localhost:8080/student?name_like=${searchName}`);
            return response.data;
        }catch(e){
            console.log("Lỗi"+e);  
            return null;
        }
    }
    // export function editStudentById(id) {
    //     for (let i = 0; i <studentList.length ; i++) {
    //         if (studentList[i].id==id){
    //             studentList.splice(i,1);
    //             break;
    //         }
    //     }
    // }
    // export function searchByName(name){
    //     return studentList.filter(student => student.name.includes(name));
    // }
   