// BUTTONS  EVENT LISTENERS
document.querySelector('button#contact-us').addEventListener('click', () => {
    document.querySelector('#page-3').scrollIntoView(true)
    document.querySelector('#name').focus()
})

document.querySelector('button#go-to-top').addEventListener('click', () => {
    document.querySelector('#page-1').scrollIntoView(true)
})

// document.querySelector('button#send').addEventListener('click', () => {
//     const name = document.querySelector('#name').value
//     const email = document.querySelector('#email').value
//     const message = document.querySelector('#message').value
//     console.log(`${name}\n${email}\n${message}`)
//     document.querySelector('#name').value = ''
//     document.querySelector('#email').value = ''
//     document.querySelector('#message').value = ''
// })
