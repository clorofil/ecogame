var drake = dragula([$('#list1')]);


function score() {
    items = $('#list1').getElementsByTagName("div")
    var i;
    errors = 0
    count = 1
    for (i = 0; i < items.length; i++) {
        // only look at div items starting with 'i'
        if (items[i].id.slice(0,1) == "i") {
            j = items[i].id.slice(1)
            console.log(items[i].id)

            if (count!=j) {
                console.log(i,j)
                errors = errors + 1
                console.log(items[i])
                console.log(items[i].style)
                items[i].style.background = "darkorange"
                }
            else {
                items[i].style.background = "inherit"
            }
            count = count + 1
        }
    }
    if (errors==0) {
        $('#answer').textContent = "Perfect"  
    } else {
        $('#answer').textContent = "There are " + errors + " mistakes"  
    }
}

function showresults() {
    $('#results').style.visibility = "visible" 
}

function $ (id) {
    return document.querySelector(id);
}