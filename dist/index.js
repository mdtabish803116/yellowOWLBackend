"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use("/", (0, router_1.default)());
app.get("/api", (req, res) => {
    res.status(200).send("welcome to yelllow owl.");
});
const PORT = process.env.PORT || 3001;
connectDataBase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
    });
});
async function connectDataBase() {
    const dbUrl = process.env.MONGO_DB_URL;
    try {
        await mongoose_1.default.connect(dbUrl);
        console.log("database connection successful");
    }
    catch (err) {
        console.error("Error in database connection", err.message);
        throw err;
    }
}
//# sourceMappingURL=index.js.map