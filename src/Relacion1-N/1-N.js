db.autores.aggregate([
    
    {
        "$lookup": {
            "from": "books",
            "localField": "Nombre",
            "foreignField": "Autor",
            "as": "Libros escritos"
        }
    },
    {
        "$project": {
            "_id": 0,
            "FechaNac": 0
        }
    }
]).pretty()