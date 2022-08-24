// --------- People Info Exercise ---------

people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
  }

  const getAge = function(age){
    if (age < 21){
        return "Underage"
    }else if (age >= 55){
        return "55+"
    }else{
        return age + " years old"
    }
  }

const getProfession = function(profession){
    let strProfession = ""
    let words = profession.split(" ")
    for(let i = 0; i < words.length; i++){
        strProfession += capitalize(words[i])
        if(i == words.length-1){
            break
        }else{
            strProfession += " "
        }
    }

    return strProfession
}

const getLocation = function(country, city){
    let location = ""
    location += capitalize(country)
    location += ", "
    location += capitalize(city)
    return location

}

const getPharse = function(name, pharse){
    let resultPharse = ""
    resultPharse = capitalize(name) + " loves to say \"" + capitalize(pharse) + "\""
    return resultPharse
}


const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)}` 
    summary += ` ${getProfession(person.profession)}`
    summary += ` from ${getLocation(person.country, person.city)}.`
    summary += ` ${getPharse(person.name, person.catchphrase)}.`
    return summary
}

for(let person of people_info){
console.log(getSummary(person))
}


// --------- Count Words Exercise ---------
const story = "In the beginning there was light. Then there were wolves. \
Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, \
the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}


/*
function gets a string and returns an array of words
that are lowercased and withoud special characters.

*/
const cleanText = function(str){
    // remove all special characters
    for(let specialChar of specialChars){
        str = str.split(specialChar).join(" ")
    }

    words = str.split(" ")
    
    // lowercase all the words
    for (let i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase()
    }

    return words
}

/*
function that gets a word and if the word is already
in the 'wordCount' it will update it's counter,
otherwise it will set it's counter to 1
*/
const addToCount = function(word){
    console.log(word)
    if(word in wordCounts){
        wordCounts[word] += 1
    }else{
        wordCounts[word] = 1
    }
}

/*
function that gets a string and counts the unique words.
*/
const countWords = function(str){
    const cleanWords = cleanText(str)
    for(let word of cleanWords){
        addToCount(word)
    }
}


countWords(story)
console.log(wordCounts)