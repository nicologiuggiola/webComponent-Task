fetch('https://62345d0ddebd056201e32e0c.mockapi.io/task')
.then(resp=>resp.json())
.then(element=>{
    for (const el of element) {
        console.log(el);
        const li = document.createElement('li', {is: 'super-li'});
        li.id = "task-list-elem"
        li.setAttribute('task-li', JSON.stringify(el));
        const container = document.getElementById("task-list")
        container.appendChild(li)
    }
})