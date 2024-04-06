const container = document.querySelector('.container')
// const box1 = document.getElementById('box1')
// const box2 = document.getElementById('box2')
// const box3 = document.getElementById('box3')
// const box4 = document.getElementById('box4')
// const box5 = document.getElementById('box5')
// const box6 = document.getElementById('box6')
// const box7 = document.getElementById('box7')
// const box8 = document.getElementById('box8')
// const box9 = document.getElementById('box9')

// container.addEventListener('mouseleave', () => {
//     container.style.transform = 'rotateX(0deg) rotateY(0deg)'
// })
// box1.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(-20deg) rotateY(20deg)'
// })
// box2.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(-20deg) rotateY(0deg)'
// })
// box3.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(-20deg) rotateY(-20deg)'
// })
// box4.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(0deg) rotateY(20deg)'
// })
// box5.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(0deg) rotateY(0deg)'
// })
// box6.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(0deg) rotateY(-20deg)'
// })
// box7.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(20deg) rotateY(20deg)'
// })
// box8.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(20deg) rotateY(0deg)'
// })
// box9.addEventListener('mouseover', () => {
//     container.style.transform = 'rotateX(20deg) rotateY(-20deg)'
// })

document.addEventListener('mousemove', (e) => {
    rotateElement(e, container)
})

function rotateElement(event, element) {
    const x = event.clientX
    const y = event.clientY
    
    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    const offsetX = ((x - middleX) / middleX) * 45
    const offsetY = ((y - middleY) / middleY) * 45

    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
}