var $btnMove = $('.btn-move');
var $book = $('.book');
var $btnMove2 = $('.btn-move2');
var $quinoa = $('.quinoa');
var $btnMove3 = $('.btn-move3');
var $izze = $('.izze');
var $btnMove4 = $('.btn-move4');
var $kiko = $('.kiko');

$btnMove.on('click', function () {
    $book.toggleClass('js-book');
});


$btnMove2.on('click', function () {
    $quinoa.toggleClass('js-quinoa');
});

$btnMove3.on('click', function () {
    $izze.toggleClass('js-izze');
});

$btnMove4.on('click', function () {
    $kiko.toggleClass('js-kiko');
});
