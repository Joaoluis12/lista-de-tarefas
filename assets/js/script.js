const tarefa = document.getElementById('tarefa');
var formCheck = document.querySelector('.form-check');
var novaTarefa = '';
var i=0;
// var adicionar = document.getElementById('bt-adicionar');

function inserirTarefa(){
    let tempTarefa = tarefa.value;  

    if(novaTarefa == ''){
        novaTarefa = '<input type="checkbox" value="" id="ck'+i+'" name="" id=""><label for="ck'+i+'"> ' + tempTarefa + '</label>';
    } else {
        novaTarefa = novaTarefa + '<br> <input type="checkbox" value="" id="ck'+i+'" name="" id=""><label for="ck'+i+'"> ' + tempTarefa + '</label>';
    }
    formCheck.innerHTML = novaTarefa;
    tarefa.value = '';
    i++;
}

// adicionar.addEventListener('click', inserirTarefa());