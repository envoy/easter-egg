const $numbers = document.getElementById('numbers')
const $submitButton = document.getElementById('submit')

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
};

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}
const array = new Array(getRandomNumber()).fill(0).map(function(x) {
  return getRandomNumber()
});

$numbers.innerHTML = array.toString()

let answer = new Set(array.sort())
let answerArray = [...answer]

let count = window.localStorage.getItem('count')
if (count) {
  parseInt(count, 10)
}
else {
  localStorage.setItem('count', 0)
}

$submitButton.addEventListener('click', () => {
  const userAnswer = document.querySelector("input").value.split(",")
  for (let i = 0; i < userAnswer.length; i++) {
    userAnswer[i] = parseInt(userAnswer[i], 10)
  }
  let checked = compareArrays(answerArray, userAnswer)

  if (checked) {
    window.location.href = 'pass.html'
  }
  else if (!checked && count <= 2) {
    console.log(count)
    count++
    localStorage.setItem('count', JSON.stringify(count))
    window.location.href = 'retry.html'
  }
  else {
    window.location.href = 'fail.html'
  }
})




