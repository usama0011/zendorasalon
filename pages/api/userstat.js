import User from "../../models/User"; // Update the path to your User model
import dbConnect from "../../lib/dbConnect"; // Update the path to your database connection file

dbConnect(); // Establish the database connection

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const userCount = await User.countDocuments({});
      res.status(200).json({ userCount });
    } catch (error) {
      res.status(500).json({ error: "Unable to retrieve user count" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
