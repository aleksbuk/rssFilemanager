import path from 'path';
import { chdir } from 'process';
import { getWorkDirr } from '../data/getWorkDirr';

export const up = () => {
  const currentDir = path.join(process.cwd(), '..');
  chdir(currentDir);
  console.log(getWorkDirr(currentDir));
};
