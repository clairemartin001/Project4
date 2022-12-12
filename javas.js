


// function for the flashlight cursor effect 
function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)







var images = [
  "images/newyearscc.png", 
  "images/redphoto.png", 
  "images/twoguyscc.png",
  "images/welcometocc.png",


 ];
 
 // this chooses a random number from all available image indices
 var randomImage = images[Math.floor(Math.random() * images.length)];
 console.log(randomImage);
 // make the URL into a proper image tag
 var image = "<img src='" + randomImage + "'>";
 // append to the div
 document.getElementById("img-load").innerHTML = image;





 var images2 = [
  "images/pamphletcc.png", 
  "images/parkinglot.png", 
  "images/shelves.png",
  "images/snowdaycc.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage2 = images2[Math.floor(Math.random() * images2.length)];
 console.log(randomImage2);
 // make the URL into a proper image tag
 var image2 = "<img src='" + randomImage2 + "'>";
 // append to the div
 document.getElementById("img-load2").innerHTML = image2;



 var images3 = [
  "images/friendinPA.png", 
  "images/easterflowers.png", 
  "images/womanchefcc.png",
  "images/ccmotorcycles.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage3 = images3[Math.floor(Math.random() * images3.length)];
 console.log(randomImage3);
 // make the URL into a proper image tag
 var image3 = "<img src='" + randomImage3 + "'>";
 // append to the div
 document.getElementById("img-load3").innerHTML = image3;




 var images4 = [
  "images/xmascc.png", 
  "images/overheadshotcc.png", 
  "images/farmersbestposter.png",
  "images/pieproductioncc.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage4 = images4[Math.floor(Math.random() * images4.length)];
 console.log(randomImage4);
 // make the URL into a proper image tag
 var image4 = "<img src='" + randomImage4 + "'>";
 // append to the div
 document.getElementById("img-load4").innerHTML = image4;



 var images5 = [
  "images/businesscardcc.png", 
  "images/pinkandpurple.png", 
  "images/plaidmancc.png",
  "images/stationary.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage5 = images5[Math.floor(Math.random() * images5.length)];
 console.log(randomImage5);
 // make the URL into a proper image tag
 var image5 = "<img src='" + randomImage5 + "'>";
 // append to the div
 document.getElementById("img-load5").innerHTML = image5;



 var images6 = [
  "images/duckad.png", 
  "images/farmersbestmenu.png", 
  "images/redTwoGuys.png",
  "images/cakecutting.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage6 = images6[Math.floor(Math.random() * images6.length)];
 console.log(randomImage6);
 // make the URL into a proper image tag
 var image6 = "<img src='" + randomImage6 + "'>";
 // append to the div
 document.getElementById("img-load6").innerHTML = image6;


 var images7 = [
  "images/menubackfb.png", 
  "images/cherriesAd.png", 
  "images/counterbarcc.png",
  "images/4thanniversarycc.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage7 = images7[Math.floor(Math.random() * images7.length)];
 console.log(randomImage7);
 // make the URL into a proper image tag
 var image7 = "<img src='" + randomImage7 + "'>";
 // append to the div
 document.getElementById("img-load7").innerHTML = image7;

 var images8 = [
  "images/dollad.png", 
  "images/exteriorshot.png", 
  "images/cupboardflyer.png",
  "images/carsoutside.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage8 = images8[Math.floor(Math.random() * images8.length)];
 console.log(randomImage8);
 // make the URL into a proper image tag
 var image8 = "<img src='" + randomImage8 + "'>";
 // append to the div
 document.getElementById("img-load8").innerHTML = image8;

 var images9 = [
  "images/menuitemscc.png", 
  "images/redCC.png", 
  "images/redTwoGirls.png",
  "images/farmersbestmatches.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage9 = images9[Math.floor(Math.random() * images9.length)];
 console.log(randomImage9);
 // make the URL into a proper image tag
 var image9 = "<img src='" + randomImage9 + "'>";
 // append to the div
 document.getElementById("img-load9").innerHTML = image9;

 var images10 = [
  "images/letter.png", 
  "images/cashiercc.png", 
  "images/counterbarcc.png",
  "images/frontareacc.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage10 = images10[Math.floor(Math.random() * images10.length)];
 console.log(randomImage10);
 // make the URL into a proper image tag
 var image10 = "<img src='" + randomImage10 + "'>";
 // append to the div
 document.getElementById("img-load10").innerHTML = image10;



 var images11 = [
  "images/billboard.png", 
  "images/tablewflowers.png", 
  "images/carriageRide.png",
  "images/carsinparkinglot.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage11 = images11[Math.floor(Math.random() * images11.length)];
 console.log(randomImage11);
 // make the URL into a proper image tag
 var image11 = "<img src='" + randomImage11 + "'>";
 // append to the div
 document.getElementById("img-load11").innerHTML = image11;


 var images12 = [
  "images/cccamping.png", 
  "images/farmersbestoutside.png", 
  "images/carriageRide.png",
  "images/carsinparkinglot.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage12 = images12[Math.floor(Math.random() * images12.length)];
 console.log(randomImage12);
 // make the URL into a proper image tag
 var image12 = "<img src='" + randomImage12 + "'>";
 // append to the div
 document.getElementById("img-load12").innerHTML = image12;


 var images13 = [
  "images/expansion.png", 
  "images/menuitemscc.png", 
  "images/menubackfb.png",
  "images/cherriesAd.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage13 = images13[Math.floor(Math.random() * images13.length)];
 console.log(randomImage13);
 // make the URL into a proper image tag
 var image13 = "<img src='" + randomImage13 + "'>";
 // append to the div
 document.getElementById("img-load13").innerHTML = image13;



 var images14 = [
  "images/lewisburglights.png", 
  "images/knittingad.png", 
  "images/ccInn.png",
  "images/ccworkshopAd.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage14 = images14[Math.floor(Math.random() * images14.length)];
 console.log(randomImage14);
 // make the URL into a proper image tag
 var image14 = "<img src='" + randomImage14 + "'>";
 // append to the div
 document.getElementById("img-load14").innerHTML = image14;


 var images15 = [
  "images/grandmas.png", 
  "images/santared.png", 
  "images/manoutfront.png",
  "images/openmatches.png",

 ];
 
 // this chooses a random number from all available image indices
 var randomImage15 = images15[Math.floor(Math.random() * images15.length)];
 console.log(randomImage15);
 // make the URL into a proper image tag
 var image15 = "<img src='" + randomImage15 + "'>";
 // append to the div
 document.getElementById("img-load15").innerHTML = image15;

 var images16 = [
  "images/orderpapercc.png", 
  "images/groundleveledAd.png", 
  "images/cccamping.png"


 ];
 
 // this chooses a random number from all available image indices
 var randomImage16 = images16[Math.floor(Math.random() * images16.length)];
 console.log(randomImage16);
 // make the URL into a proper image tag
 var image16 = "<img src='" + randomImage16 + "'>";
 // append to the div
 document.getElementById("img-load16").innerHTML = image16;



 var images17 = [
  "images/danbaylornewsclipping.png", 
  "images/logo.png"

 ];
 
 // this chooses a random number from all available image indices
 var randomImage17 = images17[Math.floor(Math.random() * images17.length)];
 console.log(randomImage17);
 // make the URL into a proper image tag
 var image17 = "<img src='" + randomImage17 + "'>";
 // append to the div
 document.getElementById("img-load17").innerHTML = image17;



 var images18 = [
  "images/moviessign.png", 
  "images/redTwoGirls2.png"

 ];
 
 // this chooses a random number from all available image indices
 var randomImage18 = images18[Math.floor(Math.random() * images18.length)];
 console.log(randomImage18);
 // make the URL into a proper image tag
 var image18 = "<img src='" + randomImage18 + "'>";
 // append to the div
 document.getElementById("img-load18").innerHTML = image18;









