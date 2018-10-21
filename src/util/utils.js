const utils = {
  //缩放
  resize: function (width) {
    var clientWidth = parent.document.documentElement.clientWidth;
    var clientHeight = parent.document.documentElement.clientHeight;
    resize(clientWidth, clientHeight);
    window.addEventListener('resize', resize(clientWidth, clientHeight));

    function resize(docWidth, docHeight) {
      var docScale = docHeight / docWidth,
        designWidth = width,
        designHeight = 667,
        els = document.querySelectorAll('.content'),
        scale = docWidth / designWidth,
        scaleX = docWidth / designWidth,
        scaleY = docHeight / designHeight;
      convertArray(els).forEach(function (el) {
        extend(el.style, {
            width: designWidth + 'px',
            height: (docScale * designWidth) + 'px',
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: '0 0',
            webkitTransformOrigin: '0 0',
            transform: 'scale(' + scale + ')',
            webkitTransform: 'scale(' + scale + ')',
            overflowX: 'hidden',
            webkitOverflowScrolling: 'touch'
        })
      })
    }

    function convertArray(arrayLike) {
      return Array.prototype.slice.call(arrayLike, 0);
    }

    function extend() {
      var args = Array.prototype.slice.call(arguments, 0);
      return args.reduce(function (prev, now) {
        for (var key in now) {
          if (now.hasOwnProperty && now.hasOwnProperty(key)) {
            prev[key] = now[key]
          }
        }
        return prev;
      });
    }
  },
  /**
   * 获取当前的环境变量
   */
  getEnv: function () {
    return process.env.NODE_ENV || 'production';
  },
  /**
   * 获取当前的token
   */
  getToken: function () {
      return localStorage.token || '';
  }
};

export default utils;
