const gallery = document.getElementById('gallery');
const card = document.querySelector('.card');
const modal = document.querySelector('.modal');

//Fetch API method

function fetchData(url) {
  return fetch(url)
              //.then(checkStatus)
              .then(res => res.json())
              .catch(error => console.log('Looks like there was a problem', error))
}

//Created the fetch functions. Removed the commas map function creates from the markup.

fetchData('https://randomuser.me/api/?results=12')
    .then(data => generateOptions(data.message))

fetchData('https://randomuser.me/api/?results=12')
    .then(data => generateImage(data.message))

    

    function generateEmployeeOptions(data) {
      const employees = data.map(item => 
        `<option value='${item}'>${item}</option>`
        ).join('');
                              
        select.innerHTML = options;
       
     }

    function generateImage(data) {
      const html = 
      `<img src='${data}' alt>
      <p>Click to view images of ${select.value}s</p>
      `;
        card.innerHTML = html;
      }

      function fetchEmployeeImage() {
        const employee = select.value;
        const img = card.querySelector('modal-img');
        const p = card.querySelector('p');

      }