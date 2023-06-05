const viewBtn = document.getElementById('view-btn')

viewBtn.addEventListener('click', function () {
    const hidden = document.getElementsByClassName('hidden')

    for (let show of hidden) {
        if (show.style.display == 'none') {
            show.style.display = 'block'
            viewBtn.textContent = 'View Less'
        } else {
            show.style.display = 'none'
            viewBtn.textContent = 'View More'
        }
    }
})
