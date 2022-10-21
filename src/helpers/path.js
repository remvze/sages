import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Get filename and dirname of a path
 *
 * @param {string} path - The desired path
 * @returns {{
 *   filename: string,
 *   dirname: string
 * }}
 *
 * @example
 *   getPath(import.meta.url)
 */
export const getPath = path => {
  const _filename = fileURLToPath(path);
  const _dirname = dirname(_filename);

  return {
    filename: _filename,
    dirname: _dirname,
  };
};
