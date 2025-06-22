const { response, request } = require('express');
const { RoleServices } = require('../services/role.services');

class RoleController {
    constructor() {
        console.log("Instancia del RoleController")
        this.role_services = new RoleServices();
    }
    getAll = (req = request, res = response) => {
        const roles = this.role_services.getAll()
        if (this.role_services.getCount() <= 0) {
            return res.status(404).json({
                msj: "Get Registros no encontrados",
            })
        } else {
            return res.status(200).json({
                msj: "Registros encontrados",
                roles
            })
        }
    }

    getOne = (req = request, res = response) => {
        const { id } = req.params; //extraemos el id
        const role = this.role_services.getOne(Number(id));
        if(!role){
            return res.status(404).json({
                msj: "resgitro no encontrado",
                id
            })
        }else{
            return res.status(200).json({
                msj:"resgistro encontrado",
                role
            })
        }
    }

    created = (req = request, res = response) => {
        const {name} =req.body;
        const data={
            name
        }
        const role=this.role_services.created(data)
        return res.status(201).json({
            msj: "Registro exitoso",
            role
        })
    }

    updated = (req = request, res = response) => {
        const {id} = req.params;
        const {name} = req.body;
        const data = {
            name
        }
        const role= this.role_services.updated(Number(id),data)
        return res.status(200).json({
            msj: "Actualizado",
            role
        })
    }

    deleted = (req = request, res = response) => {
        const {id} = req.params;
        const role = this.role_services.deleted(Number(id))
        return res.status(204).json({
            msj:"eliminado",
            role
        })
    }
}

module.exports = {
    RoleController
}