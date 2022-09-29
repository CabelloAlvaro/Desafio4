const { Router } = require ('express')
const routerProduct = Router();
const Container = require('../container/index')

const ProductContain = new Container()

routerProduct.get('/', (req, res) => {
    res.json(ProductContain.getAll())
})

routerProduct.get('/:id', (req, res) => {
    const num = parseInt(req.params.id)
    res.json(ProductContain.getById(num))
})

routerProduct.post('/', (req, res) => {
    const product = req.body
    res.json(ProductContain.save(product))
})

routerProduct.put('/:id', (req, res) => {
    const num = parseInt(req.params.id)
    const product = req.body
    res.json(ProductContain.modifyById(num, product))
})

routerProduct.delete('/:id', (req, res) => {
    const num = parseInt(req.params.id)
    res.json(ProductContain.deleteById(num))
})


module.exports = routerProduct