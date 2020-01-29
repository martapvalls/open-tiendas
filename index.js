let send = document.getElementsByClassName('contact__send')[0]
let contact = document.getElementsByClassName('contact')[0]
let confirmation = document.getElementsByClassName('confirmation')[0]

send.addEventListener('click', display)

//function to display confirmation message when all required fields aren't empty and send button is clicked 
function display() {
    event.preventDefault()
    contact.style.display = 'none'
    confirmation.style.display = 'flex'
    confirmation.style.animation = 'fadeIn 1s ease-in both'
    getTime()
    home()
}

//function to get home 3 seconds after confirmation message was shown and reseting form
function home() {
    setTimeout(function () {
        document.getElementsByClassName('contact__form')[0].reset()
        contact.style.display = 'flex'
        confirmation.style.display = 'none'

    }, 3000)
}

//function to get date from json and showing in the confirmation message
function getTime() {
    fetch('http://date.jsontest.com/')
        .then(function (response) {
            return response.json()
        })
        .then(function (myJson) {
            let date = myJson.date
            document.getElementsByClassName('confirmation__date')[0].innerHTML = date
        })
}