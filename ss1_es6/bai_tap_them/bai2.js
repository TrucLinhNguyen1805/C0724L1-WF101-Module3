const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling','photography'],
    language: ['English','Spanish'],
    education:{
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};
// Sử dụng destructuring để lấy các thuộc tính cần thiết từ đối tượng person
const {
    firstName,
    gender,
    education: { degree }, // Destructuring để lấy degree từ education
    language: [english] // Destructuring và đặt tên lại để lấy ngôn ngữ đầu tiên là English
} = person;
const student = {
    firstName,
    gender,
    degree,
    english
};
console.log("Thông tin của student:");
console.log(student);
