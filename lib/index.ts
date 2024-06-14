import * as cdk from 'aws-cdk-lib';
import { HttpApi, HttpMethod } from 'aws-cdk-lib/aws-apigatewayv2';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { CfnOutput } from 'aws-cdk-lib';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';

export class XML2JSONStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda
    const fn = new NodejsFunction(this, 'XML2JSONFN', {
      functionName: 'xml2json',
      runtime: Runtime.NODEJS_20_X,
      entry: path.join(__dirname, `/../resources/index.ts`)
    })

    // HttpApi Gateway
    const httpApi = new HttpApi(this, 'XML2JSONAPI', {
      apiName: 'xml2json'
    })
    httpApi.addRoutes({
      path: '/',
      methods: [ HttpMethod.GET ],
      integration: new HttpLambdaIntegration('LambdaIntegration', fn),
    })

    // Outputs
    new CfnOutput(this, 'HttpApi URL', {
      value: httpApi.url ?? 'Error: can\'t get the HTTP API URL!',
    });

  }
}
