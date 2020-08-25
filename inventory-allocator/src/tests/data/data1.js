
exports.data = {
    items : {
        apple: 5, 
        banana: 5,
        orange: 5
    },
    warehouses : [ 
        { 
            name: "owd", 
            inventory: {
                apple: 5, 
                orange: 10 
            } 
        }, 
        { 
            name: "dm", 
            inventory: { 
                banana: 5, 
                orange: 10 
            } 
        } 
    ]
}

exports.result = [
    {
        "owd" : {
            apple: 5,
            orange: 5
        }
    },
    {
        "dm" : {
            banana: 5
        }
    }
]