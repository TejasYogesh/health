// function bloodflow() {
//     // red vessel

//     blood.style.animationName = "wipe-in-right"
// }

// function bloodflow() {
//     // red vessel
//     const blood = document.getElementById('vesselred1');
//     console.log('hello')
//     // Yellow vessels:
//     const yellow = document.getElementById('vesselyellow2');
//     const yellow2 = document.getElementById('yellowvessel1');
//     blood.style.animationName = "wipe-in-right"
//   }
const buttonsblood = document.getElementById('buttonsblood');
buttonsblood.addEventListener('click' , function(){
    const blood = document.getElementById('vesselred1');
    // const blood2 = document.getElementById('')
    console.log('hello')
    // Yellow vessels:
    const yellow = document.getElementById('vesselyellow2');
    const yellow2 = document.getElementById('yellowvessel1');
    blood.style.opacity = 1;
    blood.style.animationName = "wipe-in-right"
    yellow.style.animationName = "wipe-in-right"
    yellow2.style.animationName = "wipe-in-right"


})
const btnofcell = document.getElementById('btnofcell');
btnofcell.addEventListener('click' , function(){
    const cell = document.getElementById('rbcs');
    console.log('ehlo')
    cell.style.animationName = "rbcmovement"
})
const btnofCause = document.getElementById('btnofcause');
btnofCause.addEventListener('click' , function(){
    const h2elementData = document.querySelector('.h2class');
    h2elementData.innerHTML = "The treatment you have will depend on the type of leukaemia you have, as well as other factors. We have more specific information about treatment if you choose a type of leukaemia above.These are some common treatments. You might have these treatments on their own or in combination:"
})
//   // Get the button element
//   const bloodFlowButton = document.getElementById('blood-flow-button');
  
//   // Add an event listener to the button
//   bloodFlowButton.addEventListener('click', bloodflow);