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
    console.log("Saving Tasks...")
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