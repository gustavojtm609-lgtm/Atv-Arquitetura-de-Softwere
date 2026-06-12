class PedidoSimples {
    constructor() { this.status = "Ativo"; }
}

// O Comando Específico
class CancelarPedidoComando {
    constructor(pedido) {
        this.pedido = pedido;
    }

    executar() {
        this.pedido.status = "Cancelado";
        console.log("Comando: Pedido foi Cancelado.");
    }

    desfazer() {
        this.pedido.status = "Ativo";
        console.log("Comando Desfeito (Undo): Pedido voltou a ser Ativo.");
    }
}

// O Gerenciador que mantém o histórico
class GerenciadorComandos {
    constructor() {
        this.historico = [];
    }

    executar(comando) {
        comando.executar();
        this.historico.push(comando); // Guarda na pilha
    }

    desfazer() {
        if (this.historico.length > 0) {
            const ultimoComando = this.historico.pop(); // Tira o último da pilha
            ultimoComando.desfazer();
        } else {
            console.log("Não há ações para desfazer.");
        }
    }
}

// Testando
const pedidoSimples = new PedidoSimples();
const gerenciador = new GerenciadorComandos();
const comandoCancelar = new CancelarPedidoComando(pedidoSimples);

gerenciador.executar(comandoCancelar);
console.log(`Status atual: ${pedidoSimples.status}`); // Cancelado

gerenciador.desfazer();
console.log(`Status atual: ${pedidoSimples.status}`); // Ativo