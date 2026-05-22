// 1. "Interface" base simulada 
class Pagamento {
    processar(valor) {
        throw new Error("O método processar() deve ser implementado");
    }
}

// 2. Implementações concretas 
class PagamentoCartao extends Pagamento {
    processar(valor) { 
        console.log(`Processando Cartão: R$ ${valor.toFixed(2)}`); 
    }
}

class PagamentoPix extends Pagamento {
    processar(valor) { 
        console.log(`Processando PIX: R$ ${valor.toFixed(2)}`); 
    }
}

class PagamentoBoleto extends Pagamento {
    processar(valor) { 
        console.log(`Gerando Boleto: R$ ${valor.toFixed(2)}`); 
    }
}

// 3. A Factory 
class PagamentoFactory {
    static criarPagamento(tipo) {
        switch(tipo.toUpperCase()) {
            case 'PIX': 
                return new PagamentoPix();
            case 'CARTAO': 
                return new PagamentoCartao();
            case 'BOLETO':
                return new PagamentoBoleto();
            default: 
                throw new Error("Tipo de pagamento desconhecido.");
        }
    }
}

// Testando a Factory
const meuPagamento = PagamentoFactory.criarPagamento('PIX'); // O código não conhece a classe PagamentoPix 
meuPagamento.processar(150.50);