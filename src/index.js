import {Vox} from './vox/index';

const config = {
  data: {
    msg: 'hello Vox'
  },
  create() {
    console.log(this)
    setTimeout(() => {
      this.setData({
        msg: 'setData',
      })
    }, 1000)
  }
}

const template = () => {
  return '<div>{{msg}}</div>';
}

Vox({
  path: './vox/index.worker.js',
  template,
  config,
});
