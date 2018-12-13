
function yes() {
  const image = document.getElementById('img').src
  const feedback = {
  	image: image,
  }
  sendPost(feedback)
}
function no() {
  const feedback = 'no'
  console.log("no works")
  sendPost(feedback)
}
function sendPost(feedback) {
  
postData(`http://localhost:3000/feedback`, feedback)
  .then(data => console.log(JSON.stringify(data)))


function postData(url = ``, data = {}) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(console.log(data))
  }
}


function nextImage() {
  fetch('https://localhost:3000')
  .then(response => response.json())
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
  })
}