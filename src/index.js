import app from './app'
require('dotenv').config();

const port = process.env.PORT_LISTEN

const main = async () => {
    await app.listen(port, () => console.log(`Server running on port ${port}`))
}

main();