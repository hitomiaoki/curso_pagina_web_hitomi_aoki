import{CREGION} from './api.js'
export function app() {
    console.log('Cargando app')

    const countriesList = document.getElementById('countries')
    const regionList = document.getElementById('region')

    countriesList.addEventListener('change', paisesSelect)
    regionList.addEventListener('change', regionSelect)

    function paisesSelect(ev) {
     console.log('paisesSelect')
     let url = CREGION + '/'  + regionList.Value
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


