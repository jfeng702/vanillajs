document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const input = document.querySelector('.favorite-input');
  const div = document.querySelector('.list-container');
  div.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputVal = input.value;
    input.value = '';
    const li = document.createElement('li');
    li.textContent = inputVal;
    const ul = document.getElementById('sf-places');
    ul.appendChild(li);
  });


  // adding new photos
  const button = document.querySelector('.photo-show-button');
  button.addEventListener('click', (e) => {
    const photoForm = document.querySelector('.photo-form-container');
    photoForm.classList.toggle('hidden');

  });

  const photoSubmit = document.querySelector('.photo-url-submit');
  photoSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const photoInput = document.querySelector('.photo-url-input');
    const img = document.createElement('img');
    img.src = photoInput.value;
    const photoUl = document.querySelector('.dog-photos');
    const photoLi = document.createElement('li');
    photoLi.appendChild(img);
    photoUl.appendChild(photoLi);
    photoInput.value = '';
  });




});
