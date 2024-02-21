const router = require("express").Router();
const {
  findAll,
  create,
  deleteAll,
  findAllFavorite,
  findOne,
  update,
  delete: deleteOne,
} = require("../controllers/contact.controller");

// Danh sách tất cả liên hệ
router.get("/", findAll);

// Tạo mới liên hệ
router.post("/", create);

// Xóa tất cả liên hệ
router.delete("/", deleteAll);

// Danh sách liên hệ yêu thích
router.get("/favorite", findAllFavorite);

// Lấy thông tin liên hệ theo ID
router.get("/:id", findOne);

// Cập nhật thông tin liên hệ theo ID
router.put("/:id", update);

// Xóa liên hệ theo ID
router.delete("/:id", deleteOne);

module.exports = router;
