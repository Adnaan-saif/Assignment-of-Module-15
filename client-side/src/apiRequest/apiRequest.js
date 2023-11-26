import axios from "axios";

export async function listFormRequest(){
    try {
        let res=await fetch("http://localhost:5010/api/v1/list-form");
        let JSONData=await res.json();
        return JSONData['data'];
    }catch (e) {
        return []
    }
}

export async function formByIDRequest(id){
    try {
        let res=await fetch("http://localhost:5010/api/v1/form-by-id/"+id);
        let JSONData=await res.json();
        return JSONData['data'][0];
    }catch (e) {
        return []
    }
}

export async function createFormRequest(postBody){
    try {
        let res=await axios.post("http://localhost:5010/api/v1/create-form",postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}



export async function updateFormRequest(postBody,id){
    try {
        let res=await axios.post("http://localhost:5010/api/v1/update-form/"+id,postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}



export async function deleteFormRequest(id){
    try {
        let res=await fetch("http://localhost:5010/api/v1/delete-form/"+id);
        let JSONData=await res.json();
        if(JSONData['status']==="success"){
            return  true;
        }else{
            return  false;
        }
    }catch (e) {
        return  false;
    }
}
