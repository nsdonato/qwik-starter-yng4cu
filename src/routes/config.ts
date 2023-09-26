// import { readFile } from 'fs/promises';
import { server$ } from '@builder.io/qwik-city';

const getConfigFunc = async (): Promise<any> => {
  //let fileBuffer = await readFile('./config.json', { encoding: 'utf8' });
  let fileBuffer = '{"string": "test"}';
  console.log('fb', fileBuffer);
  return JSON.parse(fileBuffer);
};

export const getConfig = server$(() => {
  return 'server$';
});
