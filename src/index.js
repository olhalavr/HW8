function capitalizeStrings(arr) {
    const capitalizedArr = [];
  
    for (const word of arr) {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      capitalizedArr.push(capitalizedWord);
    }
  
    return capitalizedArr;
  }

  const words = ["apple", "banaNA", "kiWi", "ORANGE"];
  console.log(capitalizeStrings(words)); 
  