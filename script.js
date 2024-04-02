// Array contendo Objeto com as Tasks
// Atividades comentadas após a conclusão da Tarefa 4 - Removendo Tarefas
const tasks = [
  // {title: "Comprar comida para o gato", type: "Urgente"},
  // {title: "Consertar Computador", type: "Importante"},
  // {title: "Beber água", type: "Normal"},
  // {title: "Enviar relatório trimestral", type: "Importante"},
  // {title: "Fazer exercícios físicos", type: "Normal"},
  // {title: "Agendar consulta médica", type: "Urgente"},
  // {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  // {title: "Limpar a despensa", type: "Importante"},
  // {title: "Pagar a conta de energia", type: "Urgente"},
  // {title: "Assistir a um documentário interessante", type: "Normal"},
]

// Função para Renderizar os elementos contidos no array
function renderElements(arr) {

  // Capturando a tag de Lista
  const ulist = document.querySelector('.tasks__list')
  ulist.innerHTML = ''
  
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

  // Evento de remoção de Task
  button.addEventListener('click', function(event) {
    event.preventDefault()
    
    // Capturar o nome da tarefa associada ao botão
    const taskTitle = this.parentNode.querySelector('p').innerText

    // Buscar se o array contem a tarefa mencionada
    const locateTask = tasks.findIndex(task => task.title === taskTitle)

    // Condicional para deletar a tarefa
    if (locateTask !== -1) {
      tasks.splice(locateTask, 1)
      renderElements(tasks)
    } else {
      console.error('Task not found')
    }

    event.stopPropagation()
  })

   return li
}

// Renderizando as tasks contidas no Objeto do Array
// renderElements(tasks)

// Adicionando Evento ao botão Adicionar Tarefa na Lista
const button = document.querySelector('.form__button--add-task')

button.addEventListener('click', function addTask(event) {
  event.preventDefault()

  const input = document.getElementById('input_title')
  const select = document.querySelector('.form__input--priority')
  const task = input.value
  const priority = select.value

  tasks.push({title: task, type: priority})

  renderElements(tasks)

  event.stopPropagation()
})