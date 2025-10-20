import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await cloudinary.search
      .expression('resource_type:image')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    const images = result.resources.map((img: any) => ({
      src: img.secure_url,
      alt: img.public_id,
      width: img.width,
      height: img.height,
    }));

    res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images', details: error });
  }
}