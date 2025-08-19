
let estoqueLivros = [];

function adicionarLivro(titulo, autor, quantidade) {
    for (let i = 0; i < estoqueLivros.length; i++) {
        if (estoqueLivros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            console.log(`O livro "${titulo}" já existe no estoque.`);
            return;
        }
    }
    
    const novoLivro = {
        titulo: titulo,
        autor: autor,
        quantidade: quantidade
    };
    
    estoqueLivros.push(novoLivro);
    console.log(`Livro "${titulo}" adicionado com sucesso!`);
}

function removerLivro(titulo) {
    let livroEncontrado = false;
    
    for (let i = 0; i < estoqueLivros.length; i++) {
        if (estoqueLivros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            estoqueLivros.splice(i, 1);
            livroEncontrado = true;
            console.log(`Livro "${titulo}" removido do estoque.`);
            break;
        }
    }
    
    if (!livroEncontrado) {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

function atualizarQuantidade(titulo, novaQuantidade) {
    let livroEncontrado = false;
    
    for (let i = 0; i < estoqueLivros.length; i++) {
        if (estoqueLivros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            estoqueLivros[i].quantidade = novaQuantidade;
            livroEncontrado = true;
            console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
            break;
        }
    }

    if (!livroEncontrado) {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

function listarLivros() {
    console.log("\nESTOQUE DE LIVROS ");
    
    if (estoqueLivros.length === 0) {
        console.log("Nenhum livro no estoque.");
        return;
    }
    
    estoqueLivros.forEach((livro, index) => {
        console.log(`${index + 1}. "${livro.titulo}" - ${livro.autor} (Quantidade: ${livro.quantidade})`);
    });
    
}

function buscarLivro(titulo) {
    for (let i = 0; i < estoqueLivros.length; i++) {
        if (estoqueLivros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            return estoqueLivros[i];
        }
    }
    return null;
}

function mostrarTotalLivros() {
    let total = 0;
    
    for (let i = 0; i < estoqueLivros.length; i++) {
        total += estoqueLivros[i].quantidade;
    }
    
    console.log(`Total de livros no estoque: ${total}`);
    return total;
}


adicionarLivro("Dom Casmurro", "Machado de Assis", 15);
adicionarLivro("1984", "George Orwell", 8);
adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 20);
adicionarLivro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 25);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 18);

atualizarQuantidade("1984", 12);

removerLivro("O Pequeno Príncipe");

const livroBuscado = buscarLivro("1984");
if (livroBuscado) {
    console.log(`Livro encontrado: "${livroBuscado.titulo}" - ${livroBuscado.quantidade} unidades`);
}

listarLivros();
mostrarTotalLivros();