var danhSachSinhVien = [];

layDuLieu();

function layDuLieu(){
  danhSachSinhVien = getLocalstorage();
  taoBang();
}

function getEle(id) {
  return document.getElementById(id);
}

getEle("btnThemSV").onclick = function() {
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var loaiSV = getEle("loaiSV").value;
  var diemToan = getEle("txtDiemToan").value;
  var diemLy = getEle("txtDiemLy").value;
  var diemHoa = getEle("txtDiemHoa").value;
  var diemRenLuyen = getEle("txtDiemRenLuyen").value;

  var sinhVien = new SinhVien(
    maSV,
    tenSV,
    loaiSV,
    diemToan,
    diemLy,
    diemHoa,
    diemRenLuyen
  );

  danhSachSinhVien.push(sinhVien);

  //Lưu dữ liệu xuống localstorage, phải chuyển qua chuỗi
  
  localStorage.setItem("DanhSachSinhVien",JSON.stringify(danhSachSinhVien));
  taoBang();
};

function getLocalstorage(){
  var data = [];
  if(localStorage.getItem("DanhSachSinhVien") != null){
    data = JSON.parse(localStorage.getItem("DanhSachSinhVien"));
    return data;
  }
  return data;
}

function taoBang() {
	var tblBody = getEle("tbodySinhVien");
	tblBody.innerHTML = "";
	for (var i = 0; i < danhSachSinhVien.length; i++) {
		var tagTR = document.createElement("tr");

		var tgTDMa = document.createElement("td");
		var tgTDTen = document.createElement("td");
		var tgTDLoai = document.createElement("td");
		var tgTDDTB = document.createElement("td");
		var tgTDDRL = document.createElement("td");

		tgTDMa.innerHTML = danhSachSinhVien[i].maSV;
		tgTDTen.innerHTML = danhSachSinhVien[i].tenSV;
		tgTDLoai.innerHTML = danhSachSinhVien[i].loaiSV;
		tgTDDTB.innerHTML = danhSachSinhVien[i].diemTB;
		tgTDDRL.innerHTML = danhSachSinhVien[i].diemRenLuyen;

		tagTR.appendChild(tgTDMa);
		tagTR.appendChild(tgTDTen);
		tagTR.appendChild(tgTDLoai);
		tagTR.appendChild(tgTDDTB);
		tagTR.appendChild(tgTDDRL);

		tblBody.appendChild(tagTR);
  }
}
