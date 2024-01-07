exports.admin = (req, res) => {
  res.send("Main.js");
};

exports.login = (req, res) => {
  const userData = {
    adminId: "2c0002",
    adminPw: "tmakxm3004",
  };
  iddata = req.body.adminId;
  pwdata = req.body.adminPw;
  if (iddata == userData.adminId && pwdata == userData.adminPw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
    res.send(data);
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
    res.send(data);
  }
};
