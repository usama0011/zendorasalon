import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {
          // Check if the provided password matches the user's password
          if (user.password === password) {
            // Authentication success
            res.status(200).json({ success: true, data: user });
          } else {
            // Authentication failed - wrong password
            res
              .status(401)
              .json({ success: false, message: "Wrong email or password" });
          }
        } else {
          // Authentication failed - user not found
          res
            .status(401)
            .json({ success: false, message: "Wrong email or password" });
        }
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Invalid request method" });
      break;
  }
}
