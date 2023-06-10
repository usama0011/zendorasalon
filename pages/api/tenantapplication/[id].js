import dbConnect from "../../../lib/dbConnect"
import TenantApplication from "../../../models/TenantApplication"

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { id } = req.query;
        const tenantApplication = await TenantApplication.findById(id);

        if (!tenantApplication) {
          return res.status(404).json({ success: false, message: "Tenant application not found" });
        }

        res.status(200).json({ success: true, data: tenantApplication });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
