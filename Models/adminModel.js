import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';


const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    }
});

const admin = model('admins', adminSchema);

export default admin;
