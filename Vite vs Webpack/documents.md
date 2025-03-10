1. ### webpack và vite là gì?
Về cơ bản thì webpack và vite là một công cụ được sử dụng để đóng, gói tối ưu code của chúng ta trong dự án và đưa chúng về một hoặc nhiều file mà trình duyệt (browsers) có thể chạy được.

2. ### cách hoạt động của webpack
- Đầu tiên, ta cần hiểu rằng trong reactjs hoặc bất kỳ một framwork, library fe nào thì sẽ đều có một file app.js hoặc index.js chính và một file style.css, kèm theo đó là một thư viện để hiển thị giao diện là react-dom

- Nếu như không có webpack thì chúng ta sẽ phải link từng file HTML vào thẻ script, Trình duyệt sẽ phải tải từng file riêng lẻ, nên sẽ gây chậm cho ứng dụng và có thể xảy ra lỗi nếu như thứ tự load file không đúng, vì thế react-dom phải được load trước

- Nếu như có webpack thì chúng ta chỉ cứ code hoàn toàn bình thường trong các file riêng lẻ, và có thể dụng import/export để kết nối các file/component với nhau
 Lúc này webpack sẽ có nhiệm vụ đi tìm tất cả các file liên quan (bao gồm cả thư viện từ node_modules), gộp chúng thành một file duy nhất(thường là file bunlde.js) và tự động gắn luôn file này vào HTML để cho trình duyệt (browsers) chạy

3. ### Tại sao lại cần đến webpack? (tác dụng của webpack)
    1. #### Quản lý mã nguồn (source code)
        Trên thực tế thì trong một dự án sẽ có rất nhiều file, folder. Webpack sẽ giúp cho dev không cần phải lo lắng về việc tự gộp và tối ưu chúng.
    2. #### Tối ưu hoá.
        Webpack sẽ nén file/code, loại bỏ phần không dùng (tree shaking), chia nhỏ các file nếu cần (code splitting) để trang web có thể được load nhanh hơn.
    3. #### tương thích
        Trình duyệt (browsers) cũ sẽ không hiểu được cú pháp ES6 (như let, const, arrow function,...), webpack dùng babel để 'dịch' code thành các phiên bản cũ hơn cho trình duyệt hiểu


4. ### Cách hoạt động của vite
- Về cơ bản thì vite hoạt động gần giống với webpack nhưng nó có một chút khác biệt trong quá trình tối ưu như sau
- Với webpack mỗi lần chúng ta sửa code thì webpack sẽ đóng gói lại toàn bộ dự án và sẽ tốn mất vài giây cuộc đời của chúng ta
- Nhưng đối với vite thì nó sẽ không đóng gói hết ngay. Mà nó sẽ dùng ES Modules (cú pháp import/export mà trình duyệt mới hiểu) để gửi trực tiếp từng file nhỏ cho trình duyệt (browsers)
- Khi chúng ta sửa code, chỉ có phần thay đổi được cập nhật ngay lập tức (gọi là Hot Module Replacement - HMR), chỉ mất chưa tới 1s 