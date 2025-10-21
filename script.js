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
    answer.innerHTML = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        let html = '<ul>';
        array.forEach(element => {
          html += `<li><h3>${element.title}</h3>${element.body}</li>`;
        });
        html += '</ul>';
        answer.innerHTML = html;
      })
  })

  cw2.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(object => {
        answer.innerHTML = `<h3>${object.title}</h3>${object.body}`;
      })
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
