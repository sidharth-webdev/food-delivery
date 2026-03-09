import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Sidharth:food123@cluster0.rqirnfk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}



//mongodb+srv://Sidharth:<db_password>@cluster0.rqirnfk.mongodb.net/?appName=Cluster0
