window.addEventListener('load', function () {
var image = document.getElementById("slider");
var imagePath = 'img/';
var backgrounds = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];
 
var i = 0;
function changeImg() {
i %= backgrounds.length;
image.style.backgroundImage = `url(${imagePath}${backgrounds[i]})`;
}
 
var autoSlide = function() {
  this.time = 3;
  this.slide = function () {
    i++;
    i %= backgrounds.length;
    changeImg();
   };
  this.start = function () {
    this.interval = setInterval(this.slide, this.time * 1000);
    console.log(this.time);
  };
  this.stop = function () {
    clearInterval(this.interval);
  };
  this.reset = function () {
    this.stop();
    this.start();
  };
}
  
  var a = new autoSlide();
  a.start();
  document.querySelector("#previous").onclick = function (){i=((i-1<0)? backgrounds.length-1 : i-1);changeImg(); a.reset();};
  document.querySelector("#next").onclick = function (){i++;changeImg(); a.reset();};
});
