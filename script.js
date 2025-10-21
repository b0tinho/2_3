(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    alert("Loading... ")
    answer.innerHTML = "Loading...";
    fetch('https://my-json-server.typicode.com/b0tinho/2_3/posts')
      .then(response => response.json())
      .then(array => {
        let html = '<ul>';
        array.forEach(element => {
          html += `<li><h3>${element.id}</h3>${element.title}</li>`;
        });
        html += '</ul>';
        console.log(html);
        answer.innerHTML = html;

      })
  })


  cw2.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(object => {
        console.log(object)
        answer.innerHTML = `<h3>${object.title}</h3>${object.body}`;
      })
  })

  cw3.addEventListener("click", function() {
    answer.innerHTML = "Processing...";
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: "Nowy post",
        body: "Treść nowego posta",
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        answer.innerHTML = `Dodano nowy post o ID = ${data.id}`;
      })
  })

})();
