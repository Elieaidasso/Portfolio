const firstButton = document.querySelector('.item-1')
const secondButton = document.querySelector('.item-2')
const thirdButton = document.querySelector('.item-3')
const blockOne = document.querySelector('.item-4')
const blockTwo = document.querySelector('.item-5')
const blockThree = document.querySelector('.item-6')
const blockFourth = document.querySelector('.item-7')
const blockFifth = document.querySelector('.item-8')
const blockSixth = document.querySelector('.item-9')
const classList = firstButton.classList;



firstButton.addEventListener('click', function(){
    blockOne.style.display = 'block'; 
    blockTwo.style.display = 'block';
    blockThree.style.display = 'none';
    blockFourth.style.display = 'none';
    blockFifth.style.display = 'none';
    blockSixth.style.display = 'none';

});


secondButton.addEventListener('click', function(){
    blockOne.style.display = 'none'; 
    blockTwo.style.display = 'none';
    blockThree.style.display = 'block';
    blockFourth.style.display = 'block';
    blockFifth.style.display = 'none';
    blockSixth.style.display = 'none';

});


thirdButton.addEventListener('click', function(){
    blockOne.style.display = 'none'; 
    blockTwo.style.display = 'none';
    blockThree.style.display = 'none';
    blockFourth.style.display = 'none';
    blockFifth.style.display = 'block';
    blockSixth.style.display = 'block';

});


console.log('Mamma');