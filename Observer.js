// Observadores (Quem quer ser notificado)
class WhatsAppObserver { 
    atualizar(requisicao) { 
        console.log(`Enviando WhatsApp: A requisição #${requisicao.codigo} foi aprovada.`); 
    } 
}

class LogisticaObserver { 
    atualizar(requisicao) { 
        console.log(`Logística: Preparando envio da requisição #${requisicao.codigo}.`); 
    } 
}

class AuditoriaObserver { 
    atualizar(requisicao) { 
        console.log(`Auditoria: Registro salvo para a requisição #${requisicao.codigo}.`); 
    } 
}

// O Sujeito (Quem emite o evento)
class Requisicao {
    constructor(codigo) {
        this.codigo = codigo;
        this.inscritos = []; // Lista de inscritos
    }

    inscrever(inscrito) {
        this.inscritos.push(inscrito);
    }

    aprovar() {
        console.log(`\nAprovando requisição #${this.codigo}...`);
        this.notificar(); // Dispara todos os inscritos
    }

    notificar() {
        this.inscritos.forEach(inscrito => inscrito.atualizar(this));
    }
}

// Testando
const minhaRequisicao = new Requisicao(405);
minhaRequisicao.inscrever(new WhatsAppObserver());
minhaRequisicao.inscrever(new LogisticaObserver());
minhaRequisicao.inscrever(new AuditoriaObserver());

minhaRequisicao.aprovar();