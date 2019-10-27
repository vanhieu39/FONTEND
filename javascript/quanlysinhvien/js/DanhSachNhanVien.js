function DanhSachNhanVien() {
  this.mangNhanVien = [];

  this.themNhanVien = function(nhanVien) {
    this.mangNhanVien.push(nhanVien);
  };

  this.layThongTinNhanVien = function(maNV) {
    return this.mangNhanVien.find(function(item) {
      return maNV === item.maNV;
    });
  };

  this.capNhatNhanVien = function(nhanVien) {
    this.mangNhanVien.map(function(item) {
      if (nhanVien.maNV === item.maNV) {
        item.tenNV = nhanVien.tenNV;
        item.email = nhanVien.email;
        item.pass = nhanVien.pass;
        item.date = nhanVien.date;
        item.chucVu = nhanVien.chucVu;
      }
    });
  };
}
DanhSachNhanVien.prototype.xoaNhanVien = function(maNV) {
  let viTri = this.mangNhanVien.findIndex(function(item) {
    return maNV === item.maNV;
  });
  this.mangNhanVien.splice(viTri, 1);
};
