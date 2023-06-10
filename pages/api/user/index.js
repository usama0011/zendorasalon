import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import validator from "validator";
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { fullname, username, email, password } = req.body;

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res
            .status(400)
            .json({ success: false, message: "User already exists" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid email format" });
        }

        // Validate password strength
        if (!validator.isStrongPassword(password)) {
          return res
            .status(400)
            .json({
              success: false,
              message:
                "Weak password. It should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.",
            });
        }

        const user = await User.create({ fullname, username, email, password });
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: "User creation failed" });
      }
      break;
  }
}
