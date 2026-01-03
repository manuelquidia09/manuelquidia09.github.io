let carrinho = [];

function adicionarProduto(nome, preco, imagem) {
    carrinho.push({ nome, preco, imagem });
    // Não mostra mensagem, só adiciona
}

function mostrarCarrinho() {
    const tabela = document.getElementById("tabelaCarrinho");
    tabela.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        const linha = tabela.insertRow();
        linha.insertCell(0).innerHTML = `<img src="imagens/${item.imagem}" alt="${item.nome}">`;
        linha.insertCell(1).innerText = item.nome;
        linha.insertCell(2).innerText = "USD " + item.preco.toFixed(2);
        linha.insertCell(3).innerHTML = `<button onclick="removerProduto(${index})">Remover</button>`;
        total += item.preco;
    });

    document.getElementById("totalCarrinho").innerText = "Total: USD " + total.toFixed(2);
}

function removerProduto(index) {
    carrinho.splice(index, 1);
    mostrarCarrinho();
}

function finalizarCompra() {
    if(carrinho.length === 0){
        alert("Carrinho vazio!");
        return;
    }
    alert("Compra finalizada! Obrigado pela preferência.");
    carrinho = [];
    mostrarCarrinho();
}
