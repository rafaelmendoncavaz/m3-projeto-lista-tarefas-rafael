// Array contendo Objeto com as Tasks
const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

// Função para Renderizar os elementos contidos no array
function renderElements(arr) {

  // Capturando a tag de Lista
  const ulist = document.querySelector('.tasks__list')
  
  // Iterando sobre o array com objeto tasks
  for(let i = 0; i < arr.length; i++) {

    // Chamando a função que cria as tasks, onde os parâmetros serão os itens iterados
    const taskItem = createTaskItem(arr[i].title, arr[i].type)
    ulist.appendChild(taskItem)
  }
}

function createTaskItem(title, type) {
   // Criando elementos com DOM
   const li = document.createElement('li')
   const div = document.createElement('div')
   const span = document.createElement('span')
   const p = document.createElement('p')
   const button = document.createElement('button')

  // Nome da Task
  p.innerText = title

  // Adicionando as Classes
  span.classList.add('task-type')
  li.classList.add('task__item')
  div.classList.add('task-info__container')
  button.classList.add('task__button--remove-task')

  // Condicional para prioridade da task
  switch (type) {
    case 'Normal':
      span.classList.add('span-normal')
      break
    case 'Importante':
      span.classList.add('span-important')
      break
    case 'Urgente':
      span.classList.add('span-urgent')
      break
    default:
      break
  }

   // Colocando a Hierarquia dos novos elementos criados
   li.appendChild(div)
   div.appendChild(span)
   div.appendChild(p)
   li.appendChild(button)

   return li
}

// Renderizando as tasks contidas no Objeto do Array
renderElements(tasks)