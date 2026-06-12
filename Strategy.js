// Estratégias disponíveis
class FreteCorreios { 
    calcular(peso) { 
        return peso * 10.5; 
    } 
}

class FreteJadlog { 
    calcular(peso) { 
        return peso * 8.0; 
    } 
}

class FreteRetirada { 
    calcular(peso) { 
        return 0.0; 
    } 
}

// O Carrinho que utiliza a estratégia dinamicamente
class Carrinho {
    constructor() {
        this.estrategiaFrete = null;
    }

    setFrete(estrategia) {
        this.estrategiaFrete = estrategia;
    }

    calcularFrete(peso) {
        if (!this.estrategiaFrete) throw new Error("Estratégia de frete não definida!");
        return this.estrategiaFrete.calcular(peso);
    }
}

// Testando
const carrinho = new Carrinho();
carrinho.setFrete(new FreteCorreios());
console.log(`Frete Correios: R$ ${carrinho.calcularFrete(2.5).toFixed(2)}`);

carrinho.setFrete(new FreteRetirada());
console.log(`Frete Retirada: R$ ${carrinho.calcularFrete(2.5).toFixed(2)}`);