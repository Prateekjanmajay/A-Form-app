const factory = require("./handlerFactory");
const { CivilServices, CaCs, MedEng } = require("../Models/educationModel");

//COURSE 1
exports.getAllCourse1 = factory.getAll(CivilServices);
exports.getOneCourse1 = factory.getOne(CivilServices);
exports.createCourse1 = factory.createOne(CivilServices);
exports.updateCourse1 = factory.updateOne(CivilServices);
exports.deleteOneCourse1 = factory.deleteOne(CivilServices);
exports.deleteAllCourse1 = factory.deleteAll(CivilServices);

//COURSE 2
exports.getAllCourse2 = factory.getAll(CaCs);
exports.getOneCourse2 = factory.getOne(CaCs);
exports.createCourse2 = factory.createOne(CaCs);
exports.updateCourse2 = factory.updateOne(CaCs);
exports.deleteOneCourse2 = factory.deleteOne(CaCs);
exports.deleteAllCourse2 = factory.deleteAll(CaCs);

//COURSE 3
exports.getAllCourse3 = factory.getAll(MedEng);
exports.getOneCourse3 = factory.getOne(MedEng);
exports.createCourse3 = factory.createOne(MedEng);
exports.updateCourse3 = factory.updateOne(MedEng);
exports.deleteOneCourse3 = factory.deleteOne(MedEng);
exports.deleteAllCourse3 = factory.deleteAll(MedEng);
