
let piston1 = document.getElementsByClassName('piston1')
let piston2 = document.getElementsByClassName('piston2')
let piston3 = document.getElementsByClassName('piston3')
let piston4 = document.getElementsByClassName('piston4')
let a = 100
function onFunction() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'black'
    const onbutton = document.getElementById("onid");
    console.log('helo')
    onbutton.style.backgroundColor = 'purple'
    const piston1 = document.getElementById('piston1');
    piston1.style.animationDuration = 8 + 's'
    const fontColor = document.getElementById('paragraph');
    fontColor.style.color = 'white'
    const labelling = document.getElementById('info');

    labelling.style.color = 'white';


    const piston2 = document.getElementById('piston2');
    piston2.style.animationDuration = 8 + 's'
    // imagesWheel.style.animationDuration = 7 + 's';

    const piston3 = document.getElementById('piston3');
    piston3.style.animationDuration = 8 + 's'

    const piston4 = document.getElementById('piston4');
    piston4.style.animationDuration = 8 + 's';
    const clickElement = document.getElementById('click');
    // clickElement.style.color = 'black';
    console.log(clickElement)
    clickElement.style.color = 'white'
}
function reversespeedfunction() {
    let imagesWheel = document.getElementById('imagesWheel');
    imagesWheel.style.transform = rotate(-360);
}
function offFunction() {
    const body = document.getElementsByTagName('body')[0];
    const offid = document.getElementById('offid');
    let imagesWheel = document.getElementById('imagesWheel')
    imagesWheel.style.animationDuration = 0 + 's';
    body.style.backgroundColor = 'white'
    const fontColor = document.getElementById('paragraph');
    fontColor.style.color = 'black'
}
function onespeedfunction() {
    let imagesWheel = document.getElementById('imagesWheel');
    imagesWheel.style.animationDuration = 3 + 's';
    const piston1 = document.getElementById('piston1');
    const piston2 = document.getElementById('piston1');
    const piston3 = document.getElementById('piston1');
    const piston4 = document.getElementById('piston1');
    piston1.style.animationDuration = 5 + 's'
    piston2.style.animationDuration = 5 + 's'
    piston3.style.animationDuration = 5 + 's'
    piston4.style.animationDuration = 5 + 's'

}
function twospeedfunction(event) {
    let piston1 = document.getElementById('piston1')
    let piston2 = document.getElementById('piston2')
    let piston3 = document.getElementById('piston3')
    let piston4 = document.getElementById('piston4')
    console.log(piston1);
    console.log(a)
    piston1.style.animationDuration = 4 + 's'
    piston2.style.animationDuration = 4 + 's'
    piston3.style.animationDuration = 4+ 's'
    piston4.style.animationDuration = 4 + 's'
    // console.log(piston1)

}
function labelling() {
    const information = document.getElementById('paragraph');
    const labelling = document.getElementById('info');
    console.log(labelling)
    information.style.visibility = 'visible'
    labelling.style.visibility = 'visible'

    labelling.style.color = 'white'
}