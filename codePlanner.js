/* 
Instrucciones:

    addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
    removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
    getTasks(): Devuelve el array de tareas.
    getPendingTasks(): Devuelve solo las tareas pendientes.
    getCompletedTasks(): Devuelve solo las tareas completadas.
    markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
    getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
    filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
    updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.

    planner.addTask({
        id: 1,
        name: "Comprar leche",
        priority: 1,
        tags: ["shopping", "home"]
    });


*/ 

let task = [{
    id: undefined,
    name: undefined,
    priority: undefined,
    tags: [undefined]
}]

let planner = [];
let plannerPending = [];
let plannerCompleted = [];

let prioritizedList = [];

let filteredList = [];

let initialStatus = {
    completed: false,
}

console.log(planner);

const addTask = (task) => {
    task.splice(2, 0, initialStatus);
    planner.push(task);
}

addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

console.log(planner);

const removeTask = (value) => {
    let idToCompare = planner[place].id;
    let nameToCompare = planner[place].name;
    let comparableValue = value

    planner.forEach( (plan, index) => {
        if ( comparableValue === idToCompare ) {
            console.log(index);
            console.log(plan);
            planner.splice(index, 1);
        } else if ( comparableValue === nameToCompare ) {
            console.log(index);
            console.log(plan);
            planner.splice(index, 1);   
        }
    })
}

const getTasks = () => {
    console.log(planner);
    return planner;
}

const getPendingTasks = () => {

    plannerPending.splice(0, plannerPending.length)

    planner.forEach(plan => {
        if( plan.completed === false ) {
            plannerPending.push(plan)
        }
    })

    console.log(plannerPending)
    return plannerPending
} 

const getCompletedTasks = () => {

    plannerCompleted.splice(0, plannerCompleted.length)

    planner.forEach(plan => {
        if( plan.completed === true ) {
            plannerCompleted.push(plan)
        }
    })

    console.log(plannerCompleted)
    return plannerCompleted

}

const markTaskAsCompleted = (value) => {

    let comparableValue = value;

    planner.forEach((plan, index) => {

        let idToCompare = planner[index].id;
        let nameToCompare = planner[index].name;

        if ( comparableValue === idToCompare ) {
            plan[index].completed = true ;
        } else if ( comparableValue === nameToCompare ) {
            plan[index].completed = true ;
        }
    })

}

const getSortedTasksByPriority = () => {

    prioritizedList.splice(0, prioritizedList.length)

    planner.forEach(plan => {
        if( plan.priority === 3 ) {
            prioritizedList.push(plan)
        }
    })

    console.log(prioritizedList)

    planner.forEach(plan => {
        if( plan.priority === 2 ) {
            prioritizedList.push(plan)
        }
    })

    console.log(prioritizedList)

    planner.forEach(plan => {
        if( plan.priority === 1 ) {
            prioritizedList.push(plan)
        }
    })

    console.log(prioritizedList)
    return prioritizedList

}

const filterTasksByTag = (tag) => {

    let comparableTag = tag.toString().toLowerCase().replaceAll(' ','');

    planner.forEach( (plan, index) => {

        plan[index].forEach( (p, i) => {

            let tagToCompare = p[i].tags.toString().toLowerCase().replaceAll(' ','');

            if( tagToCompare === comparableTag ) {

                filteredList.push( plan )
            }

        } )

    })

}

const updateTask = (taskId, updates) => {

    let searchableId = taskId.toString().toLowerCase().replaceAll(' ','');

    planner.forEach( (plan, index) => {

        let idToCompare = plan[index].id.toString().toLowerCase().replaceAll(' ','');

        if ( searchableId === idToCompare ) {

            if ( updates[0].id != undefined || '' || null ) {
                plan[index].id = updates[0].id;
            } else if ( updates[0].name != undefined || '' || null ) {
                plan[index].name = updates[0].name;
            } else if ( updates[0].completed != undefined || '' || null ) {
                plan[index].completed = updates[0].completed;
            } else if ( updates[0].priority != undefined || '' || null ) {
                plan[index].priority = updates[0].priority;
            } else if ( updates[0].tags != undefined || '' || null ) {
                plan[index].tags = updates[0].tags;
            }
        }

    })

}

console.log(task)
