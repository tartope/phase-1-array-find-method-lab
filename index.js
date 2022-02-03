// code your solution here

function superbowlWin(objects) {
    // first find if we have the object 
    let foundObject = objects.find(item => (item.result === "W"));

    // test if we found
    if (foundObject) {
        return foundObject.year;
    } else {
        return undefined;
    }
}


// function superbowlWin(records){
//     const result = records.find(record => record.result === 'W');
//     if(result === 'W') {
//         return year
//     }
// return
// };
