var drake = dragula([$('#list1')]);


function score() {
    items = $('#list1').getElementsByTagName("div")
    var i;
    correct = true
    count = 1
    for (i = 0; i < items.length; i++) {
        // only look at div items starting with 'i'
        if (items[i].id.slice(0,1) == "i") {
            j = items[i].id.slice(1)
            console.log(items[i].id)

            if (count!=j) {
                console.log(i,j)
                correct = false
            }
            count = count + 1
        }
    }
    console.log(correct)
    $('#answer').textContent = correct
}

function $ (id) {
    return document.querySelector(id);
}