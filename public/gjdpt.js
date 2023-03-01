function listen() {
  var origin = {
    open: XMLHttpRequest.prototype.open,
    send: XMLHttpRequest.prototype.send
  }

  XMLHttpRequest.prototype.open = function (a, b) {
    // console.log('open');
    // this.addEventListener('loadend', onReadyStateChangeReplacement);

    this.addEventListener('load', replaceFn)
    // this.addEventListener('readystatechange', replaceFn);
    origin.open.apply(this, arguments)
  }
  XMLHttpRequest.prototype.send = function (a, b) {
    origin.send.apply(this, arguments)
  }

  function replaceFn(obj) {
    // console.log(obj);
    // var url = obj.target.responseURL;
    console.log('监听', this)
    // console.log('监听', this.status, this.readyState, this.response)
  }
}
listen()