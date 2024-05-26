// Function handleTabSwitch

const tabButtons = document.querySelectorAll(".nav-link");
const handleTabSwitch = (event) => {
  tabButtons.forEach((nav) => {
    // Đặt lại icon mặc định
    let icon = nav.querySelector("span");
    icon.innerHTML = "📒";
  });
  // Đặt icon active
  event.target.querySelector("span").innerHTML = "📖";
};

tabButtons.forEach((nav) => {
  nav.onclick = handleTabSwitch;
});

// Đảm bảo tab đầu tiên được active khi tải trang
document.querySelector(".nav-link.active").click();

// Bài 1

document.getElementById("tienLuong").onclick = () => {
  let luongMotNgay = document.getElementById("luongMotNgay").value * 1;
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tienLuong = 0;

  if (luongMotNgay <= 0 || soNgayLam <= 0) {
    alert("Giá trị nhập vào không hợp lệ! Vui lòng nhập lại");
  } else {
    tienLuong = luongMotNgay * soNgayLam;
  }

  document.querySelector(".bai1").innerHTML = tienLuong.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

// Bài 2

document.getElementById("tinhTrungBinh").onclick = () => {
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;
  let soThuBa = document.getElementById("soThuBa").value * 1;
  let soThuTu = document.getElementById("soThuTu").value * 1;
  let soThuNam = document.getElementById("soThuNam").value * 1;
  let soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

  document.querySelector(".bai2").innerHTML = soTrungBinh;
};

// Bài 3

document.getElementById("quyDoiTien").onclick = () => {
  let tienUSD = document.getElementById("tienUSD").value * 1;
  let tienVND = 0;

  if (tienUSD <= 0) {
    alert("Giá trị tiền USD nhập vào không hợp lệ! Vui lòng nhập lại");
  } else {
    tienVND = tienUSD * 23500;
    document.querySelector(".bai3").innerHTML = tienVND.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  }
};

// Bài 4

document.getElementById("tinhDienTichChuVi").onclick = () => {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;

  if (chieuDai <= 0 || chieuRong <= 0) {
    alert("Giá trị nhập vào không hợp lệ! Vui lòng nhập lại");
  } else if (chieuDai < chieuRong) {
    alert("Giá trị chiều dài nhỏ hơn chiều rộng! Vui lòng nhập lại");
  } else {
    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2;
    document.querySelector(
      ".bai4"
    ).innerHTML = `Diện tích: ${dienTich}; Chu vi: ${chuVi}`;
  }
};

// Bài 5

document.getElementById("tinhTong").onclick = () => {
  let soHaiChuSo = document.getElementById("soHaiChuSo").value * 1;

  if (soHaiChuSo >= 10 && soHaiChuSo <= 99) {
    let chuSoHangChuc = Math.floor(soHaiChuSo / 10);
    let chuSoHangDonVi = soHaiChuSo % 10;
    let tongHaiChuSo = chuSoHangChuc + chuSoHangDonVi;

    document.querySelector(".bai5").innerHTML = tongHaiChuSo;
  } else {
    alert("Vui lòng nhập lại số có 2 chữ số");
  }
};
