const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bearer = urlParams.get('auth')

const create_todo = () => {

    let modal = document.getElementById("modal-todo");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }

}

const list_todo = () => {
    axios.get('https://tasks-crud.academlo.com/api/tasks', {
        headers: {
            'Authorization': `Bearer ${bearer}`
        }
    })
        .then(function (response) {
            var ul = document.getElementById("todo-container");

            response.data.forEach(element => {
                var li = document.createElement("li");
                li.innerHTML = `
            <div class="card">
            <div style="float: right;">
                <button>
                    <i class="material-icons">edit</i>
                </button>
            </div>
            <div class="container">
                <h4>`+ element.name + ` ` + element.id + `</h4>
                <hr>
                <h4>DESCRIPCIÓN</h4>
                <p>`+ element.description + `</p>
            </div>
            </div>`;
                ul.appendChild(li);
            });
        })
        .catch(function (error) {
            location.href = "login.html";
        });
}

const btn_add_task = document.getElementById('btn_add_task')
btn_add_task.onclick = () => {
    create_todo()
}

list_todo()