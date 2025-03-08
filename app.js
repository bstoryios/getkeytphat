document.addEventListener("DOMContentLoaded", function () {
    const loadingOverlay = document.getElementById("loading");
    loadingOverlay.style.display = "none"; // Ẩn overlay khi trang tải xong

    const noti = document.getElementById("welcomeNoti");

    // Hiển thị thông báo sau 0.5s và mờ dần sau 5s
    setTimeout(() => {
        noti.classList.add("show");

        // Sau 5s, ẩn thông báo bằng cách mờ dần và di chuyển ra ngoài
        setTimeout(() => {
            noti.classList.add("hide");
        }, 5000); // 5 giây sau khi thông báo hiển thị
    }, 500); // Hiển thị thông báo sau 0.5 giây khi trang tải xong
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄';

    const size = Math.random() * 8 + 8; // Giảm kích thước tuyết (8px - 16px)
    const leftPos = Math.random() * window.innerWidth;
    const duration = Math.random() * 2 + 2; // Giảm thời gian rơi (2s - 4s)

    snowflake.style.left = `${leftPos}px`;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;

    const randomX = (Math.random() * 2 - 1) * 30; // Giảm di chuyển ngang
    snowflake.style.setProperty('--random-x', `${randomX}px`);

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Tạo tuyết mỗi 100ms
setInterval(createSnowflake, 200);

function checkCode() {
    const code = document.getElementById("codeInput").value;
    const correctCode = "REEDEMCODEXLK03W";
    const key = "BstoryIOS-day-q4ca5xwzdnr396uo";
    const errorNoti = document.getElementById("errorNoti");

    if (code === correctCode) {
        document.getElementById("keyValue").innerText = key;
        const keyElement = document.getElementById("key");
        keyElement.classList.remove("hidden");
        keyElement.classList.add("fade-in");
        document.getElementById("getKey").classList.add("hidden");
    } else {
        errorNoti.classList.add("show");
        setTimeout(() => {
            errorNoti.classList.add("hide");
            setTimeout(() => {
                errorNoti.classList.remove("show", "hide");
            }, 600);
        }, 2000);
    }
}

function copyKey() {
    const keyText = document.getElementById("keyValue").innerText;
    if (!keyText) return;

    navigator.clipboard.writeText(keyText).then(() => {
        const noti = document.getElementById("copyNoti");

        // Hiển thị thông báo
        noti.classList.remove("hide"); // Đảm bảo lớp "hide" được xóa trước khi hiển thị
        noti.classList.add("show");

        // Ẩn thông báo sau 2 giây với hiệu ứng tan biến
        setTimeout(() => {
            noti.classList.remove("show");
            noti.classList.add("hide");

            // Xóa lớp "hide" sau khi animation kết thúc
            setTimeout(() => {
                noti.classList.remove("hide");
            }, 800); // Thời gian animation tan biến
        }, 2000); // Thời gian hiển thị thông báo
    });
}

function redirectToPage() {
    window.location.href = "https://oklink.cfd/key";
}

function redirectToContact() {
    window.location.href = "https://t.me/bstoryios";
}