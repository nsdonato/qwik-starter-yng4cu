import { component$, useSignal, $ } from '@builder.io/qwik';
import { DocumentHead, server$, routeLoader$ } from '@builder.io/qwik-city';
// import { getConfig } from './config';
import { readFile } from 'fs/promises';
import * as path from 'path';

const getConfig2 = server$(() => {
  return 'server$';
});

const getConfig3 = routeLoader$(async (requestEvent) => {
  let fileBuffer = await readFile('./config.json', { encoding: 'utf8' });
  console.log('fb', fileBuffer);
  return JSON.stringify(JSON.parse(fileBuffer));

  return 'routeLoader$ yeahh ' + requestEvent.env.get('DB_PRIVATE_KEY');
});

export default component$(() => {
  const signal = getConfig3(); // Readonly<Signal<Product>>
  // return <p>routeLoader name: {signal.value}</p>;

  const t = useSignal('hallo');
  /*
  const getConfig_ = $(async (): Promise<any> => {
    return await getConfig();
  });*/

  return (
    <>
      <p>routeLoader name: {signal.value}</p>
      <p>Click to call server$:</p>{' '}
      <button
        onClick$={async () => {
          t.value = await getConfig2();
        }}
      >
        Click me
      </button>
      <br />
      output:
      <br />
      {t.value}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
