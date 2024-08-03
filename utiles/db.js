
import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true});
        console.log("Database is Connected");
    } catch (error) {
        console.log(error.message);
    }
};
