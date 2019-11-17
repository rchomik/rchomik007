// alert('Siemanko');
// confirm('Czy na pewno?');
// prompt('Ile masz lat?');

function render(imageUrl) {
    console.log('render()', imageUrl);


    // Stworzenie elementu <img> w pamięci
    const $img = document.createElement('img'); // HTMLImageElement

    // Ustawienie atrybutu
    $img.setAttribute('src', imageUrl);

    // Wykorzystanie ClassList API
    $img.classList.add('mt-3');

    // Funkcja strzałkowa
    $img.addEventListener('click', () => {
        console.log('obrazek został kliknięty');

        const bigImageUrl = imageUrl
            .replace('300', '600')
            .replace('150', '300');

        // Otwieramy nowe okno z obrazkiem
        window.open(bigImageUrl);
    });

    // Pobranie referencji do kontenera
    const $gallery = document.querySelector('#gallery'); // HTMLDivElement

    // Właściwy proces renderowania — dodajemy element do drzewa DOM
    $gallery.append($img);
}

function displayPhotos(gallery) {
    console.log('displayPhotos()', gallery);
    // for (let i = 0; i < gallery.length; i++) {
    //     render(gallery[i]);
    // }

    // Funkcja anonimowa
    // gallery.forEach(function (imageUrl) {
    //     render(imageUrl);
    // });

    // gallery.forEach((imageUrl) => {
    //     render(imageUrl);
    // });

    const isEmptyGallery = (gallery.length === 0);

    if (isEmptyGallery) {
        displayEmptyGalleryMessage();
    } else if (gallery.length === 1) {
        // Galeria ma tylko jeden obrazek
        // displayGalleryWithSingleImageMessage();
    } else {
        // Wyrenderuj wszystkie obrazki
        gallery.forEach(render);
    }
}

function displayEmptyGalleryMessage() {
    console.log('displayEmptyGalleryMessage()');

    // 1. Zmienna przechowująca tekst, który będzie wyświetlony
    const text = 'Galeria jest jest pusta';

    // 2. Pobieramy referencję do kontenera ze zdjęciami
    const $gallery = document.querySelector('div#gallery');

    // 3. Wrzucamy (czyt. ustawiamy) treść kontenera
    // $gallery.textContent = text;
    $gallery.innerHTML = `<p class="alert alert-danger">${text}</p>`; // interpolacja
}

function displayGallerySize() {
    // Pobieramy liczbę elementów kolekcji obrazków
    const gallerySize = document.querySelectorAll('img').length; // 5, 6, 7...

    // Referencja do nagłówka
    const $h1 = document.querySelector('h1.display-1');

    // Dopisanie tekstu
    $h1.textContent += ' (' + gallerySize + ')';
}

function displayImagesUrls() {
    const images = document.querySelectorAll('img');
    console.log(images.length);

    for (let i = 0; i < images.length; i++) {
        alert(images[i].src);
    }
}

function main() {
    console.log('main()');

    // displayGallerySize(); // 3
    displayPhotos(photos);
    displayGallerySize(); // 6

    // displayImagesUrls();
}

// Fn main() uruchamia się od razu
main();

// Fn main() uruchomi się, kiedy przeglądarka załaduje całego HTMLa i go sparsuje
// window.addEventListener('DOMContentLoaded', main);

// Fn main() uruchomi kiedy cała strona wraz obrazki się załaduje
// window.addEventListener('load', main);
