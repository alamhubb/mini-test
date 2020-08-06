import { init as workerInit, worker } from './init';

const isInWorker = typeof window === "undefined";

function Vox(options) {
  console.log(isInWorker)
  workerInit(options);
}

export {Vox}
