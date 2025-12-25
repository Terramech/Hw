let rootdiv = document.createElement('div');
rootdiv.id = 'controls';
document.body.appendChild(rootdiv);

let inputNewTask = document.createElement('input');
inputNewTask.id = "taskInput";
inputNewTask.placeholder = "новая задача";

let buttonAdd = document.createElement('button');
buttonAdd.id = "addBtn";
buttonAdd.innerHTML = "Добавить";

rootdiv.appendChild(inputNewTask);
rootdiv.appendChild(buttonAdd);

let selection = document.createElement('select');
selection.id = "filter";

let optionAll = document.createElement('option');
optionAll.value = "all";
optionAll.innerHTML = "Все";

let optionActive = document.createElement('option');
optionActive.value = "active";
optionActive.innerHTML = "в работе";

let optionCompleted = document.createElement('option');
optionCompleted.value = "completed";
optionCompleted.innerHTML = "Выполнено";

selection.appendChild(optionAll);
selection.appendChild(optionActive);
selection.appendChild(optionCompleted);

rootdiv.appendChild(selection);

let ulTaskList = document.createElement('ul');
ulTaskList.id = "taskList";
document.body.appendChild(ulTaskList);

newTask = (text, status) => {
    let li = document.createElement('li');
    li.className = status;
    
    let textSpan = document.createElement('span');
    textSpan.innerHTML = text;
    if (text !== "") {
        li.appendChild(textSpan);
        
        let btnDelete = document.createElement('button');
    btnDelete.innerHTML = "X";
    li.appendChild(btnDelete);

    ulTaskList.appendChild(li);

    btnDelete.addEventListener('click', (e) => {
        li.remove();
    })

    textSpan.addEventListener('dblclick', (e) => {
        let inputEdit = document.createElement('input');
        inputEdit.type = "text";
        inputEdit.value = textSpan.innerHTML;

        let saveButton = document.createElement('button');
        saveButton.innerHTML = "Сохранить";

        li.replaceChild(inputEdit, textSpan);
        li.appendChild(saveButton);
        saveButton.addEventListener('click', (e) => {
            
            textSpan.innerHTML = inputEdit.value;
            if (textSpan.innerHTML === "") {
                li.remove();
                return;
            }
            li.replaceChild(textSpan, inputEdit);
            saveButton.remove();
            inputEdit.remove()
            
        });
    })

    }
    li.classList.add("noSelection");
    li.addEventListener('click', (e) => {
        if (li.classList.contains("active")) {
            li.classList.add("completed");
            li.classList.remove("active");
        } else if (li.classList.contains("completed")) {
            li.classList.remove("completed");
            li.classList.add("active");
        }
        filter();
    });
    inputNewTask.value = "";
    filter();
};


filter = () => {
    let filterType = selection.value;
    let tasks = ulTaskList.querySelectorAll('li');
    
    tasks.forEach((task) => {
        task.classList.remove('filtered');
        if (filterType === "active") {
            if (!task.classList.contains("active")) {
                task.classList.add('filtered');
            }
        } else if (filterType === "completed") {
            if (!task.classList.contains("completed")) {
                task.classList.add('filtered');
            }
        } else {
            task.classList.remove('filtered');
        }
    })
}
buttonAdd.addEventListener('click', (e) => {
    newTask(inputNewTask.value, "active");
})

selection.addEventListener('change', (e) => {
    filter();
});


let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
    .active {
        color: black;
    }
    .completed {
        color: green;
    }
    .filtered {
        display: none;
    }
    .noSelection {
        user-select: none;
    }
`;
