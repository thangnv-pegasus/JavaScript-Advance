# Anonymous Function

### 1. khái niệm
- Anonymous function(hàm ẩn danh) về cơ bản là nó là một hàm không được định nghĩa tên. Thay vì chúng ta đặt tên cho function như cách thông thường, chúng ta sẽ định nghĩa nó tại nơi cần sử dụng, thường là trong một biểu thức hoặc như một tham số truyền vào

### 2. Cú pháp cơ bản
```
    function () {
        // code
    }
```
### 3. Cách dùng
- Gán vào biến
```
    const sayHello = function () {
        console.log("good morning")
    }
    sayHello();
```
- Sử dụng trực tiếp (IIFE - Immediately Invoked Function Expression)
```
    (function () {
        console.log("This function is running now!")
    })()
```

- Truyền hàm than số
```
    setTimeout(function () {
        console.log("This function is running after 2s")
    }, 2000)
```

### 4. Ứng dụng
    - Callback: Dùng trong các hàm như setTimeout, forEach, hoặc gán sự kiện cho DOM
    - Tránh bị khó kiểm soát khi đặt tên hàm: Khi mà chúng ta không cần tái sử dụng hàm
    - Tạo closure: Giới hạn phạm vi của biến