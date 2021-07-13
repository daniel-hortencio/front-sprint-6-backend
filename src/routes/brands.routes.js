const express = require('express')

let brands = [
    {
        id: 7,
        nome: "Audi"
    },
    {
        id: 9,
        nome: "BMW"
    },
    {
        id: 17,
        nome: "Chrysler"
    },
    {
        id: 18,
        nome: "Citroën"
    },
    {
        id: 27,
        nome: "Fiat"
    },
    {
        id: 29,
        nome: "Ford"
    },
    {
        id: 33,
        nome: "GM - Chevrolet"
    },
    {
        id: 35,
        nome: "Gurgel"
    },
    {
        id: 38,
        nome: "Honda"
    },
    {
        id: 39,
        nome: "Hyundai"
    },
    {
        id: 42,
        nome: "JAC"
    },
    {
        id: 44,
        nome: "Jeep"
    },
    {
        id: 47,
        nome: "Kia Motors"
    },
    {
        id: 48,
        nome: "Lada"
    },
    {
        id: 50,
        nome: "Land Rover"
    },
    {
        id: 52,
        nome: "LIFAN"
    },
    {
        id: 60,
        nome: "Mercedes-Benz"
    },
    {
        id: 63,
        nome: "MINI"
    },
    {
        id: 64,
        nome: "Mitsubishi"
    },
    {
        id: 66,
        nome: "Nissan"
    },
    {
        id: 67,
        nome: "Peugeot"
    },
    {
        id: 70,
        nome: "Porsche"
    },
    {
        id: 73,
        nome: "Renault"
    },
    {
        id: 81,
        nome: "SSANGYONG"
    },
    {
        id: 82,
        nome: "Subaru"
    },
    {
        id: 83,
        nome: "Suzuki"
    },
    {
        id: 85,
        nome: "Toyota"
    },
    {
        id: 86,
        nome: "Troller"
    },
    {
        id: 87,
        nome: "Volvo"
    },
    {
        id: 88,
        nome: "VW - VolksWagen"
    }
]

const brandsRouter = express.Router()

brandsRouter.get('/', async (req, res) => {
    console.log(brands)
    return res.json(brands)
})

brandsRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const brand = brands.find(brand => brand.id === parseInt(id))

        if (brand) {
            brands = brands.filter(brand => brand.id !== parseInt(id))
            return res.status(200).json({ message: `Marca: ${id} deletada com sucesso` })
        }

        return res.status(400).json({ error: "Id informada não pertence a uma marca existente" })

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
})

module.exports = brandsRouter