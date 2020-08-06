import Worker from './index.worker.js';
import Vue from 'vue';

export let worker = null;
let target = null;

export const init = options => {
  console.log(123123)
  const {template} = options;

  const {path} = options;
  worker = new Worker();

  worker.onmessage = e => {
    const {type, data} = JSON.parse(e.data);
    console.log(e.data)
    console.log('接受1')
    if (type === 'init') {
      const mountNode = document.createElement('div');
      document.body.appendChild(mountNode);
      console.log(template())
      target = new Vue({
        el: mountNode,
        data: () => data,
        template: template(),
        created() {
          console.log('执行created，第二部')
          worker.postMessage(JSON.stringify({
              type: 'lifeCircle:create',
            })
            ,
            null);
        }
      });
    }

    if (type === 'update') {
      Object.keys(data).map(key => {
        console.log(target)
        console.log(key)
        console.log(target[key])
        target[key] = data[key];
      });
    }
  }
};
