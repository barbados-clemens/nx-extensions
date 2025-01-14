import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';
import {
  tsedVersion,
  tsedEnginesVersion,
  compressionVersion,
  cookieParserVersion,
  methodOverrideVersion,
  corsVersion,
  ajvVersion,
  bodyParserVersion,
  crossEnvVersion,
  dotEnvVersion,
  dotEnvExpandVersion,
  dotEnvFlowVersion,
  expressVersion,
  compressionTypesVersion,
  cookieParserTypesVersion,
  corsTypesVersion,
  expressTypesVersion,
  methodOverrideTypesVersion,
  tsedLoggerVersion,
  nrwlVersion,
} from '../../utils/versions';

export function updateDependencies(tree: Tree) {
  return addDependenciesToPackageJson(
    tree,
    {
      '@tsed/ajv': tsedVersion,
      '@tsed/common': tsedVersion,
      '@tsed/core': tsedVersion,
      '@tsed/di': tsedVersion,
      '@tsed/engines': tsedEnginesVersion,
      '@tsed/exceptions': tsedVersion,
      '@tsed/json-mapper': tsedVersion,
      '@tsed/passport': tsedVersion,
      '@tsed/platform-express': tsedVersion,
      '@tsed/logger': tsedLoggerVersion,
      '@tsed/logger-file': tsedLoggerVersion,
      '@tsed/platform-cache': tsedVersion,
      '@tsed/platform-exceptions': tsedVersion,
      '@tsed/platform-log-middleware': tsedVersion,
      '@tsed/platform-middlewares': tsedVersion,
      '@tsed/platform-params': tsedVersion,
      '@tsed/platform-response-filter': tsedVersion,
      '@tsed/platform-views': tsedVersion,
      '@tsed/schema': tsedVersion,
      '@nrwl/js': nrwlVersion,
      '@nrwl/node': nrwlVersion,
      compression: compressionVersion,
      'cookie-parser': cookieParserVersion,
      'method-override': methodOverrideVersion,
      cors: corsVersion,
      ajv: ajvVersion,
      'body-parser': bodyParserVersion,
      'cross-env': crossEnvVersion,
      dotenv: dotEnvVersion,
      'dotenv-expand': dotEnvExpandVersion,
      'dotenv-flow': dotEnvFlowVersion,
      express: expressVersion,
    },
    {
      '@types/compression': compressionTypesVersion,
      '@types/cookie-parser': cookieParserTypesVersion,
      '@types/cors': corsTypesVersion,
      '@types/express': expressTypesVersion,
      '@types/method-override': methodOverrideTypesVersion,
    }
  );
}
