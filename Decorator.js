// Simulação de um pagamento existente
class PagamentoPix {
    processar(valor) {
        console.log(`Processando PIX de R$ ${valor.toFixed(2)}`);
    }
}

// Decorator para adicionar Logs
class LogDecorator {
    constructor(pagamentoEmbutido) {
        this.pagamentoEmbutido = pagamentoEmbutido;
    }

    processar(valor) {
        console.log(`[LOG] Iniciando transação no valor de R$ ${valor.toFixed(2)}`);
        this.pagamentoEmbutido.processar(valor);
    }
}

// Decorator para aplicar Descontos
class DescontoDecorator {
    constructor(pagamentoEmbutido, percentual) {
        this.pagamentoEmbutido = pagamentoEmbutido;
        this.percentual = percentual;
    }

    processar(valor) {
        const valorComDesconto = valor - (valor * (this.percentual / 100));
        console.log(`[DESCONTO] Aplicado ${this.percentual}%.`);
        this.pagamentoEmbutido.processar(valorComDesconto);
    }
}

// Testando a combinação (aninhamento)
const pagamento = new LogDecorator(
    new DescontoDecorator(new PagamentoPix(), 10)
);

pagamento.processar(200.00);