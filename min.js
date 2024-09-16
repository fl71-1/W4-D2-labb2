let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let text = document.getElementById("text");
let image1 = document.getElementById('image1');

btn.addEventListener("click", () => {
  fetch("https://66e7e6a0b17821a9d9da6efe.mockapi.io/W4-D2-Lab2", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: inp.value,
      img:"https://images.pexels.com/photos/3965500/pexels-photo-3965500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    })
  })
  .then((response) => response.json())
  .then((data) => {
    text.textContent = ` photo added: ${data.name}`;
    
    location.reload();
 
  });
});

function displayImages() {
    fetch('https://66e7e6a0b17821a9d9da6efe.mockapi.io/W4-D2-Lab2')
      .then(response => response.json())
      .then(images => {
        image1.innerHTML = ''; 
        
        images.forEach(image => {
          const imgdiv = document.createElement('div');
          
          imgdiv.innerHTML = `
            <h3>${image.name}</h3>
            <img src="${image.img}" width="200">
            <br>
            <br>
            <button id="btn2" onclick="deleteImage(${image.id})">حذف</button>
          `;
          
          image1.appendChild(imgdiv);
        });
      });
  }
  
  function deleteImage(id) {
    fetch(`https://66e7e6a0b17821a9d9da6efe.mockapi.io/W4-D2-Lab2/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      displayImages();
    })
    .catch(error => {
      console.error('Error deleting image:', error);
    });
  }
  
  displayImages();
  
