//วิธีที่1
//1. query target node
const okBtn = document.querySelector('#submitOK');
console.log(okBtn)

//2. register event handler to target node
// okBtn.onclick = showMessage;

// okBtn.onclick = null;
//3. prepare event handler
function showMessage(e){
    alert(`Good bye!!! 
    event target: ${e.target}
    event current target: ${e.currentTarget}
    event phase: ${e.eventPhase}
    event type: ${e.type}`);;
}

//ex2
// okBtn.onclick=  () => {
//     alert('Good bye');
// }

//วิธีที่ 2

//2. register event handler to target node
okBtn.addEventListener('click', showMessage, true);
// okBtn.removeEventListener('click', showMessage, false);


const divBtn = document.querySelector('#divButtonPanel');
divBtn.addEventListener('click', e =>{
    alert(`div click!!! 
    event target: ${e.target}
    event current target: ${e.currentTarget}
    event phase: ${e.eventPhase}
    event type: ${e.type}`);
}, true);

