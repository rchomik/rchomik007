//alert('Siemanko');
//prompt('Witam');
//confirm('Tak?');

function render(imageUrl) {
    console.log('render()', imageUrl);
    const $img = document.createElement('img'); //HTML image
    $img.setAttribute('src', imageUrl);
    $img.classList.add('mt-3');

    const $gallery = document.querySelector('#gallery');
    $gallery.append($img);

}
function displayPhotos(gallery) {
    for (let i = 0; i < gallery.length; i++) {
        render(gallery[i]);

    gallery.forEach(render);
    }
}

function main() {
    console.log('main()');
    //const galleryTitle = "Galeria Zdjęć";
    const photos = [
        'https://picsum.photos/id/634/300/150',
        'https://picsum.photos/id/637/300/150',
        'https://picsum.photos/id/643/300/150'

    ];

    //render(photos[0]);
    //render(photos[1]);
    //render(photos[2]);

    for (let i = 0; i < photos.length; i++) {
        render(photos[i]);

    }

}
//main();
//FN main() uruchamia się od razu

window.addEventListener('DOMContentLoaded', main);
//FN main() uruchamia się kiedy przeglądarka załaduje całego HTML'a i go sparsuje

//window.addEventListener('load', main);
//FN main() uruchomi się kiedy cała strona załaduje obrazki