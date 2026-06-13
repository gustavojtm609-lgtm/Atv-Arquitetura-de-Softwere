// O Gateway que NÃO pode ser alterado
class StripeLegadoAPI {
    enviarTransacao(montanteEmCentavos) {
        console.log(`[Stripe Legado] Transação recebida com sucesso: ${montanteEmCentavos} centavos.`);
        return true;
    }
}

// O Adapter que faz o legado parecer uma Cobranca normal do seu sistema
class StripeAdapter {
    constructor() {
        this.apiAntiga = new StripeLegadoAPI();
    }

    processar(valor) {
        // Adapta o float (ex: 150.50) para int em centavos (15050)
        const valorConvertido = Math.round(valor * 100);
        this.apiAntiga.enviarTransacao(valorConvertido);
    }
}

// Testando
const cobrancaAdaptada = new StripeAdapter();
cobrancaAdaptada.processar(150.50); // O sistema envia float, o adapter converte.