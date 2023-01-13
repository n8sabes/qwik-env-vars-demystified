import { component$, useSignal } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';


export const logEnvVars = (header: string, count: number = -1) => {
  console.warn(`\n\n###\n### ENVIRONMENT VARS [index.tsx] -- ${header}\n###`);

  console.warn(`count = `, count);
  console.warn(`meta.env =`, import.meta.env);

  if (typeof process !== 'undefined') {
    // console.warn(`>>>> ${context} - process.env = `, process.env);
    console.warn(`process.env['VITE_PRODUCT_NAME'] = `, process.env['VITE_PRODUCT_NAME']);
    console.warn(`process.env.SECRET_KEY = `, process.env['SECRET_KEY']);
  } else {
    console.warn(`process.env = undefined`);
  }
}

logEnvVars('Global Scope');

export const onRequest: RequestHandler<any> = async () => {
  logEnvVars('onRequest');
}

export default component$(() => {
  const countSignal = useSignal(0);
  logEnvVars('render', countSignal.value);
  return (
    <div>
      <h1 style={{ padding: "10px 0px 10px 0px" }}>Count = {countSignal.value}</h1>
      <button style={{ padding: "20px" }} onClick$={() => {
        countSignal.value++;
        logEnvVars('onClick$', countSignal.value);
      }}> Increment Count</button>
    </div>
  );
});
