const palindromes = function (string) {
    //how to remove anython not a-z
    //let justLetters = string.toLowerCase().replace(RegExp)
    string= string.toLowerCase();
    let justLetters = "";
    let eveything ='abcdefghijklmnopqrstuvwxyz0123456789'
    for(let i = 0;i<string.length;i++){
      let letter = parseInt(string.charAt(i))
      
      if(eveything.includes(letter))
      {
        justLetters += letter; 
    }
    }
    //we can make variable that looks at it forward
    //this is justletters now
    //then make reverse 
    let reverse = justLetters.split('').reverse('').join('');
    // compare if true or false 
    return justLetters===reverse

};

// Do not edit below this line
module.exports = palindromes;
