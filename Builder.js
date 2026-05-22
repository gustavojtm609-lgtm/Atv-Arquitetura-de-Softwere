// A classe do objeto final
class Pedido {
    constructor() {
        this.itens = [];
        this.endereco = null;
        this.pagamento = null;
    }
}

// O construtor passo a passo 
class PedidoBuilder {
    constructor() {
        this.pedido = new Pedido();
    }

    // Retorna o próprio builder (this) para chamadas encadeadas 
    adicionarItem(item) {
        this.pedido.itens.push(item);
        return this; 
    }

    setEndereco(endereco) {
        this.pedido.endereco = endereco;
        return this;
    }

    setPagamento(pagamento) {
        this.pedido.pagamento = pagamento;
        return this;
    }

    // Validação e retorno do objeto finalizado 
    build() {
        if (this.pedido.itens.length === 0) { // Validação 
            throw new Error("Operação inválida: O pedido deve conter pelo menos um item.");
        }
        return this.pedido;
    }
}

// Testando o Builder de forma fluente 
try {
    const meuPedido = new PedidoBuilder()
        .adicionarItem("Notebook")
        .adicionarItem("Mouse")
        .setEndereco("Rua das Dores, 123")
        .setPagamento("PIX")
        .build();
        
    console.log(meuPedido);
} catch (erro) {
    console.error(erro.message);
}