const express = require('express')

var brands = [
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

var autos = [
    {
        id: 1,
        model: "EcoSport FREESTYLE 1.5 12V Flex 5p Aut.",
        year: 2019,
        price: 76835,
        brandId: 29,
    },
    {
        id: 2,
        model: "Ka 1.0 8V/1.0 8V ST Flex 3p",
        year: 2013,
        price: 21381,
        brandId: 29
    },
    {
        id: 3,
        model: "AGILE LT 1.4 MPFI 8V FlexPower 5p",
        year: 2010,
        price: 25104,
        brandId: 33
    },
    {
        id: 4,
        model: "Celta 1.0/Super/N.Piq.1.0 MPFi VHC 8V 3p",
        year: 2005,
        price: 13390,
        brandId: 33
    },
    {
        id: 5,
        model: "Fusca",
        year: 1985,
        price: 11147,
        brandId: 88
    },
    {
        id: 6,
        model: "Palio Celebration 1.0 Fire Flex 8V 4p",
        year: 2007,
        price: 18126,
        brandId: 27
    },
    {
        id: 7,
        model: "Uno Mille 1.0/ i.e./Electronic/Brio 2p",
        year: 1997,
        price: 7758,
        brandId: 27
    },
    {
        id: 8,
        model: "Strada Endurance 1.4 Flex 8V CS Plus",
        year: 2021,
        price: 71415,
        brandId: 27
    }
]

/* -------------------------------------------------------------------------------------------------------------------------- */

function createId(entity, limit = 100) {
    let id;

    do {
        id = Math.floor(Math.random() * limit)
    } while (entity.some(item => item.id === id))

    return id
}

/* -------------------------------------------------------------------------------------------------------------------------- */

const brandsRouter = express.Router()

brandsRouter.get('/', async (req, res) => {
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

brandsRouter.post('/', async (req, res) => {
    try {
        const { name } = req.body

        let newBrand = {
            name,
            //id: generateId()
            id: createId(brands)
        }

        brands.push(newBrand)

        return res.status(200).json(newBrand.id)

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
})

/* -------------------------------------------------------------------------------------------------------------------------- */

const autosRouter = express.Router()

autosRouter.get('/', async (req, res) => {
    return res.json(autos)
})

autosRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const auto = autos.find(auto => auto.id === parseInt(id))

        if (auto) {
            autos = autos.filter(auto => auto.id !== parseInt(id))
            return res.status(200)
        }

        return res.status(400).json({ error: "Id informada não pertence a um veículo existente" })

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
})

autosRouter.post('/', async (req, res) => {
    try {
        const { model, year, price, brandId } = req.body

        let newAuto = {
            id: createId(autos, 10000),
            model,
            year,
            price,
            brandId
        }

        autos.push(newAuto)

        return res.status(200).json(newAuto.id)

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
})

autosRouter.get('/', async (req, res) => {
    return res.json(autos)
})

/* -------------------------------------------------------------------------------------------------------------------------- */

const summaryRouter = express.Router()

summaryRouter.get('/', async (req, res) => {
    let summary = brands.map(brand => {
        const summaryItem = {
            id: brand.id,
            name: brand.name
        }

        return summaryItem
    })

    summary.forEach((brand, index) => {
        summary[index].autos = autos.reduce((total, auto) => {
            if (auto.brandId === brand.id) {
                total += 1
            }

            return total
        }, 0)

        summary[index].totalPrice = autos.reduce((total, auto) => {
            if (auto.brandId === brand.id) {
                total += auto.price
            }

            return total
        }, 0)
    })

    return res.json(summary)
})

module.exports = { autosRouter, brandsRouter, summaryRouter }
