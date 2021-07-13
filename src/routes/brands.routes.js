const express = require('express')

let brands = [
    {
        id: 7,
        name: "Audi"
    },
    {
        id: 9,
        name: "BMW"
    },
    {
        id: 17,
        name: "Chrysler"
    },
    {
        id: 18,
        name: "Citroën"
    },
    {
        id: 27,
        name: "Fiat"
    },
    {
        id: 29,
        name: "Ford"
    },
    {
        id: 33,
        name: "GM - Chevrolet"
    },
    {
        id: 35,
        name: "Gurgel"
    },
    {
        id: 38,
        name: "Honda"
    },
    {
        id: 39,
        name: "Hyundai"
    },
    {
        id: 42,
        name: "JAC"
    },
    {
        id: 44,
        name: "Jeep"
    },
    {
        id: 47,
        name: "Kia Motors"
    },
    {
        id: 48,
        name: "Lada"
    },
    {
        id: 50,
        name: "Land Rover"
    },
    {
        id: 52,
        name: "LIFAN"
    },
    {
        id: 60,
        name: "Mercedes-Benz"
    },
    {
        id: 63,
        name: "MINI"
    },
    {
        id: 64,
        name: "Mitsubishi"
    },
    {
        id: 66,
        name: "Nissan"
    },
    {
        id: 67,
        name: "Peugeot"
    },
    {
        id: 70,
        name: "Porsche"
    },
    {
        id: 73,
        name: "Renault"
    },
    {
        id: 81,
        name: "SSANGYONG"
    },
    {
        id: 82,
        name: "Subaru"
    },
    {
        id: 83,
        name: "Suzuki"
    },
    {
        id: 85,
        name: "Toyota"
    },
    {
        id: 86,
        name: "Troller"
    },
    {
        id: 87,
        name: "Volvo"
    },
    {
        id: 88,
        name: "VW - VolksWagen"
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