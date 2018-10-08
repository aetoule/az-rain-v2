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
    }
}
    