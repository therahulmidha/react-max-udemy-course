import * as express from 'express';
// import * as OpenApiValidator from 'express-openapi-validator';
// import * as swaggerUI from 'swagger-ui-express';
import { readFileSync } from 'fs';
import * as YAML from 'js-yaml';
// import * as swaggerTools from 'swagger-tools';
import oasTools = require('oas-tools');

function loadDocumentSync(file: string): any {
    return YAML.load(readFileSync(file, 'utf8'));
}
export const initSwaggerMiddlware = async function (app: express.Express, basePath: string, cb: any) {
    try {
        const swaggerDoc = loadDocumentSync(basePath + "/api/openapi.yaml");
        const options = {
            controllers: basePath + "/controller",
            loglevel: "debug",
            strict: true,
            validator: true,
            docs: {
                apiDocs: "/api-docs",
                apiDocsPrefix: "",
                swaggerUi: "/docs",
                swaggerUiPrefix: ""
            }
        };
        oasTools.configure(options);
        oasTools.initialize(swaggerDoc, app, function () {
            cb();
        });
    } catch (error) {
        console.log(error)
    }
}