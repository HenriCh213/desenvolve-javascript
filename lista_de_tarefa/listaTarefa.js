let listaTarefas = [];
        
function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const descricao = input.value.trim();
            
    if (descricao) {
        listaTarefas.push({
        descricao: descricao,
        status: false
    });
                
    input.value = '';
                
    renderizarlistaTarefas();
    }
}
        
function alterarStatus(indice) {
    listaTarefas[indice].status = !listaTarefas[indice].status;
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
        if (tarefa.status) {
            descricao.className = 'concluida';
        }
                
        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(descricao);
                
        listalistaTarefas.appendChild(divTarefa);
        });
}
        
document.getElementById('novaTarefa').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});
        
renderizarlistaTarefas();
