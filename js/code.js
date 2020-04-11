
var sortable = Sortable.create(document.getElementById('list1'),{
    animation:150,
    ghostClass: "ghost",
    onEnd: function (el) {
        clearall(); //clear all color in case it was scored before
    }
});

function score() {
    items = $('#list1').getElementsByTagName("div")
    var errors = 0
    for (var i = 0; i < items.length; i++) {
        // only look at div items starting with 'i'
        if (items[i].id.slice(0,1) == "i") {
            j = items[i].id.slice(1) //get if 'i3' return 3
            if (i!=j) {
                errors = errors + 1
                // color red
                items[i].getElementsByTagName("img")[0].style.background = "#F4BEA9"
            }
            else {
                // color green
                items[i].getElementsByTagName("img")[0].style.background = "#D5E4AC"
            }
        }
    }
    if (errors==0) {
        // perfect answer, show the results
        showresults()
    } 
}

// Clear coloring for when we drag/drop after a scoring
function clearall(){
    items = $('#list1').getElementsByTagName("div")
    for (var i = 0; i < items.length; i++) {
        // only look at div items starting with 'i'
        if (items[i].id.slice(0,1) == "i") {
            items[i].getElementsByTagName("img")[0].style.background = "inherit"
        }
    }   
}

function showresults() {
    // toggle results and button name
    if ($('#scorebutton').textContent == "Show Result") {
        $('#results').style.visibility = "visible" 
        $('#scorebutton').textContent = "Hide Result"
    } else {
        $('#results').style.visibility = "hidden" 
        $('#scorebutton').textContent = "Show Result"
    }
}

function $ (id) {
    return document.querySelector(id);
}