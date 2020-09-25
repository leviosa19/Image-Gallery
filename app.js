$(document).ready(function () {
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        image: {
            titleSrc: 'title'
        },
        gallery: {
            enabled: true
        }
    });
});
