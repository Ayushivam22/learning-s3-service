import { ListObjectsCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import s3 from "./connect_to_s3.js";

const command = new ListObjectsCommand({
    Bucket: process.env.AWS_S3_BUCKET,
});

const result = await s3.send(command)
// console.log(result.Contents)
const keys = result.Contents.map(obj => obj.Key)
console.log(keys)