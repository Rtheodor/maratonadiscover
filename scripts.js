const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        
        description: 'luz',
        amount: -50001,
        date: '23/01/2021',
    }
    ,
    {
        
        description: 'website',
        amount: 500000,
        date: '23/01/2021',
    }
    ,
    {
        
        description: 'internet',
        amount: -100,
        date: '23/01/2021',

    }
    ,
    {
       
        description: 'app',
        amount: 280000,
        date: '23/01/2021',

    }
]

const Transaction = {
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction)

       App.reload()
    }
    ,

    incomes() {
        let income = 0;
        // pegar todas as transacoes
        Transaction.all.forEach(transaction => {
            // se ela for maior que zero
        if(transaction.amount > 0){
            //somar a uma variavel e retornar a variavel 
            income += transaction.amount;
        }

        })
        
        
        return income;

    },
    expenses() {
        let expense = 0;
        // pegar todas as transacoes
        Transaction.all.forEach(transaction => {
            // se ela for menor que zero
        if(transaction.amount < 0){
            //somar a uma variavel e retornar a variavel 
            expense += transaction.amount;
        }

        })
        
        
        return expense;

        
    },
    total() {
        return Transaction.incomes() + Transaction.expenses();
        
    }
}

const DOM = {

    transactionContainer:document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionContainer.appendChild(tr)
         
     }
    ,

    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" :
        "expense"

       const amount = Utils.formatCurrency(transaction.amount)
        
        const html = 
        `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
        <img src="./img/minus.svg" alt="Remover transação">
        </td>
        
        `
        return html
    }
    , 

    //Altera valor de entrada, saída e total

    updateBalance(){
        document.getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency( Transaction.incomes())

        document.getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency( Transaction.expenses())

        document.getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency ( Transaction.total())
    }
    ,

    clearTransactions(){
        DOM.transactionContainer.innerHTML = ""
    }
}


const App = {
    init(){
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        
        DOM.updateBalance()
        
        
    },
    reload(){
        DOM.clearTransactions()
        App.init()
    },
}


const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g,"")
        value = Number(value) / 100
        
        value = value.toLocaleString("pt-BR", {
            style:"currency",
            currency: "BRL"
        })
        return signal + value
    }
}

App.init()

Transaction.add({
    id:39,
    description: 'ALo',
    amount: 200,
    date:20/02/2021
})







