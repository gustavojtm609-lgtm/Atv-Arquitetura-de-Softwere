// O Gateway que NÃO pode ser alterado
class PagSeguroLegadoAPI {
    enviarTransacao(valorEmCentavos) {
        console.log(`[PagSeguro Legado] Transação recebida com sucesso: ${valorEmCentavos} centavos.`);
        return true;
    }
}

// O Adapter que faz o legado parecer um Pagamento normal do seu sistema
class PagSeguroAdapter {
    constructor() {
        this.legado = new PagSeguroLegadoAPI();
    }

    processar(valor) {
        // Adapta o float (ex: 150.50) para int em centavos (15050)
        const valorConvertido = Math.round(valor * 100);
        this.legado.enviarTransacao(valorConvertido);
    }
}

// Testando
const pagamentoAdaptado = new PagSeguroAdapter();
pagamentoAdaptado.processar(150.50); // O sistema envia float, o adapter converte.