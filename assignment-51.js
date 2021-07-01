// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
let volumeOfBox= { width: 2, length: 3, height: 5 } 

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
// Notes
// Don't forget to return the result.

const calcVolume = (volumeOfBox)=>{
    return volumeOfBox.width * volumeOfBox.length*volumeOfBox.height;
}

const volume = calcVolume(volumeOfBox)
console.log("🚀 ~ file: assignment-51.js ~ line 17 ~ volume", volume)
