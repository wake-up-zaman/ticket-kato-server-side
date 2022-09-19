const Reviews =require("../models/model_reviews.js");


 const createReviews = async (req, res, next) => {
    const newReview = new Reviews(req.body)
    console.log(newReview);

    try {
        const savedReview = await newReview.save()
        res.status(200).json(savedReview)
    } catch (err) {
        next(err);
    }
}

 const getReviews = async (req, res, next) => {
    try {
        const reviews = await Reviews.findById(
            req.params.id
        );
        res.status(200).json(reviews);
    }
    catch (err) {
        next(err);
    }
}


 const getAllReviews = async (req, res, next) => {
        // const query = {};

    try {
        //   const cursor = reviewsCollection.find(query);
        //   const reviews = (await cursor.toArray()).reverse();
        const reviews = await Reviews.find();
        res.status(200).json(reviews);
    }
    catch (err) {
        next(err);
    }
}
module.exports =  {
    createReviews,
    getReviews,
    getAllReviews
};