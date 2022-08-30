(function(){
    const render = function (todos) {
        $("#todos").empty()
        let source = $("#todos-template").html();
        let template = Handlebars.compile(source);
        $("#todos").append(template({todos: todos}))
    }
    
    $("#todos").on("click", "ul>li", function(){
        let priority = $(this).html();
        const id = $(this).closest(".todo").data().id
        $.ajax({
            method: "PUT",
            url: `/todo/priority/${id}/${priority.toLowerCase()}-priority`,
            success: todos => render(todos)
        })
    })
    
    $("#addToDo").on("click", function(){
        let text = $("#todo-input").val();
        if(text.length > 0){
            $.post('/todo', { text: text}, function (todos) {
                render(todos)
                $("#todo-input").val("")
            })
        }
    })
    
    $("#todos").on("click", ".fa-check-circle", function () {   
        const id = $(this).closest(".todo").data().id
        $.ajax({
            method: "PUT",
            url: "/todo/" + id,
            success: todos => render(todos)
        })
    })
    
    $("#todos").on("click", ".fa-trash", function () {
        const id = $(this).closest(".todo").data().id
        $.ajax({
            method: "DELETE",
            url: "/todo/" + id,
            success: todos => render(todos)
        })
    })
    
    $.get('/todos', todos => render(todos))
})();

