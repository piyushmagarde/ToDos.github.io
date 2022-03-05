
var submit = document.querySelector('.addList');
submit.addEventListener('click',
    function (e) {
        e.preventDefault();

        var value = document.querySelector('#item');

        var inputValue = value.value;
        var ul = document.querySelector('.list');

        var li = document.createElement('li');
        li.textContent = inputValue;

    var btn = document.createElement('button');
        btn.textContent = "Delete"
  
        li.appendChild(btn);
        ul.appendChild(li);

        btn.addEventListener('click', function (e) {
            var li2 = e.target.parentElement;
            li2.parentNode.removeChild(li2);

        })

        value.value = "";
    }

)


