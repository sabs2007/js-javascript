function createGame(player1, hour, player2){
    return`
    <li>
    <img src="./icon-${player1}.png"alt="bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="./icon-${player2}.png"alt="bandeira do ${player2}"/>
    `
}
let delay= -0.4;
function creatCard(date, day, games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day} </span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML=
creatCard("05/07", "quarta-feira", createGame("corinthias", "21:00", "palmeiras"))