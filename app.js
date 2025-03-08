document.addEventListener("DOMContentLoaded", function() {
    const loadingOverlay = document.getElementById("loading");
    loadingOverlay.style.display = "none"; // Ẩn overlay khi trang tải xong
});

// Hiệu ứng tuyết rơi sử dụng particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,  // Số lượng tuyết rơi
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"  // Màu tuyết
        },
        shape: {
            type: "circle",  // Hình dạng tuyết
            stroke: {
                width: 0,
                color: "#ffffff"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1
            }
        },
        line_linked: {
            enable: false  // Không có liên kết giữa các hạt tuyết
        },
        move: {
            enable: true,
            speed: 1,
            direction: "bottom",  // Hướng tuyết rơi xuống
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            }
        }
    },
    retina_detect: true
});

function checkCode() {
    const code = document.getElementById("codeInput").value;
    const correctCode = "REEDEMCODEXLK03W";
    const key = "BstoryIOS-day-q4ca5xwzdnr396uo";
    const errorNoti = document.getElementById("errorNoti");

    // Kiểm tra mã và hiển thị thông báo lỗi nếu không đúng
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
        noti.style.display = 'block';  // Hiển thị thông báo copy thành công
        setTimeout(() => {
            noti.style.display = 'none'; // Ẩn thông báo sau 2 giây
        }, 2000);
    });
}

function redirectToPage() {
    window.location.href = "https://oklink.cfd/key";
}

function redirectToContact() {
    window.location.href = "https://t.me/bstoryios";
}
