const express = require('express');
const router = express.Router();
const { 
    getClasses, 
    setClass, 
    copyClasses, 
    updateClass, 
    deleteClass 
} = require('./ClassController');

router.get('/classes', getClasses);
router.post('/', setClass);
router.post('/copy', copyClasses);
router.put('/', updateClass);
router.delete('/', deleteClass);

module.exports = router;