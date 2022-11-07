let height = 2160
let width = 3840
// let height = 1080
// let width = 1920
let displayBit = 6
// let displayBit = 8
// let displayBit = 10

// let refreshRate = 60
// let refreshRate = 75
let refreshRate = 144

let bitsPerPixel = displayBit + displayBit + displayBit
let bitsPerFrame = height * width * bitsPerPixel // Bits Pre bitsPerFrame
let oneSecBits = bitsPerFrame * refreshRate // Bits Per second

let bitsToByte = 8
let bitsToKiloByte = bitsToByte * 1024
let bitsToMegaByte = bitsToKiloByte * 1024
let bitsToKiloBit = 1024
let bitsToMegaBit = bitsToKiloBit * 1024

console.log("\n" + height + 'x' + width + " @" + refreshRate + "Hz" + " " + displayBit + " bit , total: " + bitsPerPixel + " bit\n"
    + "per Frame\tper Minute      " + refreshRate + "Hz\n"
    + "=========================================\n"
    + (bitsPerFrame / bitsToMegaByte).toFixed(2) + " MB\t\t"
    + (oneSecBits / bitsToMegaByte).toFixed(2) + " MB\n"
    + (bitsPerFrame / bitsToMegaBit).toFixed(2) + " Mb\t\t"
    + (oneSecBits / bitsToMegaBit).toFixed(2) + " Mb",
)
