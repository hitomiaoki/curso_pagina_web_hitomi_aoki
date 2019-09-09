import{CREGION} from './api.js'
export function app() {
    console.log('Cargando app')

    let countriesList = document.querySelector('#region')
    let regionList = document.querySelector('country-select')

    countriesList.addEventListener('change', paisesSelect)
    //regionList.addEventListener('change', regionSelect)

    function paisesSelect(ev) {
     console.log(countriesList)
     let url = CREGION + '/'  + countriesList.value
     console.log(url)
     regionList.value = ''
     fetch(url)
     .then(Response => {
        if (response.status == 200) {
           return response.json()

         


        }
        throw(new Error(response.status))
     })
     
    }


    function regionSelect(ev) {
       
    }

    function renderData(data) {
       let hml = ''
    }

}


