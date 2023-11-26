const FormModel=require('../models/FormModel');

exports.createForm=async(req, res)=> {
    let reqBody=req.body;
    try{
        let result=await FormModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

exports.deleteForm=async(req, res)=> {
    let id=req.params.id;
    let query={_id:id};
    try{
        let result=await FormModel.deleteOne(query);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

exports.updateForm=async(req, res)=> {
    let id=req.params.id;
    let reqBody=req.body;
    let query={_id:id};
    try{
        let result=await FormModel.updateOne(query,reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

exports.listForm=async(req, res)=> {
    try{
        let result=await FormModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


exports.formByID=async(req, res)=> {
    try{
        let id=req.params.id;
        let query={_id:id};
        let result=await FormModel.find(query);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}
