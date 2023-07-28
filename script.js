document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const tableBody = document.querySelector('#dataTable tbody');
  const clearBtn = document.getElementById('clearBtn');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
   
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;   
    const foodElements = document.querySelectorAll('input[name="food"]:checked');
    const selectedFoods = [...foodElements].map((el) => el.value);

    if (selectedFoods.length < 2) {
      alert("Please choose at least 2 food options.");
      return;
    }
 
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Create a new row in the table
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${selectedFoods}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;

    // Clear the form fields
    form.reset();
  });

  // Clear button functionality
  clearBtn.addEventListener('click', () => {
    form.reset();
  });
});




