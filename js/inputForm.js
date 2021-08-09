{
    const name = document.querySelector('#name');
    const errorName = document.querySelector('#errorName');
    name.addEventListener('input', function () {
        let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if (nameRegex.test(name.value))
            errorName.textContent = "";
        else
            errorName.textContent = "Name is Incorrect!";
    });


    const email = document.querySelector('#email');
    const errorEmail = document.querySelector('#errorEmail');
    email.addEventListener('input', function () {
        let emailRegex = RegExp(`^[\\w]+(?:[_+-\\.][\\w]+)*@(?:[\\w]+){1}(?:\\.[a-z]{2,}){1,2}$`);
        if (emailRegex.test(email.value))
            errorEmail.textContent = "";
        else
            errorEmail.textContent = "Email is Incorrect!";
    });

    const phone = document.querySelector('#tel');
    const errorTelephone = document.querySelector('#errorTelephone');
    phone.addEventListener('input', function () {
        let phoneRegex = RegExp('^[\\d]{2}[\\s][\\d]{10}$');
        if (phoneRegex.test(phone.value))
            errorTelephone.textContent = "";
        else
            errorTelephone.textContent = "Telephone is Incorrect!";
    });
}