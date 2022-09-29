class Container {
    constructor(){
        this.products = []
    }

    save(producto){
        try {
            product.id = this.products.length + 1
            this.products.push(product)
            return product
        } catch(error){
            return error
        }
    }

    getAll(){
        return this.products
    }

    getById(id){
        try {
            const result = this.getAll().find(obj => obj.id == id) 
            return result === undefined ? ({error: 'producto no encontrado'}) : result
        } catch(error){
            return error
        }
    }

    modifyById(id, product){
        try {
            product.id = id
            this.getAll().splice(id-1, 1, product)
            return this.getById(id)
        } catch(error){
            return error
        } 
    }

    deleteById(id){
        try {
            this.products = this.getAll().filter(obj => obj.id !== id)
            return {msg: `Producto con el id ${id} eliminado`}
        } catch(error){
            return error
        } 
    }
}


module.exports = Container