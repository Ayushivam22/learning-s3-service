import fs from "fs";
import path from "path";
import s3 from "./connect_to_s3.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const file = await rl.question("Enter the file path: ");

rl.close();

console.log("Selected:", file);

const file_name = path.basename(file);

const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: file_name,
    Body: fs.createReadStream(file),
});

const result = await s3.send(command);

console.log(result);
