import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';

import { DevAspect } from './dev.aspect';
import { transformTsConfig } from './typescript/transform-tsconfig';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
// const tsconfig = require('./typescript/tsconfig');

export class DevMain {
  static slots = [];

  static dependencies: any = [ReactAspect, EnvsAspect];
  static runtime: any = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.overrideTsConfig(tsconfig),
      react.useTypescript({
        devConfig: [transformTsConfig],
        buildConfig: [transformTsConfig],
      }),
      // react.useWebpack({
      //   previewConfig: [twPreviewTransformer],
      //   devServerConfig: [twDevServerTransformer],
      // }),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            // config.setRule('no-use-before-define', 'off'); // provided by ts-eslin/no-use-before
            // config.setRule('@typescript-eslint/no-use-before-define', [
            //   'error',
            //   { typedefs: false, functions: false },
            // ]);
            // config.setRule('react/jsx-props-no-spreading', 'off');
            // config.setRule('react/require-default-props', 'off');
            // config.setRule('arrow-body-style', 'off');
            // config.setRule('prefer-arrow-callback', [
            //   'warn',
            //   { allowNamedFunctions: true },
            // ]);
            // config.setRule('react/destructuring-assignment', 'off');
            // config.setRule('class-methods-use-this', 'off');
            // config.setRule('jsx-a11y/click-events-have-key-events', 'off');
            // config.setRule('jsx-a11y/no-static-element-interactions', 'off');

            return config;
          },
        ],
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            config.setKey('printWidth', 120);
            config.setKey('singleQuote', true);

            return config;
          },
        ],
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          // '@types/react': '17.0.3'
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new DevMain();
  }
}

DevAspect.addRuntime(DevMain);
