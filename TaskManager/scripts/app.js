let isImportant = false;
let isVisible = true;

function hiddenDetails() {
    //   const hideInfo =  $(".info").hide
    const panel = $(".info");
    // $("#formInfo").css("display","none");

    if (isVisible) {
        panel.hide();
        isVisible = false;
    } else {
        panel.show();
        isVisible = true;
    }

    console.log("Hide Details")

}

function toggleImportant() {
    const nonImportantIcon = "fa-regular fa-heart";
    const importantIcon = "fa-solid fa-heart-circle-check ";

    if (!isImportant) {
        $("#iImportant").removeClass(nonImportantIcon);
        $("#iImportant").addClass(importantIcon);
        isImportant = true;
    } else {
        $("#iImportant").addClass(importantIcon);
        $("#iImportant").removeClass(nonImportantIcon);
        isImportant = false;
    }
    console.log("Icon Clicked!")
}

async function saveTask() {

    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let dueDate = $("#selDueDate").val();
    let status = $("#selStatus").val();
    let budget = $("#txtBudget").val();
    let color = $("#selColor").val();

    let taskSave = new Task(isImportant, title, description, dueDate, status, budget, color);

    //send Task to the server
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks/", {
        method: "Post",
        body: JSON.stringify(taskSave), // makes objects into a string to process http request
        headers: {
            "Content-type": "application/json"
        }
    });

    if (response.ok) {
        displayTask(taskSave);
        clearForm();

        // get data from the response
        let data = await response.json();
        console.log(data);

    } else {
        alert("Error saving tasks, please try again.")
    }



}

function displayTask(task) {
    let syntax = `
    <div class='tasks' style="border-color:${task.color}"> 
    <div class= 'details'>
    <h5> ${task.title}</h5>
    <p> ${task.description}</p>
    </div>
    <label> ${task.status}</label>
    <label> $${task.budget}</label>
    <label> ${task.color}</label>
    <label> ${task.dueDate}</label>
    </div>
    `;

    $("#pending-tasks").append(syntax);
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selDueDate").val("");
    $("#selStatus").val("");
    $("#txtBudget").val("");
    $("#selColor").val("");



}

async function testRequest() {
    let response = await fetch("https://fsdiapi.azurewebsites.net/"); //Server Request
    console.log(response)
}

async function loadTasks() {
    // get https://fsdiapi.azurewebsites.net/api/tasks/
    // console log the data from the response
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks");

    if (response.ok) {
        let data = await response.json();

        for (let i = 0; i < data.length; i++) {
            let task = data[i];
            if (task.name == "Marquice") {
                displayTask(task)
            }
        }

    } else {
        alert("Error no task register")
    }
}

async function deleteAll(){
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks/clear/Marquice/", {
        method: "DELETE"
    });

    if (response.ok){
        // remove all tasks from the screen
        $(".tasks").remove();
    }else{
        alert("Error delete your tasks");
    }
    console.log(response);
}




function init() {
    console.log("Task Manager");

    //load data
    loadTasks();

    //catch or hook events

    $("#deleteAll").click(deleteAll);

    $("#hideDetails").click(hiddenDetails);

    $("#iImportant").click(toggleImportant);

    $("#btnSave").click(saveTask);
    //find element. command element to do a tasks
}

window.onload = init;

/**Suggested ReadL
 * how to create an objects in js Object Literal, Obj constructor, classes
 */