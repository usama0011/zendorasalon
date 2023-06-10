import dbConnect from "../../../lib/dbConnect";
import TenantApplication from "../../../models/TenantApplication"

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const tenantApplications = await TenantApplication.find({});
        res.status(200).json({ success: true, data: tenantApplications });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const {
          name,
          address,
          email,
          telephone,
          receiveTextMessages,
          services,
          industryExperience,
          licenseInfo,
          leaseTiming,
          hearAboutUs,
        } = req.body;

        const tenantApplication = await TenantApplication.create({
          name,
          address,
          email,
          telephone,
          receiveTextMessages,
          services,
          industryExperience,
          licenseInfo,
          leaseTiming,
          hearAboutUs,
        });

        res.status(201).json({ success: true, data: tenantApplication });
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
