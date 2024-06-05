const img = document.querySelectorAll('.imgs')

img.forEach(imgs =>{
    imgs.addEventListener('click', () => {
        removeActiveClasses()
        imgs.classList.add('active')
    })
})
function removeActiveClasses() {
    img.forEach(imgs => {
        imgs.classList.remove('active')
    })
}