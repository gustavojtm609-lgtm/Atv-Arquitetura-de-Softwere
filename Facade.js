// Stubs (Simulações simples dos subsistemas)
class EstoqueService {
    reservar(itens) {
        console.log("- Estoque reservado.");
    }
}

class PagamentoService {
    cobrar(valor) { 
        console.log(`- Cobrado R$ ${valor.toFixed(2)}`);
    }
}

class CarrinhoService { 
    limpar() { 
        console.log("- Carrinho limpo."); 
    } 
}

class EmailService { 
    confirmar(pedido) { 
        console.log("- E-mail de confirmação enviado."); 
    } 
}

// A Fachada que orquestra tudo
class CheckoutFacade {
    constructor() {
        this.estoque = new EstoqueService();
        this.pagamento = new PagamentoService();
        this.carrinho = new CarrinhoService();
        this.email = new EmailService();
    }

    finalizar(pedido) {
        console.log("Iniciando finalização de pedido...");
        this.estoque.reservar(pedido.itens);
        this.pagamento.cobrar(pedido.total);
        this.carrinho.limpar();
        this.email.confirmar(pedido);
        console.log("Pedido finalizado com sucesso!\n");
    }
}

// Testando
const facade = new CheckoutFacade();
facade.finalizar({ itens: ["Teclado"], total: 350.00 });