import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "./connect_to_s3.js";
import {promises as fs} from "fs";
import mime from "mime-types"

const fileType = mime.lookup("./song.mp3")
const fileBuffer = await fs.readFile("song.mp3");
console.log(fileBuffer)
// Upload a local file
const upload = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: "musics/songD",
    Body: fileBuffer,
    ContentType: fileType,
});

const result = await s3.send(upload);

console.log(result);
