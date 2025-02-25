import { PreactLibrarySchema } from './schema';
import { Linter } from '@nrwl/linter';
import { readJson, updateJson } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { libraryGenerator } from './library';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const devkit = require('@nrwl/devkit');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const readNxVersionModule = require('../utils/utils');

describe('preact library schematic', () => {
  jest.spyOn(devkit, 'ensurePackage').mockReturnValue(Promise.resolve());
  jest.spyOn(readNxVersionModule, 'readNxVersion').mockReturnValue('15.7.0');

  let host;
  const options: PreactLibrarySchema = {
    name: 'test',
    linter: Linter.EsLint,
    unitTestRunner: 'jest',
    e2eTestRunner: 'cypress',
    skipFormat: false,
  };

  beforeEach(() => {
    host = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
    updateJson(host, '/package.json', (json) => {
      json.devDependencies = {
        '@nrwl/workspace': '15.7.0',
      };
      return json;
    });
  });

  it('should add preact dependencies', async () => {
    await libraryGenerator(host, options);
    const packageJson = readJson(host, 'package.json');

    expect(packageJson.devDependencies['preact']).toBeDefined();
  });

  it('should add preact project files', async () => {
    await libraryGenerator(host, options);

    // expect(tree.exists(`libs/${options.name}/preact.config.cjs`)).toBeTruthy();
    expect(host.exists(`libs/${options.name}/tsconfig.lib.json`)).toBeTruthy();
    expect(host.exists(`libs/${options.name}/tsconfig.spec.json`)).toBeTruthy();
    expect(host.exists(`libs/${options.name}/tsconfig.json`)).toBeTruthy();
    expect(host.exists(`libs/${options.name}/.eslintrc.json`)).toBeFalsy();
    expect(host.exists(`libs/${options.name}/.eslintrc.js`)).toBeTruthy();
  });

  it('should fail if no importPath is provided with publishable', async () => {
    try {
      await libraryGenerator(host, {
        ...options,
        publishable: true,
      });
    } catch (error) {
      expect(error.message).toContain(
        'For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)'
      );
    }
  });
});
