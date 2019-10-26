function SinhVien(
  _maSV,
  _tenSV,
  _loaiSV,
  _diemToan,
  _diemLy,
  _diemHoa,
  _diemRenLuyen
) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.diemRenLuyen = _diemRenLuyen;
  this.diemTB = 0;

  this.tinhDiemTB = function() {
    let dtb =
      (this.parseInt(this.diemToan) +
        this.parseInt(this.diemLy) +
        this.parseInt(this.diemHoa)) /
      3;
    this.diemTB = dtb;
    return dtb;
  };
  this.diemTB = this.tinhDiemTB;
}
