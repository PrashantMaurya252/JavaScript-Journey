const modal=document.querySelectorAll('.nav-btn')
const hiddenModal=document.querySelector('.modal')
const cancelButton=document.querySelector('.cancel-btn')
const overLay=document.querySelector('.overLay')

for(let i=0;i<modal.length;i++)
    modal[i].addEventListener('click',function(){
        console.log("Button is clicked")
        hiddenModal.classList.remove('hidden')
    })


cancelButton.addEventListener('click',function(){
    hiddenModal.classList.add('hidden')
})
document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
        if(!hiddenModal.classList.contains('hidden')){
            hiddenModal.classList.add('hidden')
        }
        else{
            hiddenModal.classList.remove('hidden')
        }
    }
})