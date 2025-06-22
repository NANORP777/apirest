const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        console.log("se instancio el servidor")
        this.app = express();
        this.port = Number(process.env.API_PORT) || 3500;
        this.pre = "/api"
        this.path = {
            roles: `${this.pre}/roles`,
            users: `${this.pre}/users`
        }
        this.middlewares()
        this.routes()
    }

    middlewares = () => {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static("./src/public"));
    }

    routes() {
        this.app.use(this.path.roles, require("../routes/role.routes"));
        this.app.use(this.path.users, require("../routes/user.routes"));
    }

    listen = () => {
        this.app.listen(this.port, () => {
            console.log(`Example app listernig on port ${this.port + 1}`);
            console.log("Example app listening on port" + this.port);

        })
    }

}

module.exports = {
    Server
}