import { Router } from "express";
import passport from "passport";
import omdbUrlHelper from "../util/omdbUrlHelper"

const router = Router(); 

router.get("/api/movies/search", passport.authenticate("local"), async (req, res) =>{
    const query = req.query.q as string;
    try {
        const dataResponse = await fetch(omdbUrlHelper([{param: "s", value: query}]));
        const data = await dataResponse.json();
        res.status(200).send(data);
    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
})

router.get("/api/movies/getMovie/:id", passport.authenticate("local"), async (req, res) =>{
    const id = req.params.id;
    try {
        const dataResponse = await fetch(omdbUrlHelper([{param: "i", value: id}]));
        const data = await dataResponse.json();
        res.status(200).send(data);
    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
})



export default router;