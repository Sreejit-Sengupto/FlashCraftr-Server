import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}${DB_NAME}`,
        );
        console.log('\n MongoDb connected successfully');
        console.log(`\n DB host: ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.log('Failed to connect to MongoDb', error);
        process.exit(1);
    }
};

export default connectDB;
