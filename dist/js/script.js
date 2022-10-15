let FormBlock = document.getElementById('form'),
    positionFormBlock = FormBlock.offsetTop,
    mainButton = document.querySelectorAll('.main-button');
    console.log(positionFormBlock);

    for (var a = 0; a < mainButton.length; a++) {    
        mainButton[a].addEventListener('click',function(){
            FormBlock.scrollIntoView({behavior:'smooth'})
        });
    }
    function disabledButton(){
        if((document.getElementById('checkbox1').checked)&&(document.getElementById('checkbox2').checked)){
            document.getElementById('submit').removeAttribute('disabled')
        }else{
            document.getElementById('submit').setAttribute('disabled','disabled')
        }
    }
    function details(el){
        document.body.classList.add("overflow-hidden");
        if(el.id === 'details-1'){
            document.getElementById('modal-1').classList.add('modal--open')

        }else if(el.id === 'details-2'){
            document.getElementById('modal-2').classList.add('modal--open')

        }else if(el.id === 'details-3'){
            document.getElementById('modal-3').classList.add('modal--open')

        }else if(el.id === 'details-4'){
            document.getElementById('modal-4').classList.add('modal--open')
            
        }else if(el.id === 'details-5'){
            document.getElementById('modal-5').classList.add('modal--open')
            
        }else if(el.id === 'details-6'){
            document.getElementById('modal-6').classList.add('modal--open')
            
        }else if(el.id === 'details-7'){
            document.getElementById('modal-7').classList.add('modal--open')
        }
    }
    function closeModal(el){
        document.body.classList.remove("overflow-hidden");
        if(el.id === 'close-modal-1'){
            document.getElementById('modal-1').classList.remove('modal--open')
        }else if(el.id === 'close-modal-2'){
            document.getElementById('modal-2').classList.remove('modal--open')
        }else if(el.id === 'close-modal-3'){
            document.getElementById('modal-3').classList.remove('modal--open')
        }else if(el.id === 'close-modal-4'){
            document.getElementById('modal-4').classList.remove('modal--open')
        }else if(el.id === 'close-modal-5'){
            document.getElementById('modal-5').classList.remove('modal--open')
        }else if(el.id === 'close-modal-6'){
            document.getElementById('modal-6').classList.remove('modal--open')
        }else if(el.id === 'close-modal-7'){
            document.getElementById('modal-7').classList.remove('modal--open')
        }
    }