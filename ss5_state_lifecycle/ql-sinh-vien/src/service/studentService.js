const studentList = [
    {
        id: 1,
        name: 'Nguyễn Trúc Linh',
        phone: '0987654321',
        email: 'truclinhnguyen@gmail.com'
    },
    {
        id: 2,
        name: 'Nguyễn Bảo Ngân',
        phone: '0987654321',
        email: 'ngannguyen@gmail.com'
    },
    {
        id: 3,
        name: 'Nguyễn Văn Thanh Tuấn',
        phone: '0987654321',
        email: 'thanhtuan@gmail.com'
    }
  ]
  export function getAllStudent() {
        return studentList;
    }
    
    export function addNewStudent(student) {
    // kết nối API để thêm mới
        studentList.push(student);
    } 