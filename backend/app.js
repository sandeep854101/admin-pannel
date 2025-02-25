import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4001;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json()); // Parse JSON request bodies

// Root Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// API Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
