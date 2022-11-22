
const materias = [
    {
        id:1,
        categoria:'Matematica',
        nombre:'mate',
  
    },
    {
        id:2,
        categoria:'Historia',
        nombre:'histo',
       
  
    },
    {
  
        id:3,
        categoria:'Biologia',
        nombre:'bio',
  
    },
    {
        id:4,
        categoria:'Computacion',
        nombre:'compu',
    
    },
   
  ];



function filcat(e) {
    let catProd = e.target.dataset.category;
    console.log(catProd);
    if (catProd == "Todos"){    // si la categoria es 'todos' que me muestre todos los productos, sera tambien la categoria por default
        for (let item of materias) {
            HTML+= `<div class="col-md-6 mt-4" >
            <figure>
             <figcaption>${ item.nombre }</figcaption>
            </figure>
        
            </div>`;
            
        }
    } else {
        for (let item of materias) {
            if(catProd == item.categoria) {  // si selecciono una categoria en particular me la mostrara
                HTML+= `<div class="col-md-6 mt-4" >
                <figure>
                 
                 <figcaption>${ item.nombre }</figcaption>
                </figure>
               
                </div>`;
            }
            
        }
    }
}