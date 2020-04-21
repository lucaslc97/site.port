
$(document).ready(function () {



    $("#botao-hamb").click(function () {
        $("#botoes").toggle(function (e) {
            console.log(e)
        })
    })

    
    $('#botoes a').click(function () {
        $('#botoes a').removeClass("botaoClick");
        $(this).addClass("botaoClick")
    })


});


