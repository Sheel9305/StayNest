require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Folder name where your images are stored
const FOLDER_NAME = "staynest_DEV";

async function fetchImages() {
  try {
    const result = await cloudinary.search
      .expression(`folder:${FOLDER_NAME}`)
      .sort_by("public_id", "asc")
      .max_results(15) // Adjust based on your number of images
      .execute();

    const images = result.resources.map((img) => ({
      url: img.secure_url,
      filename: img.public_id,
    }));

    console.log(images);
  } catch (err) {
    console.error("Error fetching images:", err);
  }
}

fetchImages();
