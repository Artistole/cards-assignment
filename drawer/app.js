var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace("btn-active", "btn");
    this.className += "-active";
  });
}

var hamburger = document.querySelector('#hamburger')

hamburger.addEventListener('click', dismiss);

function dismiss()
{
    let displayValue = document.getElementById('perm-sidebar-dismissible').style.display;
    if(displayValue === "none"){
        document.getElementById('perm-sidebar-dismissible').style.display = "flex"
    } else {
        document.getElementById('perm-sidebar-dismissible').style.display = "none"
    }


}

// var hamburgerModal = document.querySelector('#hamburger-modal')

// hamburgerModal.addEventListener('click', dismissModal);

// function dismissModal()
// {
//     let displayValueModal = document.getElementById('perm-sidebar-modal').style.display;
//     if(displayValueModal === "none"){
//         document.getElementById('perm-sidebar-modal').style.display = "flex"
//     } else {
//         document.getElementById('perm-sidebar-modal').style.display = "none"
//     }


// }