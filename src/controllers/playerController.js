const playerServ = require("../services/playerServices")

const create = async (req, res) => {
    try {
        const { username } = req.body

        const player = await playerServ.createPlayer(username);

        res.status(201).json(player)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getById = async (req, res) => {
    try {
        const player = await playerServ.getPlayerById(req.body.id)

        if (!player) {
            return res.status(404).json({
                error: "Player not found."
            })
        }

        res.status(200).json(player)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}