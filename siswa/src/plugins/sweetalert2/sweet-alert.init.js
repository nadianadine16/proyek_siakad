!function ($) {
    "use strict";

    var SweetAlert = function () {
    };

    //examples
    SweetAlert.prototype.init = function () {

        //Success Message
        $('#sa-success').click(function () {
            setTimeout(function(){ 

                window.location.href = "absen.html";
             
             }, 3000);
            swal(
                {
                    title: 'Data Berhasil Dikumpulkan',
                    type: 'success',
                    showConfirmButton: false,
                }
            )
        });

        //Custom Position Message
        $('#sa-custom-position').click(function () {
            
            swal(
                {
                    position: 'center',
                    type: 'success',
                    title: 'Data Berhasil Dikumpulkan',
                    showConfirmButton: false,
                }
            )
        });


    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);