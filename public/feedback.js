function yes() {
  const feedback = 'yes'
  console.log("yes works")
  sendPost(feedback)
}
function no() {
  const feedback = 'no'
  console.log("no works")
  sendPost(feedback)
}
function sendPost(feedback) {
  console.log(`POST request will be made with ${feedback}`)
}
function nextImage() {
  console.log('GET request for index')
}