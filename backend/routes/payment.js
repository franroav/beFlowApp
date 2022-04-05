const { Router } = require("express");
const {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
} = require("../controllers/payment");

const router = Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", deleteOne);

module.exports = router;
