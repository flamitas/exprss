const controller = {}

controller.list = (req, res) => {
    let kind = req.body.kind

    let clients = [
        {
            name: "alejandro",
            age: 25,
            sex: "M",
            kind: "vip"
        },        
        {
            name: "luisa",
            age: 24,
            sex: "F",
            kind: "vip"
        },
        {
            name: "romero",
            age: 12,
            sex: "M",
            kind: "vip"
        }
    ]
    res.status(200).json({
        status: 200,
        message: "Done",
        response: clients
    })
}

controller.save = (req, res) => {
    let kind = req.body.kind
    let client = req.body;
    res.status(200).json({
        status: 200,
        message: "Done",
        response: client
    })
}

module.exports = controller