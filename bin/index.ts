#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { XML2JSONStack } from '../lib/index';

const app = new cdk.App();
const description = "XML2JSON (uksb-1tthgi812) (tag:xml2json)"
new XML2JSONStack(app, 'XML2JSONStack', {description });
