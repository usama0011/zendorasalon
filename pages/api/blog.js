import dbConnect from "../../lib/dbConnect";
import Blog from "../../models/Blog";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const blogs = await Blog.find({});
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const {
          author,
          date,
          title,
          description,
          relatedCat,
          coverImage

        } = req.body;

        const newBlog = new Blog({
          author,
          date,
          title,
          description,
          relatedCat,
          coverImage
        });

        const savedBlog = await newBlog.save();
        res.status(201).json({ success: true, data: savedBlog });
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
