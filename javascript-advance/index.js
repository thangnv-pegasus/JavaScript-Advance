function Car(name, age) {
    this.name = name;
    this.age = age;

    this.info = () => {
        return this.name + ' ' + this.age;
    }
}

const car = new Car('ferari', 100)
// console.log(car.info())

// Cách kiểm soát nút back trong trình duyệt
/*
    window.history.pushState:
    Thêm một trạng thái mới vào lịch sử trình duyệt mà không thực sự tải lại trang.
    Cú pháp: pushState(state, title, url).
*/

window.history.pushState({ page: "current" }, "Trang hiện tại", window.location.pathname);
const btnElement = document.querySelector('button');

if (btnElement) {
    btnElement.addEventListener("click", () => {
        // Đẩy trạng thái mới khi nhấn nút (tùy chọn)
        window.history.pushState({ page: "current" }, "Trang hiện tại", window.location.pathname);
        console.log("Đã nhấn nút và thêm trạng thái mới");
    });
}

// Lắng nghe sự kiện popstate (khi người dùng nhấn nút Back)
window.addEventListener("popstate", function (event) {
    // Kiểm tra trạng thái
    if (!confirm("Bạn có chắc muốn quay lại không?")) {
        // Nếu không, đẩy lại trạng thái hiện tại để "chặn" việc quay lại
        window.history.pushState({ page: "current" }, "Trang hiện tại", window.location.pathname);
        alert("Bạn đã bị chặn quay lại!");
    }else {
        window.history.back();
        alert("Bạn đã quay lại!");
    }
});
