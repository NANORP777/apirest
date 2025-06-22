const { response, request } = require('express');
const { UserServices } = require('../services/user.services');

class UserController {
    constructor() {
        this.user_services = new UserServices();
    }

    getAll = (req = request, res = response) => {
        const users = this.user_services.getAll();
        if (this.user_services.getCount() <= 0) {
            return res.status(404).json({ msj: "No hay usuarios" });
        }
        return res.status(200).json({ msj: "Usuarios encontrados", users });
    }

    getOne = (req = request, res = response) => {
        const { id } = req.params;
        const user = this.user_services.getOne(Number(id));
        if (!user) {
            return res.status(404).json({ msj: "Usuario no encontrado", id });
        }
        return res.status(200).json({ msj: "Usuario encontrado", user });
    }

    created = (req = request, res = response) => {
        const user = this.user_services.created(req.body);
        return res.status(201).json({ msj: "Usuario creado", user });
    }

updated = (req = request, res = response) => {
    const { id } = req.params;
    const user = this.user_services.updated(Number(id), req.body);
    if (!user) {
        return res.status(404).json({ msj: "Usuario no encontrado" });
    }
    return res.status(200).json({ msj: "Usuario actualizado", user });
}

deleted = (req = request, res = response) => {
    const { id } = req.params;
    const user = this.user_services.deleted(Number(id));
    if (!user) {
        return res.status(404).json({ msj: "Usuario no encontrado" });
    }
    return res.status(200).json({ msj: "Usuario eliminado", user });
}
}

module.exports = { UserController };