$("#formValidation").validate({

    rules: {
        name: {
            minlength: 2
        },
        email: {
            email: true
        },
        phone: {
            number: true,
            minlength: 10,
            maxlength: 10,
        },
        start_date: {
            required: true
        },
        end_date: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Please enter your Name",
            minlength: "Name atleast 2 characters",
        },
        email: "Please enter your email",
        phone: "Please enter your phone number",
        start_date: "Please select Starting Date",
        end_date: "Please select Ending Date",
        description: "Please write about your work experience",

    },




    submitHandler: function (form) {
        form.submit();
    }
});