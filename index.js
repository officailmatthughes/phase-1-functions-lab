// Code your solution in this file!
const blockInFeet = 264;
const headquarters = 42;
const headquartersInFeet = headquarters * blockInFeet;

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - headquarters);
}

function distanceFromHqInFeet(someValue) {

    return Math.abs(((someValue * blockInFeet) - headquartersInFeet));

    


    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    start = blockInFeet * start
    destination = blockInFeet * destination 

    return Math.abs(destination - start);
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    start = blockInFeet * start
    destination = blockInFeet * destination 

    const fairPrice = Math.abs(destination - start);


    // if over 2500 output the error message as a string
    if (fairPrice > 2500) {
        return "cannot travel that far";

            // over 2000 flat 25
    } else if (fairPrice > 2000) {
        return 25;

        // between 400 and 2000 subtract 400 and multiply the rest by 2 cents
    } else if (fairPrice > 400) {
        return parseFloat(((fairPrice - 400) * 2) / 100.0);
        // Under 400 free ride yo
    } else {
        return 0;
    }

  }