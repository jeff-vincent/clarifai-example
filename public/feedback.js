function evergreen() {
  const image = document.getElementById('img').src;
  const value = true;
  const id = 'evergreen';
  const feedback = {
  	image: image,
  	value: value,
  	id: id,
  };
  sendPost(feedback)
}

function deciduous() {
  const image = document.getElementById('img').src;
  const value = true;
  const id = 'deciduous'
  const feedback = {
  	image: image,
  	value: value,
  	id: id,
  }
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
      .then(data => console.log(data))
    }
}
