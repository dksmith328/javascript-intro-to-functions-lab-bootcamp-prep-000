function shout(string) {
  var uppercase = "HELLO!"
  return string.toUpperCase()
}

function whisper(string) {
  var lowercase = "hello!"
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "hello!") {
    return("I can\'t hear you!")
  } 
}