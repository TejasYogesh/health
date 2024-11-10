const firstStroke = document.getElementById('btn1');
const secondStroke = document.getElementById('btn2');
const thirdStroke = document.getElementById('btn3');
const fourthStroke = document.getElementById('btn4');
const heading = document.getElementById('heading');
const pistonHead = document.getElementById('PistonHead');



firstStroke.addEventListener('click', function () {
    const PistonHead = document.getElementById('PistonHead');
    const Movement = document.getElementById('Movement');
    // const Hands = document.getElementById('Hands');
    const fireBurning = document.getElementById('fireBurning');
    fireBurning.style.animationName = 'fireburning';
    // Hands.style.animationDuration = '3s';
    // PistonHead.style.display = 'none';
    // Hands.style.animationName = 'YellowHands'
    // alert("You are Currently in 1st Stroke Engine")
    Movement.style.animationName = 'Movement';
    PistonHead.style.animationName = 'pistonHead';
    PistonHead.style.animationDuration = '3s';
    PistonHead.style.animationIterationCount = '1';
    PistonHead.style.animationTimingFunction = 'linear';
    console.log("hello")
    heading.innerHTML = "1st Stroke- Running";
    const paragraphChange = document.getElementsByTagName('p')[0].innerHTML = "Intake: During the intake stroke, the piston descends, creating a partial vacuum. An ignitable mixture of gasoline vapor and air is drawn into the cylinder through the open inlet valve"

});
firstStroke.addEventListener('click', function () {
    const Hands = document.getElementById('Hands');
    Hands.style.animationName = 'YellowHands'
    console.log(Hands.style.animationName);
    console.log('Helsdffo')
})
secondStroke.addEventListener('click', function () {
    const fireBurning2 = document.querySelector('.fireBurning2');
    console.log(fireBurning.style.animationName)
    fireBurning2.style.animationName = 'fireburning2';
    // console.log(fireBurning)
    const Movement1 = document.querySelector('.Movement1');
    const yellowHands1 = document.querySelector('.hands1')
    yellowHands1.style.animationName = 'yellowhands1'
    const pistonHead1 = document.querySelector('.PistonHead1');
    pistonHead1.style.animationName = 'pistonHead1'
    Movement1.style.animationName = 'Movement1';
    // console.log('Hello')
    heading.innerHTML = "2nd Stroke-Running";
    const paragraphChange = document.getElementsByTagName('p')[0].innerHTML = 'Compression: Once the intake process is complete, the compression stroke begins. The piston ascends, compressing the fuel-air mixture within the cylinder. Both valves remain closed during this phase'
});
thirdStroke.addEventListener('click', function () {
    const fireBurning = document.querySelector('.fireBurning3');
    fireBurning.style.animationName = 'fireburning3';
    const pistonHead2 = document.querySelector('.PistonHead2');
    pistonHead2.style.animationName = 'pistonHead2';
    const Movement2 = document.querySelector('.Movement2');
    Movement2.style.animationName = 'Movement2';

    console.log('3rd Stroke');
    heading.innerHTML = "3rd Stroke-Running";
    const paragraphChange = document.getElementsByTagName('p')[0].innerHTML = 'The real power generation occurs during the ignition process. An electric spark ignites the compressed mixture, resulting in an explosive force that pushes the piston downward '

});
fourthStroke.addEventListener('click', function () {
    const fireBurning = document.querySelector('.fireBurning4');
    fireBurning.style.animationName = 'fireburning4';
    const pistonHead3 = document.querySelector('.PistonHead3');
    pistonHead3.style.animationName = 'pistonHead3';
    console.log('hello')

    const Movement3 = document.querySelector('.Movement3');
    Movement3.style.animationName = 'Movement3';

    heading.innerHTML = "4th Stroke-Running";
    const paragraphChange = document.getElementsByTagName('p')[0].innerHTML = 'Exhaust: After ignition, the piston moves upward again, expelling the burned gases from the combustion chamber through the open exhaust valve 2.'

});
// const continueReading = document.getElementById('continue');
// continueReading.addEventListener('click', function () {
//     window.location.href = "https://www.youtube.com/watch?v=5QZyQh9QZqM";


// })