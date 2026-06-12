// Observadores (Quem quer ser notificado)
class EmailObserver { 
    atualizar(pedido) { 
        console.log(`Enviando email: O pedido #${pedido.id} foi confirmado.`); 
    } 
}

class EstoqueObserver { 
    atualizar(pedido) { 
        console.log(`Estoque: Dando baixa nos itens do pedido #${pedido.id}.`); 
    } 
}

class LogObserver { 
    atualizar(pedido) { 
        console.log(`Log: Auditoria salva para pedido #${pedido.id}.`); 
    } 
}

// O Sujeito (Quem emite o evento)
class Pedido {
    constructor(id) {
        this.id = id;
        this.observers = []; // Lista de inscritos
    }

    registrar(observer) {
        this.observers.push(observer);
    }

    confirmar() {
        console.log(`\nConfirmando pedido #${this.id}...`);
        this.notificar(); // Dispara todos os observers
    }

    notificar() {
        this.observers.forEach(obs => obs.atualizar(this));
    }
}

// Testando
const pedido = new Pedido(998);
pedido.registrar(new EmailObserver());
pedido.registrar(new EstoqueObserver());
pedido.registrar(new LogObserver());

pedido.confirmar();