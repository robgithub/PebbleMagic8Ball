/**
 * Magic 8 ball
 *
 * This version is basic image display
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Window({ fullscreen: true });
var image = new UI.Image({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    image: 'images/ball.png'
});
  image.image('images/ballanswer.png');
main.add(image);
var textfield = new UI.Text({
  position: new Vector2(0, 62),
  size: new Vector2(144, 168),
  text:'Ask',
  font:'GOTHIC_28_BOLD',
  color:'red',
  textOverflow:'wrap',
  textAlign:'center'
});
main.add(textfield);
main.show();
console.log('main display loaded');


main.on('click', 'up', function(e) {
  console.log('up pressed');
  main.remove(textfield);
  image.image('images/ballsub3.png');

  var pos1 = image.position().clone();
  pos1.y -= 30;
  var pos2 = pos1.clone();
  pos2.y += 60;
  var pos3 = pos2.clone();
  pos3.x -= 60;
  var pos4 = pos3.clone();
  pos4.x += 30;
  var pos5 = image.position().clone();
  image.animate('position',pos1, 1000).queue(function(next){
    console.log('anim step 1 complete');
    next();
    image.image('images/ballsub2.png');
  });
  image.animate('position',pos2, 1500).queue(function(next){
    console.log('anim step 2 complete');
    next();
    image.image('images/ballsub3.png');
  });
  image.animate('position',pos3, 1500).queue(function(next){
    console.log('anim step 3 complete');
    next();
    image.image('images/ballsub1.png');
  });
  image.animate('position',pos4, 1500).queue(function(next){
    next();
    image.image('images/ballsub2.png');
    console.log('anim step 4 complete');
  });
  image.animate('position',pos5, 1500).queue(function(next){
    next();
    image.image('images/ball.png');
    console.log('anim step 5 complete');
  });
  console.log('animation queuing complete');
});

main.on('click', 'select', function(e) {
  console.log('select pressed');
});

main.on('click', 'down', function(e) {
  console.log('down pressed');
  var wind = new UI.Window({ fullscreen: true });
  var image = new UI.Image({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    image: 'images/bg.png'
  });
  wind.add(image);
  wind.show();
});
