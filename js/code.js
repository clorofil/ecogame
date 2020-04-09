dragula([$('#list1')])
.on('drop', function (el) {
    clearall(); //clear all color in case it was scored before
});

function score() {
    items = $('#list1').getElementsByTagName("div")
    var i;
    errors = 0
    count = 1
    for (i = 0; i < items.length; i++) {
        // only look at div items starting with 'i'
        if (items[i].id.slice(0,1) == "i") {
            j = items[i].id.slice(1)
            if (count!=j) {
                errors = errors + 1
                items[i].getElementsByTagName("img")[0].style.background = "#F4BEA9"
                }
            else {
                items[i].getElementsByTagName("img")[0].style.background = "#D5E4AC"
            }
            count = count + 1
        }
    }
    if (errors==0) {
        // show the results
        showresults()
    } 
}

function clearall(){
    items = $('#list1').getElementsByTagName("div")
    var i;
    for (i = 0; i < items.length; i++) {
        // only look at div items starting with 'i'
        if (items[i].id.slice(0,1) == "i") {
            items[i].getElementsByTagName("img")[0].style.background = "inherit"
        }
    }   
}

function showresults() {
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