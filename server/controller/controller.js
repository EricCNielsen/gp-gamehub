module.exports = {
    search: async (req, res) => {
        const db = req.app.get('db');
        const {name, username} = req.body
        console.log(111, req.body)

        let searchResultUsers = await db.get_users({username})
        let searchResultClans = await db.get_clans({name})
        searchResults = [searchResultUsers, searchResultClans]
        
        // if (searchResults === []){
        //     return res.status(500).send('Nothing was found...')
        // }
        console.log(searchResults)

        res.status(200).send(searchResults)
    }
};
