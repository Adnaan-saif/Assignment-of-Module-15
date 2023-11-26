const mongoose=require('mongoose')
const FormSchema=mongoose.Schema(
    {
        firstName:{type:String,required: true,},
        lastName:{type:String,required: true,},
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Do not disclose'],
            required: true,
          },
        dateOfBirth:{type:Date,required: true,},
        nationality:{type:String,required: true,},
        address:{type:String,required: true,},
        email:{type:String,required: true,}, 
        phone:{type:String,required: true,}, 
        admissionDate:{type:Date,required: true,},
        courses:{type:String,required: true,}
    },
    {timestamps:true,versionKey:false}
)
const FormModel=mongoose.model('mfdc1',FormSchema);
module.exports=FormModel;