// Simulação de uma transação existente
class TransacaoDebito {
    processar(valor) {
        console.log(`Processando Débito de R$ ${valor.toFixed(2)}`);
    }
}

// Decorator para adicionar Logs
class RastreioDecorator {
    constructor(transacaoEmbutida) {
        this.transacaoEmbutida = transacaoEmbutida;
    }

    processar(valor) {
        console.log(`[RASTREIO] Iniciando operação no valor de R$ ${valor.toFixed(2)}`);
        this.transacaoEmbutida.processar(valor);
    }
}

// Decorator para aplicar Descontos
class VoucherDecorator {
    constructor(transacaoEmbutida, taxaDesconto) {
        this.transacaoEmbutida = transacaoEmbutida;
        this.taxaDesconto = taxaDesconto;
    }

    processar(valor) {
        const valorAbatido = valor - (valor * (this.taxaDesconto / 100));
        console.log(`[VOUCHER] Aplicado desconto de ${this.taxaDesconto}%.`);
        this.transacaoEmbutida.processar(valorAbatido);
    }
}

// Testando a combinação (aninhamento)
const transacaoFinal = new RastreioDecorator(
    new VoucherDecorator(new TransacaoDebito(), 10)
);

transacaoFinal.processar(200.00);