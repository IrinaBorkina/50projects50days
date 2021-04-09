const panels = document.querySelectorAll('.panel');

const bg = [
    "https://wallpapercave.com/wp/Vnkilmc.jpg",
    "https://images.alphacoders.com/472/thumb-1920-472569.jpg",
    "https://wallpapercave.com/wp/wp2601529.jpg",
    "https://wallpaperaccess.com/full/865178.jpg",
    "https://i.pinimg.com/originals/95/1f/0b/951f0bb317ad31b958888478672064e7.jpg"
];

panels.forEach((panel,i) => {
    panel.style.backgroundImage = `url(${bg[i]})`;
})

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
