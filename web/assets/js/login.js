let btn_accept = document.getElementById('btn_accept')

btn_accept.onclick = (event) => {
    event.preventDefault();

    const email = document.getElementById('email')
    const password = document.getElementById('password')


    axios.post('https://tasks-crud.academlo.com/api/auth/login', {
        email: email.value,
        password: password.value
    })
        .then(function (response) {
            
            const bearer = response.data.substring(4, response.data.length);
            console.log(bearer)
            location.href = "todo.html?auth="+bearer;
        })
        .catch(function (error) {
            alert(error);
        });
}