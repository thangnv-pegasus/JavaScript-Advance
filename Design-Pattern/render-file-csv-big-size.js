const fs = require("fs");

const filePath = "filedemo.csv"; // Đường dẫn file
const rows = 1_500_000; // 1.5 triệu dòng
const cols = 500; // 500 cột

let stream = fs.createWriteStream(filePath,  { flags: "a" }); //  { flags: "a" } để append vào file cũ
stream.write(Array.from({ length: cols }, (_, i) => `Column ${i + 1}`).join(",") + "\n"); // Tiêu đề

for (let i = 0; i < rows; i++) {
    let row = Array.from({ length: cols }, () => Math.floor(Math.random() * 1_000_000)).join(",");
    stream.write(row + "\n");

    // Log tiến trình (tùy chọn)
    if (i % 100_000 === 0) console.log(`Đã ghi ${i} dòng...`);
}

stream.end(() => console.log(`✅ File "${filePath}" đã được tạo xong!`)); 