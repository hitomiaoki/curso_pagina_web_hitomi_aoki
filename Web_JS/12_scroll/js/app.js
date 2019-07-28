export function app() {
    console.log('Cargando app')  
    
    window.addEventListener('scroll', onScroll)
    let header = document.querySelector('body>header')
    let divTop = document.querySelector('div.top')
    let aSections = document.querySelectorAll('section')
    let isSticky = false;
    let aOffsets = []
    calcularOffset()
   
    let aEnclaces = document.querySelectorAll('nav a')
    aEnclaces.forEach((enlace, i) => enlace.addEventListener(
       'click', (ev) => {onClickMenu(ev, i) }
    ))

    function calcularOffset() { 
     aOffsets = []
     aSections.forEach(
     item => aOffsets.push(item.offsetTop)         
    )
    console.dir(aOffsets) 
    }



    function onScroll(ev) {
       //console.log(ev)
       let y = ev.target.scrollingElement.scrollTop
       //console.log(y)
       if (y >= 40 && !isSticky) {
          header.classList.add('sticky')
          divTop.classList.add('top-sticky')
          isSticky = !isSticky
          calcularOffset()

       } else if(y < 40 && isSticky )  {      
           header.classList.remove('sticky')
           divTop.classList.remove('top-sticky')
           calcularOffset()
           isSticky = !isSticky
           
       }
    }

    function onClickMenu(ev, i) {
         ev.preventDefault()
         console.log(aOffsets[i])
         window.scrollTop(0, aOffsets[i]-90)        
    }

 }