const express=require('express');
const Form=require('../controller/FormController');
const router=express.Router();

router.post("/create-form",Form.createForm);
router.get("/delete-form/:id",Form.deleteForm);
router.post("/update-form/:id",Form.updateForm);
router.get("/list-form",Form.listForm);
router.get("/form-by-id/:id",Form.formByID);

module.exports=router;