const factory = require("./handlerFactory");
const {
  BloodBank,
  Instrument,
  TestReport,
} = require("../Models/medicineModel");

//MEDICINE 1
exports.getAllMedicine1 = factory.getAll(BloodBank);
exports.getOneMedicine1 = factory.getOne(BloodBank);
exports.createMedicine1 = factory.createOne(BloodBank);
exports.updateMedicine1 = factory.updateOne(BloodBank);
exports.deleteOneMedicine1 = factory.deleteOne(BloodBank);
exports.deleteAllMedicine1 = factory.deleteAll(BloodBank);

//MEDICINE 2
exports.getAllMedicine2 = factory.getAll(Instrument);
exports.getOneMedicine2 = factory.getOne(Instrument);
exports.createMedicine2 = factory.createOne(Instrument);
exports.updateMedicine2 = factory.updateOne(Instrument);
exports.deleteOneMedicine2 = factory.deleteOne(Instrument);
exports.deleteAllMedicine2 = factory.deleteAll(Instrument);

//MEDICINE 3
exports.getAllMedicine3 = factory.getAll(TestReport);
exports.getOneMedicine3 = factory.getOne(TestReport);
exports.createMedicine3 = factory.createOne(TestReport);
exports.updateMedicine3 = factory.updateOne(TestReport);
exports.deleteOneMedicine3 = factory.deleteOne(TestReport);
exports.deleteAllMedicine3 = factory.deleteAll(TestReport);
