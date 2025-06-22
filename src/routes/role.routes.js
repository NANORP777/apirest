const { Router } = require("express");
const { RoleController } = require("../controllers/role.controller");

const router = Router();
const role_controller = new RoleController();
router.get("/", role_controller.getAll.bind(role_controller));
router.get("/:id", role_controller.getOne.bind(role_controller));
router.post("/", role_controller.created.bind(role_controller));
router.put("/:id", role_controller.updated.bind(role_controller));
router.delete("/:id", role_controller.deleted.bind(role_controller));

module.exports = router;