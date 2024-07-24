import mongoose from 'mongoose';

export const  connectDB=async()=>{
    await mongoose.connect('mongodb+srv://hsripadarao1108:pipinstall@cluster0.nq7mvs2.mongodb.net/food_oredering').then(()=>console.log("DB Connected"));
}