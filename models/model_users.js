import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
{
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,

    },
    education: {
        type: String,

    },
    img: {
        type: String,

    },
    name: {
        type: String,

    },
    phone: {
        type: String,

    },
    role:{
        type:String
    }
}

);

export default mongoose.model("User", UserSchema)