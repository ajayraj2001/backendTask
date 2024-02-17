const Section = require("../models/section");

exports.createSection = async (sectionsData) => {
  try {
    const createdSections = await Section.create(sectionsData);
    return createdSections;
  } catch (error) {
    throw error;
  }
};

exports.getAllSections = async () => {
  try {
    const sections = await Section.find();
    return sections;
  } catch (error) {
    throw error;
  }
};

exports.updateSectionById = async (id, data) => {
  try {
    const updatedSection = await Section.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedSection;
  } catch (error) {
    throw error;
  }
};

exports.deleteSectionById = async (id) => {
  try {
    const deletedData = await Section.findByIdAndDelete(id);
    console.log("yo", deletedData);
    return deletedData;
  } catch (error) {
    throw error;
  }
};
