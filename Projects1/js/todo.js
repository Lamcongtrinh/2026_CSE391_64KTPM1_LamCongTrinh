// Kịch bản:
// - Người dùng nhập tên công việc vào ô input
// - Nhấn nút "Thêm" → thêm công việc mới vào danh sách (dạng <li>)
// - Mỗi mục công việc có nút "Xoá" để xoá mục đó khỏi danh sách
// - Cập nhật số lượng công việc sau mỗi lần thêm/xoá
// - Nếu ô input trống → không thêm (alert thông báo)

// Bước 1: Truy xuất các phần tử DOM cần tác động
const inputTaskName = document.getElementById("inputTaskName");
const btnAddTask = document.getElementById("btnAddTask");
const taskListContainer = document.getElementById("taskList");
const taskCountInfo = document.getElementById("taskCountInfo");

// Bước 2: Gắn sự kiện click cho nút "Thêm"
btnAddTask.addEventListener("click", function () {

    // Bước 2.1: Lấy giá trị từ ô input và loại bỏ khoảng trắng thừa
    const taskName = inputTaskName.value.trim();

    // Bước 2.2: Kiểm tra nếu ô input trống thì hiển thị thông báo
    if (taskName === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    // Bước 2.3: Tạo phần tử <li> mới chứa tên công việc
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("todo-item");

    // Bước 2.4: Tạo <span> chứa tên công việc
    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    // Bước 2.5: Tạo nút "Xoá" cho mục công việc
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Xoá";
    btnDelete.classList.add("btn-delete");

    // Bước 2.6: Gắn sự kiện click cho nút "Xoá"
    btnDelete.addEventListener("click", function () {
        taskListContainer.removeChild(newTaskItem);
        updateTaskCount();
    });

    // Bước 2.7: Ghép các phần tử lại và thêm vào danh sách
    newTaskItem.appendChild(taskText);
    newTaskItem.appendChild(btnDelete);
    taskListContainer.appendChild(newTaskItem);

    // Bước 2.8: Xoá giá trị ô input và cập nhật số lượng
    inputTaskName.value = "";
    updateTaskCount();
});

// Bước 3: Hàm cập nhật số lượng công việc
function updateTaskCount() {
    const total = taskListContainer.children.length;
    taskCountInfo.textContent = "Tổng: " + total + " công việc";
}