const { Router } = require("express");
const { UserController } = require("../controllers/user.controller");

const router = Router();
const user_controller = new UserController();

router.get("/", user_controller.getAll.bind(user_controller));
router.get("/:id", user_controller.getOne.bind(user_controller));
router.post("/", user_controller.created.bind(user_controller));
router.put("/:id", user_controller.updated.bind(user_controller));
router.delete("/:id", user_controller.deleted.bind(user_controller));

module.exports = router;