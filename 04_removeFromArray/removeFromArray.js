const removeFromArray = function (value, ...removed) {
  // //loop through removed to find values that dont match
  // for (let i = 0; i<value.length;i++) {
  //     //if you are in value how do we remove you
  //     //not in removed, add to value
  //     if(removed.includes(value[i])){
  //         //remembber to splice so it can
  //         //seperate the array aka values
  //         value.splice(i,1);
  //         i--;

  //     }

  // }
  // return value;

  let filteredArray = [];
  {
    for (let i = 0; i < value.length; i++) {
      //if not in removed and is included in vaule i
      //!removed just check if it is empty 
      if (!removed.includes(value[i])) {
        //take the removed value i and put into filtered array

        filteredArray.push(value[i]);
      }
    }
    return filteredArray;
  }
};

// Do not edit below this line
module.exports = removeFromArray;
