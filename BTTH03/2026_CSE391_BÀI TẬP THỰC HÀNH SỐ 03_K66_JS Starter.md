## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
> - Em thấy dòng thông báo nào trong console? 
       >  "Hello from JavaScript!"

> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?
      > JavaScript đã được thực thi khi trang web tải xong, nó có thể thực hiện các lệnh, xử lý dữ liệu, tương tác với người dùng.
---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)

JavaScript có thể chạy trên trình duyệt (client-side) và trên server (server-side, ví dụ Node.js). 

> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML: HTML: Xây dựng cấu trúc nội dung trang web (các thẻ, đoạn văn, hình ảnh, nút bấm…)

> - CSS: CSS: Định dạng, trang trí, tạo kiểu dáng cho trang web (màu sắc, bố cục, font chữ…)

> - JavaScript: Xử lý logic, tương tác, điều khiển động (thay đổi nội dung, phản hồi sự kiện, tính toán…)

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

> Câu hỏi:
> - Kết quả `typeof age` là number
  
> - Kết quả `typeof name` là string
> - Kết quả `typeof isStudent` là boolean
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là:  Kiểu dữ liệu số, dùng để lưu các giá trị số học (vd: 1, 2.5, -10)
>   - `string` là: Kiểu dữ liệu chuỗi, dùng để lưu văn bản (vd: "Hello", "An").
>   - `boolean` là: Kiểu dữ liệu logic, chỉ nhận giá trị true/false.

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
> - Dòng log hiển thị gì sau khi em sửa thông tin : Hiển thị thông báo với tên và tuổi của chính em, ví dụ: "Xin chào, mình là Trinh, năm nay mình 21 tuổi." 

> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?

- Trình duyệt sẽ báo lỗi cú pháp (SyntaxError) trên console, chỉ rõ vị trí lỗi để sửa.
---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?

- Có thể kiểm tra giá trị biến, thử các lệnh JS trực tiếp, xem lỗi và kết quả ngay lập tức.

> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?

- Ví dụ quên dấu ; hoặc viết sai tên biến, đã đọc thông báo lỗi trên console và sửa lại, hoặc hỏi bạn/tìm Google.
---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: Giỏi
> b) Nếu `score = 6`, em dự đoán console sẽ in: Trung bình

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: Giỏi
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: Trung bình

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`?
- Khi điểm số (score) lớn hơn hoặc bằng 8.
> - Khi nào chương trình in `"Yếu"`?
- Khi điểm số nhỏ hơn 5
> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):

Chương trình kiểm tra từng điều kiện từ trên xuống: Nếu đủ điểm "Giỏi" thì in "Giỏi", nếu không thì kiểm tra tiếp "Khá", rồi "Trung bình", cuối cùng nếu không đủ các điều kiện trên thì in "Yếu".
........................................................................

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: xepLoai
>   - Tham số (parameters): avg
>   - Thân hàm (body): {}
>   - Giá trị trả về (return): Giỏi, Khá, Trung bình, Yếu
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì?
 - Giúp tái sử dụng mã, không phải viết lại nhiều lần.
 - Dễ bảo trì, sửa đổi.
 - Mã ngắn gọn, dễ đọc
---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?
-  Khi nào dùng else if, khi nào dùng return, cách truyền tham số vào hàm.
> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?
- Thử nhiều lần trên console, hỏi bạn, xem lại ví dụ, tra Google, đọc lại lý thuyết.
---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc & giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
>   - Trả lời: Tìm và lấy phần tử HTML có id là "status" để JS có thể thao tác với nó (thay đổi nội dung, kiểu dáng, ...).
> - Sự kiện `"click"` xảy ra khi nào?
>   - Trả lời: Khi người dùng nhấn chuột vào một nút hoặc phần tử trên trang web.
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?
>   - Trả lời: Nội dung của thẻ `<p id="status">` sẽ đổi thành "Xin chào! Đây là nội dung được thay đổi bằng JavaScript."

---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");
btnRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.
>   - Trả lời: Có, ví dụ: `document.body.style.backgroundColor = "lightblue";`
> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.
>   - Trả lời: Đổi font chữ: `document.body.style.fontFamily = "Arial";` hoặc đổi kích thước chữ: `document.body.style.fontSize = "20px";`

---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác gì so với `"click"`?
>   - Trả lời: `"input"` xảy ra mỗi khi nội dung ô nhập thay đổi (gõ, xoá, dán…), còn `"click"` chỉ xảy ra khi nhấn chuột.
> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?
>   - Trả lời: "Xin chào, !" (không có tên phía sau dấu phẩy).

---

#### Bước 4: Liên hệ khái niệm DOM

> Em hãy:
> - Tự mô tả DOM bằng lời của em:
>   - DOM là cách trình duyệt biến trang web thành các đối tượng mà JS có thể truy cập, thay đổi nội dung, kiểu dáng, sự kiện… giống như một cây gia đình các phần tử.
> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).
>   - Trả lời: `statusEl.textContent = "Xin chào!";` hoặc `document.body.style.backgroundColor = "red";`

---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:
1. Khi vừa tải trang (chưa tương tác).
2. Sau khi nhấn “Chào”.
3. Sau khi đổi nền sang màu đỏ.
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?
>   - Trả lời: Đều lắng nghe sự kiện click trên nút có id "btnHello" và hiển thị thông báo khi nhấn.
> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
>   - Trả lời: JS thuần dùng `document.getElementById` để lấy phần tử và `addEventListener` để gắn sự kiện; jQuery dùng cú pháp ngắn gọn `$("#id")` để lấy phần tử và `.on` để gắn sự kiện.
> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. jQuery giúp thao tác DOM, sự kiện, hiệu ứng dễ dàng và ngắn gọn hơn JS thuần.
>   2. jQuery hỗ trợ xử lý tương thích trình duyệt, AJAX, và mở rộng nhiều plugin tiện ích.

---

### 6.2. Tự đánh giá & định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
>    - Trả lời: Em tò mò nhất về cách JavaScript thao tác DOM để thay đổi nội dung và hiệu ứng động trên trang web.
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?
>    - Trả lời: Em muốn thử làm bộ đếm số lần nhấn nút và chức năng đổi theme sáng/tối cho trang web.
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến & kiểu dữ liệu: [ ] Chưa hiểu  [ ] Tạm ổn  [x] Khá rõ
>    - If/else & hàm:       [ ] Chưa hiểu  [x] Tạm ổn  [ ] Khá rõ
>    - DOM & sự kiện:       [ ] Chưa hiểu  [x] Tạm ổn  [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

