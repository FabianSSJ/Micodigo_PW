const express = require("express");
const router = express.Router();

const autoController = require("../controllers/auto.controller");


router.get("/", function (request, response) {
  const result = autoController.getAutos();
  response.status(200).json({
    data: result,
    status: true,
    message: "Lista de autos obtenida.",
  });
});


router.post("/", function (request, response) {
  const result = autoController.createAuto(request.body);
  response.status(201).json({
    data: result,
    status: true,
    message: "Auto creado satisfactoriamente.",
  });
});


router.put("/:id", function (request, response) {
  const result = autoController.updateAuto(request.params.id, request.body);
  response.status(200).json({
    data: result,
    status: true,
    message: "Auto actualizado satisfactoriamente.",
  });
});


router.delete("/:id", function (request, response) {
  const result = autoController.deleteAuto(request.params.id);
  response.status(200).json({
    data: result,
    status: true,
    message: "Auto eliminado satisfactoriamente.",
  });
});

module.exports = router;
