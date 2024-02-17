const mongoose = require("mongoose");

const styleSchema = new mongoose.Schema({
  fontsize: Number,
  fontUnit: String,
  justifyContent: String,
  textDecor: String,
  color: String,
  background: String,
  backgroundType: String,
  space: Number,
  lineHeight: Number,
  fontWeight: Number,
  textAlignItems: String,
  alignItems: String,
  fontStyle: String,
  fontFamily: String,
  width: String,
  widthNumber: Number,
  widthUnit: String,
  height: String,
  heightNumber: Number,
  heightUnit: String,
  marginUnit: String,
  margin: String,
  marginL: Number,
  marginR: Number,
  marginT: Number,
  marginB: Number,
  paddingUnit: String,
  padding: String,
  paddingL: Number,
  paddingR: Number,
  paddingT: Number,
  paddingB: Number,
  textTransform: String,
  gradientAngle: Number,
  gradientLeft: String,
  gradientRight: String,
});

const itemSchema = new mongoose.Schema({
  type: String,
  value: mongoose.Schema.Types.Mixed,
  style: styleSchema,
});

const innerSectionStyleSchema = new mongoose.Schema({
  imgUrl: String,
  videoUrl: String,
  opacity: Number,
  background: String,
  gradientAngle: Number,
  gradientLeft: String,
  gradientRight: String,
  backgroundType: String,
});

const sectionSchema = new mongoose.Schema({
  col: String,
  innerSectionStyle: innerSectionStyleSchema,
  array: [itemSchema],
});

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;
