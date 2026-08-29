import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "./connect_to_s3.js"


// Uploading to s3
const upload = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: "new.txt",
    Body: "hello there this is a ndddew file",
});

const respond = await s3.send(upload);
console.log(respond);