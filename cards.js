const idGenerator = function* () {
    let id = 1

    while (true) {
        yield id++
    }
}

const cardIdGenerator = idGenerator()
const cardElement = document.getElementById("card_container")
const cardContainerElement = document.getElementById("card_container")

document.getElementById("create_button").addEventListener("click", event => {
    const cardId = cardIdGenerator.next().value

    cardElement.innerHTML += `
    <section class="card" id="card_${cardId}">
        <h1>This is card ${cardId}</h1>
        <button id="delete_${cardId}">Delete This Card</button
    </section>
    `
})

cardContainerElement.addEventListener("click", event => {
    if (event.target.id.startsWith = "delete_") {
        const deleteId = event.target.id.split("_")[1]
        cardContainerElement.removeChild(document.getElementById(`card_${deleteId}`))
    }
})