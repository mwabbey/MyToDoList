const todos = [];
let whatToDo = prompt("What is there todo???")
while ((whatToDo.toLowerCase()) !== "q") {
    if (whatToDo === 'new') {
        let newToDo = prompt('Add somthing then!')
        todos.push(newToDo)
        console.log('***************')
        for (let i of todos) {
            console.log(todos.indexOf(i), i)
        }
        console.log('***************')
        whatToDo = prompt("What is there todo???")
    }
    else if (whatToDo === "list") {
        console.log('***************')
        for (let i of todos) {
            console.log(todos.indexOf(i), i)
        }
        console.log('***************')
        whatToDo = prompt("What is there todo???")
    }
    else if (whatToDo === 'delete') {

        console.log('***************')
        for (let i of todos) {
            console.log(todos.indexOf(i), i)
        }
        console.log('***************')

        let deleteWhat = prompt('What would you like to delete')
        todos.splice(deleteWhat, 1)
        console.log('***************')
        for (let i of todos) {
            console.log(todos.indexOf(i), i)
        }
        console.log('***************')
        whatToDo = prompt("What is there todo???")
    }
    else if (whatToDo === 'quit') {
        whatToDo = "q";
    }
    else {
        console.log("Invalid input. Try again suckaaa!!!!")
        whatToDo = prompt("What is there todo???")
    }
}
console.log("Ok, you quitter!");
