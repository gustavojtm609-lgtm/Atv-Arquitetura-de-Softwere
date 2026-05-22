class DatabaseConnection {
    constructor() {
        // Verifica se a instância já existe para impedir múltiplas criações
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        
        console.log("Conectando ao banco de dados...");
        this.status = "Conectado";
        
        // Salva a instância atual
        DatabaseConnection.instance = this;
    }

    // Método estático que retorna sempre a mesma instância 
    static getInstance() {
        // Lazy initialization: cria apenas na primeira chamada 
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}
// Testando o Singleton
const conexao1 = DatabaseConnection.getInstance();
const conexao2 = DatabaseConnection.getInstance();
console.log(conexao1 === conexao2); // Retornará true, provando que é a mesma instância