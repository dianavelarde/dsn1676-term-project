var $btnMove = $('.btn-move');
var $book = $('.book');

$btnMove.on('click', function () {
    $book.toggleClass('js-book');
});

var $btnMove2 = $('.btn-move2');
var $quinoa = $('.quinoa');

$btnMove2.on('click', function () {
    $quinoa.toggleClass('js-quinoa');
});
