# Laboratório - Padrões Criacionais

**Alunos:** - Gabriel Muehlbauer e Gustavo Moraes

## Sobre o Projeto
Este repositório contém a implementação do backend simulado de um e-commerce. O sistema foi projetado para gerenciar produtos, pedidos e formas de pagamento, aplicando Padrões de Projeto Criacionais para resolver problemas reais de design de software. O código foi desenvolvido em JavaScript (Node.js).

---

## Decisões Arquiteturais e Justificativas 

Ao longo do desenvolvimento, aplicamos três padrões criacionais. Abaixo, explicamos o motivo de cada escolha e a reflexão sobre como o sistema seria sem eles.

### 1. Singleton (Conexão com o Banco de Dados)
* **O problema:** Conexões com banco de dados consomem muitos recursos. 
* **A solução (Justificativa):** O Singleton faz sentido aqui porque garante que apenas uma única instância de conexão seja criada durante toda a execução do sistema.
* **Sem o padrão:** A cada nova requisição, o sistema abriria uma nova conexão com o banco. Em um cenário de alto tráfego, isso sobrecarregaria o servidor e poderia derrubar o banco de dados.

###2. Factory Method (Sistema de Pagamentos)
***O problema:** O sistema precisa lidar com diferentes formas de pagamento sem acoplar o código principal às classes concretas.
* **A solução (Justificativa):** Criamos uma Factory que recebe o tipo de pagamento e retorna o objeto correspondente. Se precisarmos adicionar uma nova forma de pagamento (como criptomoedas), nossa solução facilita isso imensamente: basta criar a nova classe e adicionar uma condição na Factory. O código que processa a compra permanece intocado.
* **Sem o padrão:** O código principal ficaria poluído com múltiplos `if/else` ou `switch cases` para instanciar manualmente cada tipo de pagamento, violando o princípio de Aberto/Fechado (Open/Closed Principle) do SOLID.

### 3. Builder (Montagem de Pedidos)
* **O problema:** Um pedido de e-commerce pode ter várias propriedades (itens, endereço, forma de pagamento), resultando em um objeto complexo de ser instanciado.
***A solução (Justificativa):** O Builder é mais adequado aqui do que um construtor com muitos parâmetros porque permite a construção do objeto passo a passo, de forma fluente.Ele também garante que o objeto final só seja gerado se estiver em um estado válido (como a validação de não permitir um pedido sem itens).
* **Sem o padrão:** Sofreríamos com o "anti-pattern" do construtor telescópico. Teríamos que instanciar objetos passando uma lista gigantesca de argumentos, onde muitos poderiam ser `null`, tornando a leitura e a manutenção do código muito difíceis.

---

## Como Rodar o Projeto 

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina.

### Execução
1. Clone este repositório em sua máquina local.
2. Abra o terminal na pasta raiz do projeto (`PADRÕESDEPROJETOCRIACIONAIS`).
3. Execute os arquivos individualmente usando o Node para visualizar os testes de cada padrão:

- **Para testar o Singleton:**
  ```bash
  node database.js

Baixar o container