
$(document).ready(function(){
    $.validator.addMethod("emailOrPhone", function(value, element) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phonePattern = /^[0-9]{10}$/;

        return this.optional(element) || emailPattern.test(value) || phonePattern.test(value);

     }, "Enter a valid email or 10 digit phone number");

    $("#signup-form").validate({
        rules:{
            fname: {
                required: true,
                minlength: 3
            },
            sname: {
                required: true,
                minlength: 2
            },
            email: {
                emailOrPhone: true,
                required: true,
                email: false
            },
            password: {
                minlength: 6,
                maxlength: 12,
                required: true
            },
            day: {
                required: true
            },
            month:{
                required: true
            },
            year: {
                required: true
            },
            Gender: {
                required: true

            }

        },
        messages: {
            fname :{
                required: "Enter your first name",
                minlength: "First name must be at least 3 characters"
            },
            sname: {
                required: "Enter your last name",
                minlength: "Last name must be at least 2 characters"
            },
            email: {
                emailOrPhone: "Please enter a valid email address or phone",
                required: "Enter your email address or phone"
            },
            password: {
                minlength: "Password must be at least 6 characters",
                maxlength: "Password can be at most 12 characters",
                required: "Enter a password"
            },
            day: {
                required: "Select a day"
            },
            month: {
                required: "Select a month"
            },
            year: {
                required: "Select a year"
            },
            Gender: {
                required: "Please select your gender"

            }
        }

    })
})