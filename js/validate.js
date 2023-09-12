
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()
    
        let error = formValidate(form)

        let formData = new FormData(form)

        if(error === 0) {
            form.classList.add('_sending')
            let response = await fetch('sendmail.php', {
                method: 'post',
                body: formData
            })
            if (response.ok) {
                let result = await response.json()
                alert(result.message)
                formPreview.innerHTML = ''
                form.reset()
                form.classList.remove('_sending')
            }else {
                alert('Ошибка')
                form.classList.remove('_sending')
            }
        } else {
            alert('Заполните все поля')
        }
    }
    
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)
            
            if (input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input)
                    error++
                }
            }else {
              if (input.value === '') {
                formAddError(input)
                error++
              }  
            }
        }
        return error
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }



})

// InputMask
jQuery(function($) {
    $("input[name=phone]").mask("+7 (999) 999-99-99");
});





// InputMask

//  jQuery(function($) {
//     $("input[name=phone]").mask("+7 (999) 999-99-99");

//         jQuery('.form_button').click( function() {
//         let form = jQuery(this).closest('form');
        
//             if ( form.valid() ) {
//                 form.css('opacity','.5');
//                 var actUrl = form.attr('action');

//                 jQuery.ajax({
//                     url: actUrl,
//                     type: 'post',
//                     dataType: 'html',
//                     data: form.serialize(),
//                     success: function(data) {
//                         form.html(data);
//                         form.css('opacity','1');
//                         //form.find('.status').html('форма отправлена успешно');
//                         //$('#myModal').modal('show') // для бутстрапа
//                     },
//                     error:	 function() {
//                         form.find('.status').html('серверная ошибка');
//                     }
//                 });
//             }
//         });
//     });

//     // validate
    

//     function validateForms(selector, rules){
//         new window.JustValidate(selector, {
//             rules: rules,
//             submitHandler: function (form, values, ajax){
//                 console.log(form);
//             }
//         })
//     }

//     validateForms('.form', {required: true, email:true, name:true, phone:true,});