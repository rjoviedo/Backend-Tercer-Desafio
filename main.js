class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, image, code, stock){
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct ={
            title, 
            description, 
            price, 
            image,
            code, 
            stock,
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({
                ...newProduct,            
                id:ProductManager.id,
            });
            
        }else{
            console.log("Todos los campos son requeridos")
        }
        
    }

    getProduct() {
        return this.products;
    }

    existe (id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
       
    }

}


const productos = new ProductManager
// Arreglo vacio
console.log(productos.getProduct())

// Agregue el producto
productos.addProduct("producto prueba1", "Este es un producto prueba1", "200", "Sin imagen1", "abc123", 25);
productos.addProduct("producto prueba2", "Este es un producto prueba2", "200", "Sin imagen2", "abc456");


//Arreglo con el producto
console.log(productos.getProduct())

//CODE repetido - Validacion
productos.addProduct("producto prueba3", "Este es un producto prueba3", "200", "Sin imagen3", "abc456", 8);

//Busqueda mediante ID
productos.getProductById(2)

//Busqueda ID no encontrado
productos.getProductById(3)
