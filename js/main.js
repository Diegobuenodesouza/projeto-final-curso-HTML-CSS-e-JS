(function(){
    var $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var $btmMenu = document.querySelector('.header-btnmenu');
    $btmMenu.removeAttribute('style')

    var menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.header-btnmenu',
        widthEnabled: 1024
    })

})()

