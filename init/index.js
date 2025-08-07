const mongoose = require("mongoose");
const Listing = require("../models/listing");
const Review = require("../models/review");
const initData = require("./data");

// const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("Connection error:", err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDb = async () => {
  await Listing.deleteMany({});
  await Review.deleteMany({});

  for (let listingData of initData.data) {
    const { reviews, ...listingFields } = listingData;

    // Create and save each review
    const reviewIds = [];
    for (let review of reviews) {
      const newReview = new Review(review);
      await newReview.save();
      reviewIds.push(newReview._id);
    }

    // Create the listing with reference to saved reviews
    const newListing = new Listing({ ...listingFields, reviews: reviewIds });
    await newListing.save();
  }

  console.log("Database seeded with listings and reviews");
};

initDb();
