const express = require('express')

let autos = [
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
            return res.status(200).json({ message: `Veículo: ${id} deletado com sucesso` })
        }

        return res.status(400).json({ error: "Id informada não pertence a um veículo existente" })

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
})

module.exports = autosRouter