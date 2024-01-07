const express = require('express');
const router = express.Router();
const controllerAdminLogin = require("../controller/admin/Login.js")
const controllerAdmin = require("../controller/admin/Main.js")
const controllerAdminSchool = require("../controller/admin/SchoolDtail.js")
 

router.get('/', controllerAdminLogin.admin)
router.post('/login', controllerAdminLogin.login)
router.get('/main', controllerAdmin.main)
router.get('/sidebar',controllerAdmin.sidebar)
router.get('/:school_code',controllerAdminSchool.main)
router.get('/:school_code/store',controllerAdminSchool.storeItem)


module.exports = router;