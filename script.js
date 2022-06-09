let accordionButton = document.querySelectorAll('.accordion__question');
let accordionCollapse = document.querySelectorAll('.accordion__collapse');

accordionCollapse.forEach(item=>{
  item.classList.add('collapse')
})

accordionButton.forEach(item =>{
  item.addEventListener('click', event =>{
    let accCollapse = item.nextElementSibling
    // Remove "collapse", add "collapsing" to .accordion__collapse (sibling)
    // After X amount of time, Remove "collapsing" class and add "collapse open" class
    
    if(!item.classList.contains('open')){
      
      
      accCollapse.style.display = 'block';
      let accHeight = accCollapse.clientHeight;

      setTimeout(() =>{
        accCollapse.style.height= accHeight + 'px';
        accCollapse.style.display = '';

      }, 1)


      accCollapse.classList = 'accordion__collapse collapsing';

      setTimeout(() =>{
        accCollapse.classList= 'accordion__collapse collapse open';
      }, 300)

    }
    else{//Remove "collapse open" from .accordion__collapse, add "collapsing"
      //After X amount of time, remove "collapsing" class and add "collapse" class
      
      accCollapse.classList = 'accordion__collapse collapsing';
      
      setTimeout(()=> {
        accCollapse.style.height= '0px';

      },1)

      setTimeout(() =>{
        accCollapse.classList= 'accordion__collapse collapse'
        accCollapse.style.height= '';
        
      }, 300)
    }

    

    //accCollapse.classList.toggle('open');
    item.classList.toggle('open');
 
  })
})