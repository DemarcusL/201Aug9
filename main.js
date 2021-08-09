// console.log("Sanity Test...");

//================================= Start ==============================//

// Encapsulation - grouping objects in classes to be used

// We are learning ES6 way of doing new instances of objects. we are moving away from .prototype stuff. in the cookie stand we build an object class constructor, then we fed new object instances into that funtion to make objects. in this new method we are 

//Let's Define our object first
// Here is where we define our classes, instantiate classes, add event hndlers to track clicks

//Define base set of props for our domin object in a new ES6 class syntax
// inside curly brces mens it is ecapsulated in the clss
// GoatPictures will be watever clss we choose here
class GoatPictures {

    // Propersties I want but not passed in
    // just put it outside the constructor above it
    clicks = 0;
    timesDisplayed = 0;
    // initial constructor method, all MUST HAVE THIS NAMED constructor
    // add params we are using for the object props
    constructor(name, imageSrc)
    {
        this.name = name;
        this.imageSrc = imageSrc;


    };

    // we can add aditionl methods here for what the object will do

};
// we can use the above class over nd over again for the new objects, thats why we built this first

let leftImage 
// console.log(myGoat.name); // this should display the new instance with it prop we check here for checks

// We want to randomly pick from a list of goat image objects and display them
// we will need an array for our list of imges, we can and display them
// we can add things to arrays with the .push method, but here wew ill just do inline 
let allImageObjects = [
    // create new goat objects
    // this makes a new object instnce
    // on the left, over the image we wnt, and use 'Copy Path' to get the path location for the img
    new GoatPictures('My Best Goat', ' img path goes here for img src prop '),
    new GoatPictures('My worst Goat', ' img path goes here for img src prop '),
    new GoatPictures('My side Goat', ' img path goes here for img src prop '),
    new GoatPictures('My lst Goat', ' img path goes here for img src prop '),

];

// test array of goats for sanity
// for (let index = 0; index < allGoatImgObjects.length; index++) {
//     console.log(allGoatImgObjects[index].name);
    
// }; 

// we need to generate randomly. he mestioned how it reeally does matter, we can get the random step earlier.

// set up our element reference in the dom. i need to get some elements by id first to target were i will display my images and even results
// we are setting our base variables here to reuse
// we may not need the imag tags, but its works so find a way to refactor, and rememebr, this has a lot of kevins code, go thru and refactor to your own in refefrence to goats
let PictureAreaL = document.getElementById('PictureAreaL');
let PictureAreaM = document.getElementById('PictureAreaM');
let PictureAreaR = document.getElementById('PictureAreaR');
//times picked base
let TimesPicked = document.getElementById('TimesPicked');
//  set images bases
let ImageLeft = document.getElementById('ImageLeft');
let ImageLeftTag = document.getElementById('ImageLeftTag')
let ImageMid = document.getElementById('ImageMid');
let ImageMidTag = document.getElementById('ImageMidTag')
let ImageRight = document.getElementById('ImageRight');
let ImageRightTag = document.getElementById('ImageRightTag')
//     or
// const PictureArea1

// requirements says dont display the same image back to back
// implement a func to pick a random item object
// look up new ways to write invisble function, anon functions
let pickedNewItem =  function() {
    leftImageIndex = Math.floor(math.random() * allImageObjects.lenght);

    midImageIndex = Math.floor(math.random() * allImageObjects.lenght);

    rightImageIndex = Math.floor(math.random() * allImageObjects.lenght);

    // we are updating the left image
    // rememeber to change goat code with your own code
    ImageLeft.innerText = allGoatImgObjects[leftImageIndex].name;
    // here we are generating ?
    ImageLeftTag.src = allGoatImgObjects[leftImageIndex].imageSrc;

    // we are updating the mid image
    // rememeber to change goat code with your own code
    ImageMid.innerText = allGoatImgObjects[midImageIndex].name;
    // here we are generating ?
    ImageMidTag.src = allGoatImgObjects[midImageIndex].imageSrc;

    // we are updating the right image
    // rememeber to change goat code with your own code
    ImageRight.innerText = allGoatImgObjects[rightImageIndex].name;
    // here we are generating ?
    ImageRightTag.src = allGoatImgObjects[rightImageIndex].imageSrc;

    // update to the display
    ImageLeft

}

// Lets add event listeneres to the clicks of the items
// refer to kevin's code about the even listener, rememeber the bubble effect
getImageSectionTag.

pickedNewItem(); // there are no images loaded to try yet, check with images, make sure to change the css of pic sizes