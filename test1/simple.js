// Mô tả bài toán 
// Khi nhấp chọn click me thì thêm đoạn văn bản mới vào trong

// Bước 1 : lấy phần tử button và p 
const button = document.querySelector('button');
const parent  = document.querySelector('# parent');

// Bước 2 : thêm sự kiện click vào button
button.addEventListener('click', hamgido() )


    // Bước 3 : tạo phần tử p mới
    function hamgido() {
        let doanvanBanMoi = document.createElement('p');
        doanvanBanMoi.textContent = 'Đây là đoạn văn bản mới';
        doanvanBanMoi.style.color = 'red';
        parent.appendChild(doanvanBanMoi);
    }

