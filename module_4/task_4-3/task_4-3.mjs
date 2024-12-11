"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById('cmbTask1Calculate').addEventListener('click', function() {
  const width = parseFloat(document.getElementById('txtRectWidth').value);
  const height = parseFloat(document.getElementById('txtRectHeight').value);
  const circumference = 2 * (width + height);
  const area = width * height;
  document.getElementById('txtTask1Output').textContent = `Circumference = ${circumference}, Area = ${area}`;
});
//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const task2Words = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('txtTask2Word').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const inputText = event.target.value.trim();
            if (inputText) {
                const words = inputText.split(" ").filter(word => word.length > 0);
                task2Words.push(...words);
                document.getElementById('txtTask2Output').textContent = `Number of words = ${task2Words.length}, Words: ${task2Words.join(', ')}`;
                event.target.value = '';
            }
        }
    });
});
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById('cmbTask3CheckAnswer').addEventListener('click', function() {
  const checkboxes = document.querySelectorAll('input[name="chkTask3"]:checked');
  const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
  document.getElementById('txtTask3Output').textContent = `Selected values: ${selectedValues.join(', ')}`;
});
//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const divTask4Cars = document.getElementById('divTask4Cars');

for (let i = 0; i < CarTypes.length; i++) {
  const label = document.createElement('label');
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'car';
  radio.value = CarTypes[i].value;
  label.appendChild(radio);
  label.appendChild(document.createTextNode(CarTypes[i].caption));
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement('br'));
}

divTask4Cars.addEventListener('change', function(event) {
  if (event.target.name === 'car') {
    const selectedCar = CarTypes.find(car => car.value == event.target.value);
    document.getElementById('txtTask4Output').textContent = `You Selected: ${selectedCar.caption}`;
  }
});
//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById('selectTask5Animals');

selectTask5Animals.addEventListener('change', function(event) {
  const selectedAnimal = event.target.options[event.target.selectedIndex].text;
  document.getElementById('txtTask5Output').textContent = `You Selected: ${selectedAnimal}`;
});
//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById('selectTask6Girls');

GirlsNames.forEach(name => {
  const option = document.createElement('option');
  option.value = name;
  option.textContent = name;
  selectTask6Girls.appendChild(option);
});

selectTask6Girls.addEventListener('change', function(event) {
  const selectedName = event.target.options[event.target.selectedIndex].text;
  document.getElementById('txtTask6Output').textContent = `You Selected: ${selectedName}`;
});
//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.addEventListener('DOMContentLoaded', function() {
  const selectMovieGenre = document.getElementById('selectMovieGenre');

  MovieGenre.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    selectMovieGenre.appendChild(option);
  });

  document.getElementById('cmbAddMovie').addEventListener('click', function() {
    const title = document.getElementById('txtMovieTitle').value;
    const genre = document.getElementById('selectMovieGenre').value;
    const director = document.getElementById('txtMovieDirector').value;
    const rating = document.getElementById('txtMovieRate').value;

    if (title && genre && director && rating) {
      const table = document.getElementById('tblMovies').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();

      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);

      cell1.textContent = title;
      cell2.textContent = genre;
      cell3.textContent = director;
      cell4.textContent = rating;

      document.getElementById('txtMovieTitle').value = '';
      document.getElementById('txtMovieDirector').value = '';
      document.getElementById('txtMovieRate').value = '5';
    } else {
      alert('Please fill in all fields.');
    }
  });
});