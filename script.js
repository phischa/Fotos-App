let images = ['img/beach1.jpg', 'img/sunrise1.jpg', 'img/tree1.jpg', 'img/mountain1.jpg', 'img/winter1.jpg', 'img/prague1.jpg', 'img/prague2.jpg']

function load() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for(let i = 0; i < images.length; i++) {
        /* const image = images[i]; */
        document.getElementById('content').innerHTML += /* HTML */ `
            <div>
                <img class="img-box" onclick="openImage(${i})" src="${images[i]}"> 
            </div>`;
    }
} 

function openImage(i) {
    document.getElementById('fullscreen').classList.add('img-box-fullscreen');
    /* const image = images[i]; */
    /* fullscreen.innerHTML = ''; */
    fullscreen.innerHTML += openImageHTML(i);
}

function openImageHTML(i) {
    return /* HTML */ `
            <span class="close-img" onclick="closeImage()">X</span>
            <span class="back-forth" onclick="lastImage(${i})"><</span>
            <img class="img-fullscreen" src="${images[i]}" alt="">
            <span class="back-forth" onclick="nextImage(${i})">></span>
            `;
}

function closeImage() {
        document.getElementById('fullscreen').classList.remove('img-box-fullscreen');
        fullscreen.innerHTML = '';
    }

function nextImage(i) {
    i = (i + 1) % images.length;
    document.getElementById('fullscreen').innerHTML = '';
    openImageHTML(i);
    openImage(i);
}

function lastImage(i) {
    i = (i - 1 + images.length) % images.length;
    document.getElementById('fullscreen').innerHTML = '';
    openImageHTML(i);
    openImage(i);
}