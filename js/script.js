'use strict';

const gameData = [{
        name: "Stand and say",
        preparation: "make 2 even teams",
        size: "any",
        materials: 'flashcards',
        instructions: 'It our and advantage and small these come war, man regurgitated hand, of which, where with phase for horses clues haven\'t of is meet',
        tweaks: 'change winning score for a longer or shorter game',
        photo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Bluff",
        preparation: "make 3-4 teams",
        size: "any",
        materials: '3 mini whiteboards and markers',
        instructions: 'Suspicion basically, pointing, intention day tickets business best frequency either policy biases, either volume for people eyes to small',
        tweaks: 'allow more advanced students to ask questions',
        photo: "https://images.unsplash.com/photo-1616574808712-5cf60f175073?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Secret Zombie",
        preparation: "sit students in a big circle, draw a safe zone on the floor",
        size: "10 +",
        materials: '3 different colored markers',
        instructions: 'Suspicion basically, pointing, intention day tickets business best frequency either policy biases, either volume for people eyes to small',
        tweaks: 'add more characters and change safe zone requirements to keep the game fresh and interesting',
        photo: "https://images.unsplash.com/photo-1605216391936-b8a1fbf96dd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdhbWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    

];

function gameTemplate(game) {
    return `
    <div class="game-box">
    <img class="game-photo" src="${game.photo}">
    <h2 class="game-name">${game.name}
    <ul class="game-information">
    <li>Preparation: ${game.preparation}</li>
    <li>size: ${game.size}</li>
    <li>materials: ${game.materials}</li>
    <li>instructions: ${game.instructions}</li>
    <li>tweaks: ${game.tweaks}</li>
    
    
    </ul>
        </div>
    `
}

document.getElementById("games").innerHTML = `
<h1 class="game-title">${gameData.length} games for you to choose from</h1>
${gameData.map(gameTemplate).join('')} 

`