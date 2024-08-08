const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find();

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body);

    if (!doc) {
      return next(new AppError("No document found with id", 404));
    }

    res.status(200).json({
      status: "success",

      data: {
        data: doc,
      },
    });
  });
exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = Model.findById(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with id", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
exports.deleteAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = Model.deleteMany();

    if (!doc) {
      return next(new AppError("No document found with id", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = Model.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
