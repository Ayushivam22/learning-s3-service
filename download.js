import { GetObjectCommand } from "@aws-sdk/client-s3";
import s3 from "./connect_to_s3.js";
import fs from "fs";

const command = new GetObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: "music.mp3",
});

const result = await s3.send(command);
// result.Body contains the text stream
// so we need to convert that to string
// const text = await result.Body.transformToString();
// console.log(text);

await result.Body.pipe(fs.createWriteStream("song.mp3"));
