// Stubs (Simulações simples dos subsistemas)
class ArmazemService {
    alocar(itens) {
        console.log("- Itens alocados no armazém.");
    }
}

class CobrancaService {
    processarCobranca(valor) { 
        console.log(`- Processada cobrança de R$ ${valor.toFixed(2)}`);
    }
}

class CacheService { 
    esvaziar() { 
        console.log("- Cache temporário esvaziado."); 
    } 
}

class SmsService { 
    avisar(pedido) { 
        console.log("- SMS de aviso enviado ao cliente."); 
    } 
}

// A Fachada que orquestra tudo
class FinalizacaoFacade {
    constructor() {
        this.armazem = new ArmazemService();
        this.cobranca = new CobrancaService();
        this.cache = new CacheService();
        this.sms = new SmsService();
    }

    finalizar(pedido) {
        console.log("Iniciando processamento da compra...");
        this.armazem.alocar(pedido.itens);
        this.cobranca.processarCobranca(pedido.total);
        this.cache.esvaziar();
        this.sms.avisar(pedido);
        console.log("Compra processada com sucesso!\n");
    }
}

// Testando
const fachada = new FinalizacaoFacade();
fachada.finalizar({ itens: ["Monitor"], total: 850.00 });