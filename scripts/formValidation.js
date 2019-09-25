$(document).ready(function() {
    $('.button').click(function () {
        validateForm();
    });

    function validateForm() {
        let nameReg = /^[a-z ,.'-]+$/i;
        let phoneReg = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
        let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let date = $('#date').val();
        let comments = $('#comments').val();

        let inputArray = new Array(name, email, phone, date, comments);
        let messageArray = new Array("name", "email address", "phone number", "wedding date")

        $('.error').hide();

        if (inputArray[0] === "") {
            $('label.name').after(`<span class=error>Please enter your ` + messageArray[0] + `.</span>`);
        } else if (!nameReg.test(name)) {
            $('label.name').after(`<span class=error> Please use only letters for your ` + messageArray[0] + `.</span>`);
        } else if (inputArray[1] === "") {
            $('label.email').after(`<span class=error>Please enter your ` + messageArray[1] + `.</span>`);
        } else if (!emailReg.test(email)) {
            $('label.email').after(`<span class=error>Please enter a valid ` + messageArray[1] + `.</span>`);
        } else if (!phoneReg.test(phone)) {
            $('label.phone').after(`<span class=error>Please enter a valid ` + messageArray[2] + `.</span>`);
        } else if (inputArray[3] === "") {
            $('label.date').after(`<span class=error>Please select your ` + messageArray[3] + `.</span>`);
        } else {
            $('#contact').submit();
        }
    }
});
