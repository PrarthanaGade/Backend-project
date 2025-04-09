import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/APIerror.js"

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    });
});

//Algorithm 
//get users details from frontend
//validation - not empty
//check if user already exist: username, email
//check for images, check for avatar,
//upload them to cloudinary, avatar
//create  user object- create entry in db
//remove password and refresh token field from response
//check for user creation
//return response

const {fullname, email,username,password} = req.body
console.log("email"= email);

if (fullname === "") {
    throw new ApiError(400, "full name is required")
}
export default registerUser;
