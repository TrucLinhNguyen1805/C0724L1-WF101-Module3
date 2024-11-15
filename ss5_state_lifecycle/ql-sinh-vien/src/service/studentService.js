const studentList = [
    {
        name: 'Nguyễn Trúc Linh',
        phone: '0987654321',
        email: 'truclinhnguyen@gmail.com'
    },
    {
        name: 'Nguyễn Bảo Ngân',
        phone: '0987654321',
        email: 'ngannguyen@gmail.com'
    },
    {
        name: 'Nguyễn Văn Thanh Tuấn',
        phone: '0987654321',
        email: 'thanhtuan@gmail.com'
    }
  ]
  export function getAllStudent() {
    // kết nối API của back-end
        return studentList;
    }
    
    export function addNewStudent(student) {
    // kết nối API để thêm mới
        studentList.push(student);
    } 