import { readFileSync } from "node:fs";

const [deployResultPath = "deploy-result.json"] = process.argv.slice(2);
const deployResult = JSON.parse(readFileSync(deployResultPath, "utf8"));
const deployUrl = deployResult.deploy_url || deployResult.url || "";

if (!deployUrl) {
  console.error("Deploy result did not include deploy_url or url");
  process.exit(1);
}

process.stdout.write(`deploy_url=${deployUrl}\n`);
