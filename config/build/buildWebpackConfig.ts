import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlagins } from './buildPlagins';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlagins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
