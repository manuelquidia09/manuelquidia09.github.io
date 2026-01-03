let carrinho = [];

// Adicionar produto ao carrinho
function adicionarCarrinho(nome, preco, imagem) {
    carrinho.push({nome, preco, imagem});
    salvarCarrinho();
}

// Salvar no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Carregar carrinho
function carregarCarrinho() {
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    atualizarTabela();
}

// Atualizar tabela na página carrinho
function atualizarTabela() {
    const tabela = document.querySelector('#tabela-carrinho tbody');
    tabela.innerHTML = '';
    let total = 0;
    carrinho.forEach((produto, index) => {
        total += produto.preco;
        tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td><img src="${produto.imagem}" alt="${produto.nome}" style="width:50px;"></td>
                <td>$${produto.preco}</td>
                <td><button onclick="removerProduto(${index})" style="background-color:#dc3545;color:white;border:none;padding:5px 8px;border-radius:5px;cursor:pointer;">X</button></td>
            </tr>
        `;
    });
    document.getElementById('total-carrinho').innerText = `Total: $${total}`;
}

// Remover produto
function removerProduto(index) {
    carrinho.splice(index, 1);
    salvarCarrinho();
    atualizarTabela();
}

// Finalizar compra
function finalizarCompra() {
    if(carrinho.length === 0){
        alert("Carrinho vazio!");
        return;
    }
    alert("Compra finalizada com sucesso! Obrigado!");
    carrinho = [];
    salvarCarrinho();
    atualizarTabela();
}

// Carregar ao abrir página
document.addEventListener('DOMContentLoaded', carregarCarrinho);
