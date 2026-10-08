import {Router} from "express";
import{
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productionController.js"

const router = router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct);

export default router;