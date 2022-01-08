const allPanels = document.querySelectorAll('.panel')

allPanels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass() {
    allPanels.forEach(panel => {
        panel.classList.remove('active')
    })
}