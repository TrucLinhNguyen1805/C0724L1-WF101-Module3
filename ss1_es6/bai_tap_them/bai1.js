// 1. Viết hàm kiểm tra 1 số có phải là số nguyên tố
const isPrime = (num) => {
    if (num <= 1){
        return false; // Số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố
    } 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false; // Nếu tìm được ước thì không phải số nguyên tố
        }
    }
    return true; // Nếu không tìm được ước nào thì là số nguyên tố
  };
  console.log(isPrime(11)); // true
  console.log(isPrime(10)); // false
  //2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = numbers.filter(isPrime);
  
  console.log(primeNumbers); // [2, 3, 5, 7]
    