$(function(){
    var last_info, now_info = $('#n1'), next_info = $('#n2');

    function changeInfo(now, next) {
        now.hide();
        next.fadeIn('slow');
        last_info = now_info;
        now_info = next_info;
        next_info = last_info;
    }

    setInterval(function(){
        changeInfo(now_info, next_info)
    },5000)
})