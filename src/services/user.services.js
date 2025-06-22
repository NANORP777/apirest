const { users } = require("../models/user.models");

class UserServices {
    constructor() {
        this.users = users;
    }

    getAll = () => this.users;

    getOne = (id) => this.users.find(u => u.id === id);

    getIndice = (id) => this.users.findIndex(u => u.id === id);

    created = (user) => {

        const maxId = this.users.length > 0 
        ? Math.max(...this.users.map(u => u.id)) 
        : 0;

        const data = {
            id: maxId + 1,
            ...user,
            name: "juan",
        email: "juan123@gmail.com",
        password: "131313",
        telefono: "041478534895",
        direccion: "barquisimeto",
        sexo: "M",
            status: true
        };
        this.users.push(data);
        return data;
    }

    updated = (id, user) => {
        const i = this.getIndice(id);
        if (i === -1) return null;
        this.users[i] = { ...this.users[i], ...user };
        return this.users[i];
    }

    deleted = (id) => {
        const i = this.getIndice(id);
        if (i === -1) return null;
        const user = this.users.splice(i, 1);
        return user[0];
    }

    getCount = () => this.users.length;
}

module.exports = { UserServices };