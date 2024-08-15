import connectDB from './db';
import { app } from './app';

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server listening on port: ${process.env.PORT}`);
        });
    })
    .catch((err) => console.log('Failed to start the server', err));
