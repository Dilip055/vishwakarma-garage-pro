import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(cors(
    {
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:4200",
    }
));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Vishwakarma Garage Pro API is running",
  });
});