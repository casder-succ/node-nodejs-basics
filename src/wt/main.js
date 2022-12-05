import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  let number = 10;

  const results = (await Promise.allSettled(cpus().map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker('./worker.js', {
        workerData: number++,
      });

      worker.on('message', (message) => {
        typeof message === 'number' ?
          resolve({status: 'resolved', data: message}) : reject({status: 'error', data: null});
      });

      worker.on('error', () => {
        reject({status: 'error', data: null});
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          reject({status: 'error', data: null});
        }
      });
    });
  }))).map((promise) => {
    return promise.status === 'fulfilled' ? promise.value : promise.reason;
  });

  console.log(results);
};

await performCalculations();
