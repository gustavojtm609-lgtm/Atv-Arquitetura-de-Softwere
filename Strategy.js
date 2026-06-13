// Estratégias disponíveis
class TransporteAereo { 
    calcularCusto(distancia) { 
        return distancia * 12.5; 
    } 
}

class TransporteTerrestre { 
    calcularCusto(distancia) { 
        return distancia * 6.0; 
    } 
}

class TransporteMaritimo { 
    calcularCusto(distancia) { 
        return 0.0; 
    } 
}

// O Calculador que utiliza a estratégia dinamicamente
class CalculadoraEnvio {
    constructor() {
        this.estrategiaEnvio = null;
    }

    definirEstrategia(estrategia) {
        this.estrategiaEnvio = estrategia;
    }

    obterValor(distancia) {
        if (!this.estrategiaEnvio) throw new Error("Estratégia de envio não definida!");
        return this.estrategiaEnvio.calcularCusto(distancia);
    }
}

// Testando
const calculadora = new CalculadoraEnvio();
calculadora.definirEstrategia(new TransporteAereo());
console.log(`Envio Aéreo: R$ ${calculadora.obterValor(15.0).toFixed(2)}`);

calculadora.definirEstrategia(new TransporteMaritimo());
console.log(`Envio Marítimo: R$ ${calculadora.obterValor(15.0).toFixed(2)}`);