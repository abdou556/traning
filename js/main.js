var allImges= Array.from(document.querySelectorAll('img'));
var rightarrow =  document.querySelector('.fa-arrow-right');
var leftarrow =  document.querySelector('.fa-arrow-left');
var xmarker = document.querySelector('.fa-xmark')
var innerDiv = document.querySelector('.innerDiv');
var mylayer = document.querySelector('.mylayer');
var cruuntIndex;

for(var i = 0; i<allImges.length ; i++){
    allImges[i].addEventListener('click' , function(e){
    
        
        mylayer.classList.remove('d-none');
        var cruentImges = e.target.getAttribute("src");

        cruuntIndex = allImges.indexOf(e.target);
       
        innerDiv.style.backgroundImage = `url('${ cruentImges }')`;
        
    })
}


function getNext(){
    cruuntIndex++;
    if(cruuntIndex == allImges.length){
        cruuntIndex=0;
    }
   var Imagesrc= allImges[cruuntIndex].getAttribute("src");
    innerDiv.style.backgroundImage =`url('${Imagesrc}')`
}
function getPrev(){
    cruuntIndex--;
    if(cruuntIndex == -1){
        cruuntIndex= allImges.length-1;
    }
   var Imagesrc= allImges[cruuntIndex].getAttribute("src");
    innerDiv.style.backgroundImage =`url('${Imagesrc}')`
}
function close(){
    mylayer.classList.add('d-none');
}

rightarrow.addEventListener('click' , getNext );
leftarrow.addEventListener('click' , getPrev );
xmarker.addEventListener('click' , close );

document.addEventListener('keydown', function(e){
    
    if(e.code == 'Space'){
        close();
    }
    else if(e.code == 'ArrowLeft'){
        getPrev();
    }
    else if(e.code == 'ArrowRight'){
        getNext();
    }
})

mylayer.addEventListener('click', function(e){
    if(e.target == mylayer){
        close();
    }

})