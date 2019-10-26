function getEle(id) {
  return document.getElementById(id);
}
document.getElementById("btnHienThiThongTin").onclick = function() {
  let maSV = getEle("textMaSV").value;
  let tenSV = getEle("txtTenSV").value;
  let loaiSV = getEle("loaiSV").value;
  let _diemToan = getEle("txtDiemToan").value;
  let _diemVan = getEle("txtDiemVan").value;

  let sinhVien = {
    maSinhVien: maSV,
    tenSinhVien: tenSV,
    loaiSinhVien: loaiSV,
    diemToan: _diemToan,
    diemVan: _diemVan,
    diemTB: 0,
    tinhDTB: function() {
      let dtb = (parseInt(this.diemToan) + parseInt(this.diemVan)) / 2;
      this.diemTB = dtb;
      return dtb;
    },
    xepLoai: function() {
      if (this.diemTB > 8.0) {
        return "Giỏi";
      } else if (this.diemTB > 5.0 && this.diemTB < 8.0) {
        return "Trung Bình";
      } else if (this.diemTB < 5.0) {
        return "Yếu";
      }
    }
  };
  getEle("spanTenSV").innerHTML = sinhVien.tenSinhVien;
  getEle("spanMaSV").innerHTML = sinhVien.maSinhVien;
  getEle("spanLoaiSV").innerHTML = sinhVien.loaiSinhVien;
  getEle("spanDTB").innerHTML = sinhVien.tinhDTB();
  getEle("spanXepLoai").innerHTML = sinhVien.xepLoai();
};
