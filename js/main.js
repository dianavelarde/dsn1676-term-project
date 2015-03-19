var $btnMove = $('.btn-move');
var $book = $('.book');

$btnMove.on('click', function () {
    $book.toggleClass('js-book');
});
