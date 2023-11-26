const express=require('express');
const Form=require('../controller/FormController');
const router=express.Router();

router.post("/create-task",Form.createForm);
router.get("/delete-task/:id",Form.deleteForm);
router.post("/update-task/:id",Form.updateForm);
router.get("/list-task",Form.listForm);
router.get("/task-by-id/:id",Form.formByID);

module.exports=router;