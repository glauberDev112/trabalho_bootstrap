$(document).ready(function () {
    $('.tel').mask('(00) 90000-0000')
    $('.user-phone').mask('(00) 0000-0000')
    $('.login_btn').click(function () {
        $('.login').css({
            'display':'block'
        })
        
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            tel: {
                required: true
            },
            ema: {
                required: true,
                email: true
            }
        },
        messages: {
            nome:'nome é necessario',
            tel:'telefone é necessario',
            ema:'email é necessario'
        },
        submitHandler: function (e) {
            $('.login').css({
                'display':'none'
            })
            alert('seja bem-vindo(a)')
            $('.login_btn').css({
                'display':'none'
            })

        }
    })
})