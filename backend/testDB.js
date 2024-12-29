import mongoose from "mongoose";
import 'dotenv/config';

const testMongoDB = async () => {
    try {
        const URI = `${process.env.MONGODB_URI}/aurapixel`; // Ensure the database name is included
        console.log("Connecting to:", URI);

        await mongoose.connect(URI); // No need for deprecated options
        console.log("MongoDB connection successful!");
        process.exit(0); // Exit after successful connection
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit with error
    }
};

testMongoDB();
