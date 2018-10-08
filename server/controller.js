module.exports = {
    getCats: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_cats()
        .then(cats => res.status(200).send(cats))
        .catch(err => {
            res.status(500).send({errorMessage: "Error with getting catalog"}, err);
        });
    },
    addCat: (req, res) => {
        const dbInstance = req.app.get('db');
        let {img, name, age, gender, type, color, breed, description} = req.body;
        dbInstance.add_cat([img, name, age, gender, type, color, breed, description])
        .then(cats => res.status(200).send(cats))
        .catch(err=> {
            res.status(500).send({errorMessage: "Error with adding cat"}, err);
        })
    },
    getOneCat: (req, res) => {
        const dbInstance = req.app.get('db');
        let {img, name, age, gender, type, color, breed, description} = req.body;
        dbInstance.get_one_cat([img, name, age, gender, type, color, breed, description])
        .then(cat => res.status(200).send(cat))
        .catch(err => {
            res.status(500).send({errorMessage: "Error with getting one cat", err});
        })
    },
    updateCat: (req, res) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;
        let {img, name, age, gender, type, color, breed, description} = req.body;
        // dbInstance.get_one_cat(`${req.params.id}`)
        dbInstance.update_cat([id, img, name, age, gender, type, color, breed, description])
        .then(cat => res.status(200).send(cat))
        .catch(err => {
            res.status(500).send({errorMessage: "Error with updating cat"}, err);
        })
    },
    deleteCat: (req, res) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;
        dbInstance.delete_cat(+id)
        .then(cat => res.status(200).send(cat))
        .catch(err => {
            res.status(500).send({errorMessage: "Error deleting cat"}, err)
        })
    }
}
    