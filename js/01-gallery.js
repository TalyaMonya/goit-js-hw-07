import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector('.js-gallery');


function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`).join('');
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', heandlerGalleryClick);

function heandlerGalleryClick(evt) {
    evt.preventDefault();

    if (evt.target === evt.currentTarget) return;
    
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="1280">`,
        {
            onShow: (instance) => {
                window.addEventListener('keydown', onEscKeyPress);
            },
            onClose: (instance) => {
                window.removeEventListener('keydown', onEscKeyPress);
            },
        }
    );

    instance.show();

    function onEscKeyPress(e) {
        const ESC_KEY_CODE = 'Escape';
        if (ESC_KEY_CODE !== e.code) return;
        instance.close();
    }
};

