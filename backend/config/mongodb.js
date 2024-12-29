import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbUri = process.env.MONGODB_URI.endsWith('/')
            ? `${process.env.MONGODB_URI}aurapixel`
            : `${process.env.MONGODB_URI}/aurapixel`;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose is connected!!!');
        });

        await mongoose.connect(dbUri);

        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection error:', error.message);
    }
};

export default connectDB;
