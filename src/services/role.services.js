const{roles} = require("../models/role.models");

class RoleServices{
    constructor(){
        this.roles=roles;
    }

    getAll=()=>{
        return this.roles;
    }

    getOne=(id)=>{
        const role = this.roles.find((x)=>{
            if(x.id===id){
                return true
            }
        });
        return role;
    }

    getName=(name)=>{
        const role = this.roles.find((x)=>{
            if(x.name===name){
                return true
            }
        });
        return role;
    }

    getndice=(id)=>{
        const indice = this.roles.findIndex((x)=>{
            if(x.id===id){
                return true
            }
        });
        return indice;
    }
    created=(role)=>{
        const data={
        id:this.roles.length+1,
        name:role.name,
        status:true
        }
        this.roles.push(data)
        let role_new = this.getName(data.name);
        return role_new;
    }

    updated=(id,role)=>{
        const data = {
             id,
             name:role.name, 
             status:true
            }
        let i=this.getndice(id)
        if(i === -1) return null;
        this.roles[i]=data;
        return data;
    }

    deleted=(id)=>{
        let i=this.getndice(id)
        if(i === -1) return null;
        const role = this.roles.splice(i,1)
        return role[0];
    }


    getCount=()=>{
        return this.roles.length;
    }
}


 module.exports ={
    RoleServices
 }