const express = require("express");
const router = express.Router();
const sectionsController = require("../controllers/sectionController");

router.post("/", async (req, res) => {
  try {
    const sectionsData = req.body;
    const createdSections = await sectionsController.createSection(
      sectionsData
    );
    res.status(201).json({
      sucess: true,
      message: "data created Successfully",
      createdSections,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const sections = await sectionsController.getAllSections();
    res
      .status(200)
      .json({ sucess: true, message: "data fetched Successfully", sections });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSection = await sectionsController.updateSectionById(
      id,
      req.body
    );
    res.status(200).json({
      sucess: true,
      message: "data updated Successfully",
      updatedSection,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await sectionsController.deleteSectionById(id);
    console.log("yo23------", deletedData);
    res.status(204).send({
      sucess: true,
      message: "data deleted Successfully",
      deletedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
