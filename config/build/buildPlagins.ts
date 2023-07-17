import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions, BuildPath } from './types/config';

export function buildPlagins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
