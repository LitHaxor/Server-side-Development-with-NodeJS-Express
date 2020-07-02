const express = require('express');
const bodyParser= require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req,res,next)=>{
        res.statusCode =200;
        res.header('Content-Type','text/plain');
        next();
    })
    .get((req,res,next)=>{
        res.end("will send promotions to you");
    })
    .post((req, res, next) => {
        res.end('Will add the promos: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req,res,next)=>{
        res.statusCode= 403;
        res.end("you cannot do put operation on /promos");
    })
    .delete((req,res,next)=>{
        res.end('Deleting promos!');
    });


    module.exports= promoRouter;