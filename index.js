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
  if (string.toLowerCase === lowercase) {
    return("I can't hear you!")
  } else if (string.toUpperCase === uppercase) {
    return("YES INDEED!")
  } else if (string === "I love you, Grandma.") {
    return ("I love you, too.")
  }
}