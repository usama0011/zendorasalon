import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method, query } = req;

  await dbConnect();

  switch (method) {
    case "DELETE":
      try {
        const userId = query.id; // Get the user ID from the query parameter
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
          return res
            .status(404)
            .json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, data: deletedUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
