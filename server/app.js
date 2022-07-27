require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const connectMongoDb = require("./config/db");
const errorHandler = require("./middleware/error");

// Router imports
const authRouter = require("./router/authRouter");
const brandRouter = require("./router/brandRouter");
const categoryRouter = require("./router/categoryRouter");
const companyAdminRouter = require("./router/companyAdminRouter");
const manufactureRouter = require("./router/manufacturerAdminRouter");
const { privateRoute } = require('./router/privateRoute');
const subCategoryRouter = require("./router/subcategoryRouter");
const uploadRouter = require("./router/uploadImage");
const { options } = require("./router/uploadImage");
const statusRouter = require("./router/networkStatus");

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));
bodyParser.json([options]);
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB Connection
connectMongoDb();

// Auth
app.use("/api/auth", authRouter);
app.use('/api/private', privateRoute);

// Category & Sub-category
app.use("/api", categoryRouter);
app.use("/api", subCategoryRouter);

// Company Admin
app.use("/api", companyAdminRouter);
app.use("/api", manufactureRouter);

// Brand
app.use("/api", brandRouter);

// Download CSV
app.use("/files", express.static(path.join(__dirname, 'public/files')));

app.use("/api", uploadRouter);

// Network Status
app.use("/", statusRouter);

// Error Handler (should be the last piece of middleware)
app.use(errorHandler);


let port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error ${err}`);
    server.close(() => process.exit(1));
});
