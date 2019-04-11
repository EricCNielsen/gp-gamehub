module.exports = {
    search: async (req, res) => {
        const db = req.app.get('db');
        const {search} = req.query
        console.log(111, search)
        let searchResults = {}
        
        searchResults.users = await db.get_users(search)
        searchResults.clans = await db.get_clans(search)
        
        // if (searchResults === []){
        //     return res.status(500).send('Nothing was found...')
        // }

        res.status(200).send(searchResults)
    }
};
