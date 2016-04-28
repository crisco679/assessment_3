var router = require('express').Router();
var Hero = require('../../models/createHero');

router.post('/hero', function(request,response){
  console.log(request.body);
  Hero.create(request.body, function(err){
    if(err){
      console.log('Error saving Hero', err);
      response.sendStatus(500);
    } else {
      console.log('Successfully saved Hero');
      response.sendStatus(200);
    }
  })

})
router.get('/heroes', function(request, response){
  return Hero.find({}).exec(function(err, heroes){
    if(err){
      console.log('Error', err);
    }
    response.send(JSON.stringify(heroes));
  })
})


module.exports = router;
