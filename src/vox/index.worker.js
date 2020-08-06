self.setData = (data) => {
  console.log('setData called');
  self.postMessage(
    JSON.stringify({
      type: 'update',
      data,
    })
    ,
    null
  );
};
console.log('创建webworker执行,第一步')
self.postMessage(
  JSON.stringify({
    type: 'init',
    data: {
      msg: 'setData',
    }
  })
  ,
  null
);
self.onmessage = e => {
  console.log('执行第三步')
  //传入生命周期，调用生命周期的方法
  const {type} = JSON.parse(e.data);
  setTimeout(() => {
    console.log(this)
    console.log(self)
    self.setData({
      msg: 'setData',
    })
  }, 1000)
}
