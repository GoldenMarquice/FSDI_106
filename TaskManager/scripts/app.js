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

function saveTask() {

    let title= $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let dueDate = $("#selDueDate").val();
    let status = $("#selStatus").val();
    let budget = $("#txtBudget").val();
    let color = $("#selColor").val();

    let taskSave = new Task(isImportant, title,description,dueDate,status,budget,color);

    displayTask(taskSave);
    clearForm();
    
}

function displayTask(task){
    let syntax = `
    <div class='tasks'> 
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

function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selDueDate").val("");
    $("#selStatus").val("");
    $("#txtBudget").val("");
    $("#selColor").val("");
    


}



function init() {
    console.log("Task Manager");

    //load data

    //catch or hook events

    $("#hideDetails").click(hiddenDetails);

    $("#iImportant").click(toggleImportant);

    $("#btnSave").click(saveTask);
    //find element. command element to do a tasks
}

window.onload = init;

/**Suggested ReadL
 * how to create an objects in js Object Literal, Obj constructor, classes
 */