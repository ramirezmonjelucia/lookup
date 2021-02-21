db.usuarios.aggregate([

    {
        "$lookup": {
            "from": "prestamos",
            "localField": "CodUsuario",
            "foreignField": "CodUsuario",
            "as":"Libros_alquilados"
           
        }
    },
    {
        $project:
        {
            _id:0
        }
    }
]).pretty()