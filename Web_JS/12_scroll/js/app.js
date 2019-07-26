export function app() {
    console.log('Cargando app')  
    
    window.addEventListener('scroll', onScroll)
    let header = document.querySelector('body>header')
    let aSections = document.querySelectorAll('section')
    let aOffsets = []
    calcularOffset()
   
    let aEnclaces = document.querySelectorAll('nav a')
    aEnclaces.forEach(enlace, i => enlace.addEventListener('click', () => {onClickMenu(i)}
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
          isSticky = !isSticky
          calcularOffset()

       } else if(y < 40 && isSticky )  {      
           header.classList.remove('sticky')
           isSticky = !isSticky
           calcularOffset()
       }
    }

    function onClickMenu(i) {
         window.scrollingElement.scrollTop 
         = aOffsets[i]
    }





 }