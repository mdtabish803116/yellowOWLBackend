"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const StudentSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    enrollNo: { type: String, required: true },
    dateOfAdmission: { type: String, required: true },
}, {
    timestamps: true,
});
exports.StudentModel = mongoose_1.default.model("Student", StudentSchema);
//# sourceMappingURL=students.js.map