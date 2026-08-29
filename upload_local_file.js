import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "./connect_to_s3.js";
import fs from "fs";

// Upload a local file
const upload = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: "music.mp3",
    Body: fs.createReadStream("bgm.mp3"),
    ContentType:"audio/mpeg"
});

const result = await s3.send(upload)

console.log(result)