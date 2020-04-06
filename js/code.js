var drake = dragula([$('#list1')]);


function score() {
    items = $('#list1').getElementsByTagName("div")
    var i;
    correct = true
    for (i = 0; i < items.length; i++) {
        j = items[i].id.slice(1)-1
        if (i!=j) {
            correct = false
        }
    }
    console.log(correct)
    $('#answer').textContent = correct
}

function $ (id) {
    return document.querySelector(id);
}