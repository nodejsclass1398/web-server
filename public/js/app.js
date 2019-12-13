const form = document.querySelector('.form');
const input = document.querySelector('.form input[type="text"]');
const showTitle = document.querySelector('.show > h2');
const showDescription = document.querySelector('.show > p');

document.querySelector('form').addEventListener('submit' , (e) => {
    e.preventDefault();
    const address = input.value;
    showTitle.style.color = 'black';
    showTitle.innerHTML = 'Loading...';
    showDescription.innerHTML = '';
    fetch(`http://localhost:3000/weather?address=${address}`).then(response => {
        response.json().then(data => {
            if(data.error){
                showTitle.style.color = 'red';
                showTitle.innerHTML = data.error;
                showDescription.innerHTML = '';

                
            }else{
                showTitle.style.color = 'green';
                showDescription.style.color = 'green';
                showTitle.innerHTML = data.location;
                showDescription.innerHTML = data.forecast;
            }
        })
    })
    
});


