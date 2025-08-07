const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {validateReview, isLoggedIin, isReviewAuthor} = require("../middlewares")
const reviewController = require("../controllers/reviews");

//Reviews
router.post(
  "/",
  isLoggedIin,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//delete review route
router.delete(
  "/:reviewId",
  isLoggedIin,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
