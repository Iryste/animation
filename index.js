document.addEventListener('DOMContentLoaded', function() {
    const span = document.querySelector('#span-anime');
    console.log(span);
    span.classList.toggle('animate');
});


const span = document.querySelector('#span-anime');
span.addEventListener('mouseover', function () {
        span.classList.toggle('animate');
});





// const buttoncreateElement = document.querySelector('#create_el');

// buttoncreateElement.addEventListener('click', function() {
//     const paragraphe = document.createElement('p');
// paragraphe.textContent = 'mon paragraphe';
// // le .after place le paragraphe après le bouton
// buttoncreateElement.after(paragraphe);
// console.log(paragraphe);
// });