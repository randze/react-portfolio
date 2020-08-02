const projects = [
    {
        name: 'PetHome',
        github: 'https://github.com/nuleeannajeon/PetHome',
        site: 'https://nuleeannajeon.github.io/PetHome/',
        img: './assets/img/pethome.jpg'
    },
    {
        name: 'Dice-Pizzaria',
        github: 'https://github.com/wesycool/Dice-Pizzaria',
        site: 'http://creepers-dice-pizzaria.herokuapp.com/',
        img: './assets/img/dicepizzeria.jpg'
    },
    {
        name: 'Code-Quiz',
        github: 'https://github.com/randze/code-quiz',
        site: 'https://randze.github.io/code-quiz/',
        img: './assets/img/codequiz.jpg'
    },
    {
        name: 'Weather Dash',
        github: 'https://github.com/randze/weather-dash',
        site: 'https://randze.github.io/weather-dash/',
        img: './assets/img/weatherdash.jpg'
    },
    {
        name: 'Budget Tracker',
        github: 'https://github.com/randze/pwa-budget-tracker',
        site: '',
        img: './assets/img/budget-tracker.jpg'
    },
    {
        name: 'My Workout App',
        github: 'https://github.com/randze/my-workout-app',
        site: 'https://randze-workout-app.herokuapp.com/',
        img: './assets/img/myworkoutapp.jpg'
    }
]



// col-12 col-sm

for (const {name, img, github, site} of projects) {
    document.querySelector('#projects').innerHTML +=
    `
    <div class="card col-sm-6 col-lg-4 text-center">
        <div class="card-header">
            <p class="card-text">${name}</p>
        </div>
        <img src=${img} class="card-img-top" alt="${name}">
        <div class="card-body">
            <a href=${github} target="_blank">${name} <i class="fab fa-github"></i></a>
            <br>
            <a href=${site} target="_blank">Site <i class="fas fa-globe"></i></a>
        </div>
    </div>
    `
}