class DocumentoAssinado {
    constructor() { this.estado = "Válido"; }
}

// O Comando Específico
class RevogarDocumentoComando {
    constructor(documento) {
        this.documento = documento;
    }

    executar() {
        this.documento.estado = "Revogado";
        console.log("Comando: Documento foi Revogado.");
    }

    desfazer() {
        this.documento.estado = "Válido";
        console.log("Comando Desfeito (Undo): Documento voltou a ser Válido.");
    }
}

// O Gerenciador que mantém o histórico
class HistoricoAcoes {
    constructor() {
        this.pilhaExecucao = [];
    }

    executar(comando) {
        comando.executar();
        this.pilhaExecucao.push(comando); // Guarda na pilha
    }

    desfazer() {
        if (this.pilhaExecucao.length > 0) {
            const ultimoComando = this.pilhaExecucao.pop(); // Tira o último da pilha
            ultimoComando.desfazer();
        } else {
            console.log("Não há ações para desfazer.");
        }
    }
}

// Testando
const meuDocumento = new DocumentoAssinado();
const gerenciadorAcoes = new HistoricoAcoes();
const comandoRevogar = new RevogarDocumentoComando(meuDocumento);

gerenciadorAcoes.executar(comandoRevogar);
console.log(`Estado atual: ${meuDocumento.estado}`); // Revogado

gerenciadorAcoes.desfazer();
console.log(`Estado atual: ${meuDocumento.estado}`); // Válido