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

promoRouter.route('/:promoId')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
      .get((req,res,next) => {
      res.end('Will send details of the promos: ' + req.params.promoId +' to you!');
    })
      .post((req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /leaders/'+ req.params.promoId);
    })
    .put((req, res, next) => {
      res.write('Updating the dish: ' + req.params.promoId + '\n');
      res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
      res.end('Deleting dish: ' + req.params.promoId);
    });


    module.exports= promoRouter;