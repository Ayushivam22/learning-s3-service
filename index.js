import "dotenv/config";
import {
    S3Client,
    ListObjectsV2Command
} from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: process.env.AWS_REGION
});

const result = await s3.send(
    new ListObjectsV2Command({
        Bucket: process.env.AWS_S3_BUCKET
    })
);

console.log(result);