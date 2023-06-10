import dbConnect from "@/lib/dbConnect";
import TenantApplication from "@/models/TenantApplication";
dbConnect();
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Fetch the number of tenant applications
      const applicationCount = await TenantApplication.countDocuments();

      res.status(200).json({ applicationCount });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
