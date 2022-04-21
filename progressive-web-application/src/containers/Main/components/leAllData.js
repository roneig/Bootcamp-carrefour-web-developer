import COUNTRIES from '../../../commons/constants/countries'
import Api from '../../../api'

const leAllData = () => {


    var dados =[ ["Task", " "] ];

    var keyPaises = COUNTRIES.map(function(e) { return e.value; } );    

    for(var i = 0; i < keyPaises.length; i++){        
        Api.getCountry(keyPaises[i])
          .then(data => {              
            dados.push([data.country, data.cases ])
        });                 
    }
    return dados;
}

export default leAllData;
  
