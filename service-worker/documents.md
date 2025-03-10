# Service Worker 

### 1. Service Worker là gì?
- service worker là một file js chạy ngầm (chạy ở chế độ nền), tách biệt khỏi luồng chính của trang web. 
- Nó đóng vai trò như một proxy, kiếm soát cách các yêu cầu mạng được xử lý, giúp ứng dụng web hoạt động ngay cả khi không có kết nối internet.
- Điều này đặc biệt hữu ích cho việc cache tài nguyên, xử lý thông báo đẩy, và thực hiện các tác vụ nền như đồng bộ hoá

2. ### Cách sử dụng Service Worker cơ bản
    1. ### Đăng ký service worker
    ``` javascript
        if("serviceWorker" in navigator) {
            navigator.serviceWorker.register("sw.js");
        }
    ```
    2. ### Tạo file sw.js để xử lý các sự kiện
    - #### Install: Cache các tài nguyên cần thiết, ví dụ:
    ``` javascript
        self.addEventListener("install", (event) => {
            event.waitUntil(
                caches.open("my-cache").then(cache => {
                    return cache.addAll(['/index.html', '/styles.css', '/app.js'])
                })
            )
        })
    ```
    - #### Activate: Xoá cache cũ để quản lý bộ nhớ, ví dụ:
    ``` javascript
        self.addEventListener("activate", (event) => {
            event.waitUntil(
                caches.keys().then(cacheNames => {
                    return Promise.all(
                        cacheNames.map(cacheName => {
                            if(cacheName !== 'my-cache') {
                                return caches.delete(cacheName);
                            }
                        })
                    )
                })
            )
        })
    ```
    - #### Fetch: Xử lý yêu cầu mạng, phục vụ từ cache hoặc từ mạng, ví dụ:
    ``` javascript
        selft.addEventListener("fetch", event => {
            event.respondWith(
                caches.match(event.request).then(response => {
                    return response || fetch(event.request)
                })
            )
        })
    ```

3. ### Trường hợp cần sử dụng service worker
- Ví dụ rõ nhất trong thực tế là nếu như chúng ta cần render ra một table với data được trả về từ BE. Nhưng trước khi render ra DOM thì chúng ta cần phải tính toán lại dữ liệu được trả về từ BE
- Lúc này chúng ta cần phải sử dụng service worker như sau
    1. Thực hiện call api để lấy data trả về từ BE
    2. Thực hiện đưa data vào service worker, lúc này thì ta sẽ thực hiện tính toán dữ liệu trong service worker và lý do tại sao ta lại phải đưa vào trong service worker?
    - lý do là vì thao tác khi tính toán các dữ liệu của table quá phức tạp và nó mất tgian và lúc đó có thể làm cho DOM bị block hoặc chờ. 
    - Vì thế chúng ta sử dụng service worker để thực hiện việc tính toán song song mà không hề ảnh hưởng đến quá trình render data trên DOM thật (quá trình này diễn ra hoàn toàn là đồng bộ)
    3. khi quá trình tính toán xong thì ta lại đưa nó vào DOM bình thường.

> Một điều thú vị: service worker có thể dùng để prefetching tài nguyên, như hình ảnh tiếp theo, giúp tăng trải nghiệm người dùng mà không thêm yêu cầu mạng.