import React, {useEffect, useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {createFormRequest, formByIDRequest, updateFormRequest} from "../apiRequest/apiRequest.js";
import {useNavigate} from "react-router-dom";
const SaveForm = () => {

    let navigate=useNavigate();
    let [FormValue,SetFormValue]=useState({
        firstName:"", 
        lastName:"", 
        gender:"", 
        dateOfBirth:"", 
        nationality:"", 
        address:"",
        email:"", 
        phone:"", 
        admissionDate:"",
        courses:""
        })
    let [UpdateID,SetUpdateID]=useState(null);


    useEffect(() => {
        (async ()=>{
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            SetUpdateID(id)
            if(id!==null){
               await FillForm(id)
            }
        })()
    }, []);
    
    const FillForm =async (id) => {
       let res= await formByIDRequest(id)
       SetFormValue({
        firstName:res['firstName'], 
        lastName:res['lastName'], 
        gender:res['gender'], 
        dateOfBirth:res['dateOfBirth'], 
        nationality:res['nationality'], 
        address:res['address'],
        email:res['email'], 
        phone:res['phone'], 
        admissionDate:res['admissionDate'],
        courses:res['courses']
       })
    }


    const InputOnChange = (name,value) => {
        SetFormValue((FormValue)=>({
            ...FormValue,
            [name]:value
        }))
    }

    const Save = async () => {
        if(FormValue.firstName.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.lastName.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.gender.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.dateOfBirth.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.nationality.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.address.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.email.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.phone.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.admissionDate.length===0){
            toast.error("Please fill all fields!")
        }
        else if(FormValue.courses.length===0){
            toast.error("Please fill all fields!")
        }
        else{
            if(UpdateID==null){
                let res=await createFormRequest(FormValue);
                if(res){
                    toast.success("Create Request Completed");
                    navigate("/");
                }
                else{
                    toast.error("Create Request Fail");
                }
            }
            else{
                let res=await updateFormRequest(FormValue,UpdateID);
                if(res){
                    toast.success("Update Request Completed");
                    navigate("/");
                }
                else{
                    toast.error("Update Request Fail");
                }
            }


        }

    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label className="form-label">Your first name</label>
                    <input value={FormValue.firstName} onChange={(e)=>InputOnChange('firstName',e.target.value)} type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your last name</label>
                    <input value={FormValue.lastName} onChange={(e)=>InputOnChange('lastName',e.target.value)} type="text" className="form-control" placeholder="Last name"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your gender</label>
                    <input value={FormValue.gender} onChange={(e)=>InputOnChange('gender',e.target.value)} type="text" className="form-control" placeholder="Gender"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your date of birth</label>
                    <input value={FormValue.dateOfBirth} onChange={(e)=>InputOnChange('dateOfBirth',e.target.value)}  type="text" className="form-control" placeholder=""/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your nationality</label>
                    <input value={FormValue.nationality} onChange={(e)=>InputOnChange('nationality',e.target.value)}  type="text" className="form-control" placeholder="Bangladesh"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your address</label>
                    <input value={FormValue.address} onChange={(e)=>InputOnChange('address',e.target.value)}  type="text" className="form-control" placeholder=""/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your e-mail</label>
                    <input value={FormValue.email} onChange={(e)=>InputOnChange('email',e.target.value)}  type="text" className="form-control" placeholder=""/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your phone</label>
                    <input value={FormValue.phone} onChange={(e)=>InputOnChange('phone',e.target.value)}  type="text" className="form-control" placeholder=""/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your admission date</label>
                    <input value={FormValue.admissionDate} onChange={(e)=>InputOnChange('admissionDate',e.target.value)}  type="text" className="form-control" placeholder=""/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your courses</label>
                    <input value={FormValue.courses} onChange={(e)=>InputOnChange('courses',e.target.value)}  type="text" className="form-control" placeholder=""/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Save Change</label><br/>
                    <button onClick={Save} className="btn w-100 btn-success">Submit</button>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default SaveForm;