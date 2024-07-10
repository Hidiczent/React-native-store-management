const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guestController");

router.get("/", guestController.getAllGuest);
router.post("/", guestController.createGuest);

router.put("/:id", guestController.updateGuest);
router.delete("/:id", guestController.deleteGuest);

// router.get('/ids',guestController.getAllGuestids);

module.exports = router;
