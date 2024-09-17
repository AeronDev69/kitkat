import { Router } from "express";
import updateUserValidator from "../util/updateUserValidator";
import { UserData } from "../models";

const router = Router();

// TODO changes password and username feature

router.patch("/api/user_data/:id/rated_movies", updateUserValidator, async (req, res) =>{
    const userData = await UserData.findOne(({user_id: req.params.id}));
    const movieId = req.body.movieId;
    const title = req.body.title;
    const thumbnail = req.body.thumbnail;
    const rated = req.body.rated;
    if(!userData) res.status(404).send('user not found!');
    else {
        userData.rated_movies.push({movie: {id: movieId, title: title, thumbnail: thumbnail}, rated: rated})
        userData.save();
        res.status(200).send("successfully updated data")
    }
})

router.patch("/api/user_data/:id/watch_history", updateUserValidator, async (req, res) =>{
    const userData = await UserData.findOne(({user_id: req.params.id}));
    const movie = req.body.movie;
    const lastMovieWatched = req.body.lastMovieWatched;
    if(!userData) res.status(404).send('user not found!');
    else {
        userData.watch_history.last_watched = lastMovieWatched;
        userData.watch_later.push(movie)
        userData.save();
        res.status(200).send("successfully updated data")
    }
})

router.patch("/api/user_data/:id/favorites", updateUserValidator, async (req, res) =>{
    const userData = await UserData.findOne(({user_id: req.params.id}));
    const movie = req.body.movie;
    if(!userData) res.status(404).send('user not found!');
    else {
        userData.favorites.push(movie)
        userData.save();
        res.status(200).send("successfully updated data")
    }
})

router.patch("/api/user_data/:id/watch_later", updateUserValidator, async (req, res) =>{
    const userData = await UserData.findOne(({user_id: req.params.id}));
    const movie = req.body.movie;
    if(!userData) res.status(404).send('user not found!');
    else {
        userData.watch_later.push(movie)
        userData.save();
        res.status(200).send("successfully updated data")
    }
})
export default router;