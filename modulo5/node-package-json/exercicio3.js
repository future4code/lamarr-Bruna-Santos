let tarefas = process.argv

const listaDeTarefas = tarefas.filter((item, indice)=>{
    return indice > 1
})

console.log("Tarefa adicionada com sucesso!")
console.log(`Tarefas: [${listaDeTarefas}]`)