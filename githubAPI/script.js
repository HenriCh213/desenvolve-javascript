const Busca = document.getElementById('Busca');
const input = document.getElementById('input');
const listaUsuarios = document.getElementById('lista-usuarios');

async function pesquisarUsuario() {
    const user = input.value.trim();
    
    listaUsuarios.innerHTML = '';

    if (user === '') {
        alert('Digite um nome para buscar!!!');
        return;
    }

    try {

        const response = await fetch(`https://api.github.com/search/users?q=${user}`);
        const data = await response.json();


        if (data.items && data.items.length > 0) {
            data.items.forEach(user => {
                const li = document.createElement('li');
                
                li.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}">
                    <a href="${user.html_url}" target="_blank">${user.login}</a>
                `;
                
                listaUsuarios.appendChild(li);
            });
        } else {
            listaUsuarios.innerHTML = '<p Não foram encontrados usuários para esta pesquisa.</p>';
        }
    } catch (error) {
        console.error('Erro na busca:', error);
        listaUsuarios.innerHTML = '<p Erro ao conectar com a API. Tente novamente mais tarde!!!</p>';
    }
}

Busca.addEventListener('click', pesquisarUsuario);

