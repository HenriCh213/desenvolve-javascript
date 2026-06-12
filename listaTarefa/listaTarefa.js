let listaTarefas = JSON.parse(localStorage.getItem('tarefasSalvas')) || [];

function salvarNoLocalStorage() {
    localStorage.setItem('tarefasSalvas', JSON.stringify(listaTarefas));
}

function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const descricao = input.value.trim();

    if (descricao) {
        listaTarefas.push({
            descricao: descricao,
            status: false
        });

        input.value = '';
        salvarNoLocalStorage(); 
        renderizarlistaTarefas();
    }
}

function alterarStatus(indice) {
    listaTarefas[indice].status = !listaTarefas[indice].status;
    salvarNoLocalStorage(); 
    renderizarlistaTarefas();
}

function excluirTarefa(indice) {
    listaTarefas.splice(indice, 1); 
    salvarNoLocalStorage(); 
    renderizarlistaTarefas();
}

function renderizarlistaTarefas() {
    const listalistaTarefas = document.getElementById('listaTarefas');
    listalistaTarefas.innerHTML = '';

    listaTarefas.forEach((tarefa, indice) => {
        const divTarefa = document.createElement('div');
        divTarefa.className = 'tarefa';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => alterarStatus(indice);

        const descricao = document.createElement('span');
        descricao.textContent = tarefa.descricao;
        descricao.style.flex = "1"; 
        if (tarefa.status) {
            descricao.className = 'concluida';
        }

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.className = 'btn-excluir';
        btnExcluir.onclick = () => excluirTarefa(indice);

        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(descricao);
        divTarefa.appendChild(btnExcluir);

        listalistaTarefas.appendChild(divTarefa);
    });
}

document.getElementById('novaTarefa').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

renderizarlistaTarefas();