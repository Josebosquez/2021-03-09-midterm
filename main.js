// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(num) {
    let baby = "You can't drive.";
    let teen = 'You can drive but not vote.'
    let yAdult = 'You can vote but not rent a car.'
    let adult = 'You can do pretty much anything.'
    if (num <= 15) {
        return baby;
    } else if (num <= 17) {
        return teen;
    } else if (num <= 24) {
        return yAdult;
    } else if (num >= 25) {
        return adult;
    }
}

function oddIndices(arr) {
    let ar1 = [];
    for (i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            ar1.push(arr[i])
        }
    } return ar1;
}

function numOddValues(arr) {
    let arr1 = [];
    let output = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            output += 1;
            arr1.push(arr[i])
        }
    }
    return output;
}

function averageStringLength(arr) {
    let output = 0;
    if (arr.length === 0) {
        return 0;
    } else {
        for (i = 0; i < arr.length;i++){
            output += arr[i].length
        }
        return output / arr.length;
    }
}


function firstPunctuationIndex(imOutOfTime){
if (imOutOfTime[i] !== "?" || imOutOfTime[i] !== "." || imOutOfTime[i] !== "!")
    return -1;
}

function getPlace() {
}
        // ┌─────────────────────────────────────┐
        // │ Do not modify code below this line. │
        // └─────────────────────────────────────┘

        if (typeof ageToAbilities === 'undefined') {
            ageToAbilities = undefined;
        }
        if (typeof oddIndices === 'undefined') {
            oddIndices = undefined;
        }
        if (typeof numOddValues === 'undefined') {
            numOddValues = undefined;
        }
        if (typeof averageStringLength === 'undefined') {
            averageStringLength = undefined;
        }
        if (typeof firstPunctuationIndex === 'undefined') {
            firstPunctuationIndex = undefined;
        }
        if (typeof getPlace === 'undefined') {
            getPlace = undefined;
        }

        module.exports = {
            ageToAbilities,
            oddIndices,
            numOddValues,
            averageStringLength,
            firstPunctuationIndex,
            getPlace
        };
