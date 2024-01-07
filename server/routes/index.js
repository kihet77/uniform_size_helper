const express = require('express');
const router = express();
const controllerAdminLogin = require("../controller/admin/adminLogin")
 

router.get('/', controllerAdminLogin.login )
 
module.exports = router;