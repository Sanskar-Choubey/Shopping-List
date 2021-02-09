var input = document.querySelector('.inputField');
var button = document.querySelector('.button');
var ul = document.querySelector('.unorderedList')

function show (){
    if( input.value.length > 0)
    {
        var li = document.createElement('li');
        var button = document.createElement('button');
        li.appendChild(document.createTextNode(input.value));
        button.appendChild(document.createTextNode("Delete"))
        ul.appendChild(li);
        li.appendChild(button);
        input.value = "";

        button.onclick = removeParent;
    }       
}

function keyPress(event){
    if (event.keyCode === 13){
        show();
    }
}

function removeParent(event){
    event.target.parentNode.remove();
}
button.addEventListener('click',show);
input.addEventListener('keydown',keyPress)