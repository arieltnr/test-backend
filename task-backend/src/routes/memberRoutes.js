const express = require('express');
const memberController = require('../controllers/memberController');
const router = express.Router();

router.get('/', memberController.getAllMembers);
router.get('/:code', memberController.getMemberById);
router.post('/', memberController.createMember);
router.put('/:code', memberController.updateMember);

module.exports = router;
