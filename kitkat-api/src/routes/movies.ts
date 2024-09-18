import { Router } from "express";
import passport from "passport";
import omdbUrlHelper from "../util/omdbUrlHelper"
import isAuthenticated from "../util/isAuthenticated";

const router = Router(); 

router.get("/api/movies/search", isAuthenticated, async (req, res) =>{
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

router.get("/api/movies/getMovie/:id", isAuthenticated, async (req, res) =>{
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