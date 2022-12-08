const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");

const {
  createProduct,
  getAllProductsFromUser,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  adminDeleteProduct,
} = require("../controllers/product.controller");
const { uploadProductImage } = require("../controllers/upload.controller");

router.route("/createProduct").post(authenticateUser, createProduct);
router.route("/showProducts").get(authenticateUser, getAllProductsFromUser);
router.route("/showSingleProduct/:id").get(authenticateUser, getSingleProduct);
router.route("/updateProduct/:id").patch(authenticateUser, updateProduct);
router.route("/deleteProduct/:id").delete(authenticateUser, deleteProduct);

router.route("/uploads").post(authenticateUser, uploadProductImage);

//delete by admin
router
  .route("/deleteProductByAdmin/:id")
  .delete(authenticateUser, adminDeleteProduct);

module.exports = router;
