const factory = require("./handlerFactory");
const { EBill, GasBill, TelBill } = require("../Models/homeServicesModel");

//ELECTRICITY BILL
exports.getAllEBill = factory.getAll(EBill);
exports.getOneEBill = factory.getOne(EBill);
exports.createEBill = factory.createOne(EBill);
exports.updateEBill = factory.updateOne(EBill);
exports.deleteOneEBill = factory.deleteOne(EBill);
exports.deleteAllEBill = factory.deleteAll(EBill);

//GAS BILL
exports.getAllGasBill = factory.getAll(GasBill);
exports.getOneGasBill = factory.getOne(GasBill);
exports.createGasBill = factory.createOne(GasBill);
exports.updateGasBill = factory.updateOne(GasBill);
exports.deleteOneGasBill = factory.deleteOne(GasBill);
exports.deleteAllGasBill = factory.deleteAll(GasBill);

//TELEPHONE BILL
exports.getAllTelBill = factory.getAll(TelBill);
exports.getOneTelBill = factory.getOne(TelBill);
exports.createTelBill = factory.createOne(TelBill);
exports.updateTelBill = factory.updateOne(TelBill);
exports.deleteOneTelBill = factory.deleteOne(TelBill);
exports.deleteAllTelBill = factory.deleteAll(TelBill);
