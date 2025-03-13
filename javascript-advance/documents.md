# JavaScript Advance

1. history.push và history.replace khác gì nhau?

|                |     histor.push    |   history.replace    |
|----------------|--------------------|----------------------|    
|   khái niệm    | Đưa người dùng tới | Đưa người dùng tới   |       
|                | một đường dẫn mới  | một đường dẫn mới    |   
| Cách hoạt động | đưa người dùng tới | Thay thế đường dẫn   |   
|                | một trang mới và   | hiện tại bằng một    |   
|                | thêm trang đó vào  | đường dẫn mới và     |   
|                | lịch sử duyệt web  | coi như trang trước  |   
|                |                    | đó không hề có trong |   
|                |                    | lịch sử duyệt web    | 
|----------------|--------------------|----------------------|  

2. Từ khoá this trong js
- trong js từ khoá ```javascript this ``` được hiểu là đối tượng mà nó thuộc về.
- hiểu đơn giản là cứ cái gì gọi đến một thuộc tính/phương thức thì nó sẽ là this

- Đặc tính:
    - Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng ở trước dấu .)
    - Đứng ngoài phương thức, this tham chiếu đối tượng global (windows)

3. Lưu ý:
- This trong hàm tạo sẽ đại diện cho đối tượng được tạo
- this trong một hàm sẽ là undefine nếu ở chế độ strict mode (use strict)
- Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác

4. Ví dụ:
- Ví dụ 1:
``` javascript
    const car = {
        name: 'eto',
        run: () => {
            console.log('Car is running' + this.name);
        }
    }

    car.run(); 
```

- Ví dụ 2:
``` javascript
    function Car(name, age) {
        this.name = name;
        this.age = age;

        this.info = function() {
            return this.name + ' ' + this.age;
        }

        objChild = function () {
            childMethod () {
                console.log(this) // this is objChild
            }
        }
    }

    const car = new Car('ferari', 100)
    console.log(car.objChild.childMethod()) 
```

5. Cách kiểm soát nút back trong trình duyệt (xem ví dụ trong file index.js)

6. Generation Function, Promise (Promise Hell)

