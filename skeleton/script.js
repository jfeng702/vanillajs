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

  // --- your code here!
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

  // --- your code here!



});
