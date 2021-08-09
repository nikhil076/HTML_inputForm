{
    const name = document.querySelector('#name');
    const errorName = document.querySelector('.error');
    name.addEventListener('input', function () {
        let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if (nameRegex.test(name.value))
            errorName.textContent = "";
        else
            errorName.textContent = "Name is Incorrect!";
    });
}
