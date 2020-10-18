import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const initDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DB Conectada");
  } catch (error) {
    console.error(error);
    res.status(500).json("Algó salió mal con la DB");
  }
};

export default initDB;
