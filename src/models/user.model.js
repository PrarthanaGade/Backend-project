import mongoose from "mongoose";

const Userschema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
        trim: true,
        
    }
})

export const User = mongoose.model("User", Userschema)