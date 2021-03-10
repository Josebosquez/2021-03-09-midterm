// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities (str){
    let baby = 'You can\'t drive.';
    let teen = 'You can drive but not vote.'
    let yAdult = 'You can vote but not rent a car.'
    let adult = 'You can do pretty much anything.'
    let age = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25];
    for (i = 0; i < age.length; i++){
    if (age[i] <= 15){
        return baby;
    }
    if (age[i] >= 16 && age[i] === 17){
        return teen;
    }
    }
}
function oddIndices(arr){
    let ar1 = [];
    for (i = 0; i < arr.length;i++){
        if (i % 2 !== 0){
            ar1.push(arr[i])
        } 
    }return ar1;
}

function numOddValues (arr){
    let arr1 = [];
    let count = 0;
    while(count > 0)
        if (arr[i] % 2 === 0){
            count+=1;
    }
    return count;
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
