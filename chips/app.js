const autoInput = document.getElementById('auto-input');

const output = document.getElementById('output')

// autoInput.addEventListener('keydown', newchip);

// function newchip()
// {
//     // if(newchip.key === 'Enter')
//     console.log(newchip.key)  
        
// }

//cant use just a variable we have to pass an
autoInput.addEventListener('keydown', e=> newchip(e) );

function newchip(e)
{
    var chipinput = autoInput.value
    if(e.key === 'Enter' && chipinput !== "")
    {
       output.innerHTML += `<div class="chips-cont">
       ${chipinput}
       <button class="cross-btn" onclick='remove()'><i class="fas fa-times-circle"></i></button>
       </div>`
       document.getElementById('auto-input').value=''
    }
}

function remove(){
    var crossBtn = document.querySelector('.chips-cont');
    crossBtn.remove();
}