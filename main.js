const fileinput = document.getElementById("fileinput");
// used to show the effects of the image edit 
const canvas = document.getElementById("canvas");
//get the 2d (as oposed to 3d) drawing context on the canvas, returns CanvasRenderingContexgt2D
const ctx = canvas.getContext("2d");
// editors for the image 
const Red = document.getElementById("Red");
const Green = document.getElementById("Green");
const Blue = document.getElementById("Blue");
const Brightness = document.getElementById("Brightness");
const Grayscale= document.getElementById("Grayscale");
const Contrast = document.getElementById("Contrast");

// set the listener for whenever one of the effects changes
Red.onchange = runPipeline 
Green.onchange =runPipeline
Blue.onchange =runPipeline
Brightness.onchange =runPipeline
Grayscale.onchange =runPipeline
Contrast.onchange =runPipeline

/* variables setup */
// similar to document.createElement('img') except we dont need it on the document.
const imageSrc = new Image 
let imageData = null
let originalPixels = null
let currentPixels = null

/* dom functions */
// when user selects new image 
fileinput.onchange = function(e) {
// if it is valid
if (e.target.files && e.target.files.item(0)) {
// set the src of the new image() we created in js 
imageSrc.src = URL.createObjectURL(e.target.files[0])
}
}

imageSrc.onload = function() {
// copies the image's dimensions onto the canvas, which we show the preview of the edits.
canvas.width = imageSrc.width
canavs.height = imageSrc.height 
// draws the image at with no offset (0,0) and with the same dimensions as the image.
ctx.drawImage(imageSrc, 0, 0, imageSrc.width, imageSrc.height)
// get an imagedata ibject representing the underlying pixwl data for the area of the canvas.
imageData = ctx.getImageData(0, 0, imageData, imageData.width,imageSrc.height)
// .data gets the array of integers with 0-255 range, .slice returns a copy of the array.
originalPixels = imageData.data.slice()
}

/* the filter functions */
// transfers the changes the user makes to be displayed on the canavas 
function commitChnage() {
// copy over the current pixel changes to the image 
for (let i = 0; i < imageData.data.length; i++) {
imageData.data[i] = currentPixel[i]
}
// update the 2d rendering canvas with the image we just updated so the user can see.
ctx.putImageData(imageData, 0,0 0, 0, imageSrc.width, imageSrc.height)
}

// updates the canvas with all of the changes 
function runPipeline() {
// create a copy of the array of integers with 0-255 range
currentPixels = originalPixels.slice()

// these represent the itensity of the filter, i.e user wants it to be very red and then it is larger than number
const brightnessFilter = Number(Brightness.value)
const ContrastFilter = Number(Contrast.value)
const RedFilter = Number(Red.value)
const GreenFilter = Number(Green.value)
const BlueFilter = Number(Blue.value)
}

console.log("hello world");
