(function(c) {
  var d = function() {
    var a = !![];
    return function(d, b) {
      var c = a ? function() {
        if (b) {
          var a = b['apply'](d, arguments);
          b = null;
          return a;
        }
      } : function() {};
      a = ![];
      return c;
    };
  }();
  var b = {};

  function a(f) {
    var g = d(this, function() {
      var b = function() {
          return '\x64\x65\x76';
        },
        c = function() {
          return '\x77\x69\x6e\x64\x6f\x77';
        };
      var d = function() {
        var a = new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');
        return false;
      };
      var e = function() {
        var a = new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');
        return true;
      };
      var a = function(a) {
        var b = ~-0x1 >> 0x1 + 0xff % 0x0;
        if (a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69' === b)) {
          f(a);
        }
      };
      var f = function(b) {
        var c = ~-0x4 >> 0x1 + 0xff % 0x0;
        if (b['\x69\x6e\x64\x65\x78\x4f\x66']((!![] + '')[0x3]) !== c) {
          a(b);
        }
      };
      if (!d()) {
        if (!e()) {
          a('\x69\x6e\x64\u0435\x78\x4f\x66');
        } else {
          a('\x69\x6e\x64\x65\x78\x4f\x66');
        }
      } else {
        a('\x69\x6e\x64\u0435\x78\x4f\x66');
      }
    });
    g();
    if (b[f]) {
      return b[f]['exports'];
    }
    var e = b[f] = {
      'i': f,
      'l': ![],
      'exports': {}
    };
    c[f]['call'](e['exports'], e, e['exports'], a);
    e['l'] = !![];
    return e['exports'];
  }
  a['m'] = c;
  a['c'] = b;
  a['d'] = function(b, c, d) {
    if (!a['o'](b, c)) {
      Object['defineProperty'](b, c, {
        'configurable': ![],
        'enumerable': !![],
        'get': d
      });
    }
  };
  a['n'] = function(b) {
    var c = b && b['__esModule'] ? function a() {
      return b['default'];
    } : function a() {
      return b;
    };
    a['d'](c, 'a', c);
    return c;
  };
  a['o'] = function(a, b) {
    return Object['prototype']['hasOwnProperty']['call'](a, b);
  };
  a['p'] = '';
  return a(a['s'] = 0x0);
}([function(z, r, f) {
  'use strict';
  Object['defineProperty'](r, '__esModule', {
    'value': !![]
  });
  var g = f(0x1);
  var h = f['n'](g);
  var c = ![],
    s = ![],
    t = 0.2;
  var A, k = 0x0,
    l = 0x0,
    m = 0x0;
  var n = 0x0,
    j = 0x0,
    p = 0x0;
  var q = {};
  var a = 0x0,
    b = 0x0,
    d = 0x0;
  document['addEventListener']('DOMContentLoaded', function() {
    if (!SPAR['checkBrowser']()) {
      var y = confirm('检测到不支持的浏览器，可能无法正常运行，是否继续？');
      if (!y) return;
    }
    document['ontouchmove'] = function(a) {
      return a['preventDefault']();
    };
    var k = [];
    var f;
    var t = false;
    var I = 0x3;
    var A, K, J, n, H = [];
    var q = 0x0;
    var G = 0x3c;
    var F = new THREE[('Projector')]();
    a = x();
    console['log']('paramers=' + (a == 0x0 ? '直接体验' : '扫描体验'));
    var s = document['getElementById']('result');
    var z = document['getElementById']('target');
    var m = document['getElementById']('container');
    var E = document['createElement']('video');
    var D = document['createElement']('image');
    document['getElementById']('play')['style']['display'] = 'block';
    document['getElementById']('loadtext')['style']['display'] = 'block';
    var u = document['getElementById']('play');
    var B = document['getElementById']('loadtext');
    var l = document['getElementById']('start');
    console['log']('container' + m['clientWidth'] + ',' + m['clientHeight'] + ',' + window['innerHeight'] + ',' + window['innerWidth']);
    var r = 0x140;
    var p = 0xf0;
    if (SPAR['browser']['ios']) {
      r = 0x280;
      p = 0x1e0;
    }
    var j = window['innerWidth'];
    var g = window['innerHeight'];
    console['log']('VideoDevice ' + j + ',' + g);
    var e = new SPAR['VideoDevice']({
      'width': j,
      'height': g
    });
    v();
    var C = {
      'audio': ![],
      'video': {
        'width': r,
        'height': p,
        'facingMode': c ? {
          'exact': 'environment'
        } : 'enviroment'
      }
    };
    /*e['setVideoSource'](new SPAR[('CameraVideoSource')](C))['then'](function() {
      console['log']('video size' + e['videoWidth'] + '--' + e['videoHeight']);
      console['log']('video element size' + e['width'] + '--' + e['height']);
      var a = e['videoWidth'] / e['videoHeight'];
      if (e['width'] < e['height']) {
        e['width'] = e['height'] * a;
      } else {
        e['height'] = e['width'] / a;
      }
      u['style']['display'] = 'none';
      B['style']['display'] = 'none';
      l['style']['display'] = 'block';
    })['catch'](function(a) {
      u['innerHTML'] = '载入失败';
      console['log'](' error', a);
      alert(a['name'] + ' : ' + a['message'] + '__载入失败');
    });*/
    var a = 0;//e['videoWidth'] / e['videoHeight'];
      if (e['width'] < e['height']) {
        e['width'] = e['height'] * a;
      } else {
        e['height'] = e['width'] / a;
      }
      u['style']['display'] = 'none';
      B['style']['display'] = 'none';
      l['style']['display'] = 'block';

    var frames = [];
    var isLoaded = false;
    l['onclick'] = function() {
      var fbxObject;
      l['style']['display'] = 'none';
      e['play']()['then'](function() {
        var clock = new THREE.Clock();
        if (a != 0x0) {
          o();
        }
        var render = new SPAR.THREERenderer(e);
        m['appendChild'](render.domElement);
        var C = (j - e['width']) / 0x2;
        var x = (g - e['height']) / 0x2;
        console['log']('offset=' + C + ',' + x);

        render.domElement.style.marginLeft = C;
        render.domElement.style.marginTop = x;

        var scene = render.scene;
        var camera = render._camera;
        var F = 0x0;
        camera.position.set(0x0, 0x0, 100);
        camera.lookAt({
          'x': 0x0,
          'y': 0x0,
          'z': 0x0
        });
        var r = 0x0;
        A = new THREE.DeviceOrientationControls(camera);
        if (window.DeviceOrientationEvent) {
          window.addEventListener('deviceorientation', function(a) {
            r = a['alpha'];
            A['update']();
          }, ![]);
        } else {
          console['log']('您的浏览器不支持DeviceOrientation');
        }
        var overTime = 0;
        var u = 5000;
        var animateOver = false;
        //此处有卡顿  fbx文件本身问题
        render.start(function() {
          if (a != 0x0 && b != 0x0) {
            d += 0x2;
            if (d > b) {
              $('#showimg02')[0].style.height = b + 'px';
              d = 0x0;
            } else {
              $('#showimg02')[0].style.height = d + 'px';
            }
          }
          if (isLoaded) {
            for (var i = 0; i < frames.length; i++) {//只有一个
              frames[i].update(clock.getDelta());
            }return;

            if (!animateOver) {
              var e = new THREE.Vector3();
              e.copy(new THREE.Vector3(0x0, 0x0, -0x1)).applyQuaternion(camera.quaternion);
              e.add(e.multiplyScalar(200));
              var i = camera.position.x;
              var j = camera.position.y;
              var l = camera.position.z;
              var m = e;
              var n = new THREE.Vector3(fbxObject.position.x, fbxObject.position.y, fbxObject.position.z);
              var o = n.sub(new THREE.Vector3(i, j, l));
              /*
              * 向量的夹角公式就一个啊
              * cosθ=向量a.向量b/|向量a|×|向量b| (注意是点乘)
              * 你说的可能是坐标形式吧,
              * 设向量a=(x1,y1),向量b=(x2,y2)
              * 则 cosθ=向量a.向量b/|向量a|×|向量b| =(x1x2+y1y2)/[√(x1²+y1²)*√(x2²+y2²)]
              */
              var p = m.angleTo(o) * 180 / Math.PI;
              setTimeout(function() {
                $('#next').onclick = function() {
                  window.location.href = '/webar/share.php';
                };
                $('#next')[0].style.display = 'block';
                $('#loading')[0].style.display = 'none';
              }, 10000);
              if (p < 20) {
                animateOver = true;
                $('#loading').innerHTML = '';
                overTime = Date.parse(new Date());
              }
            } else if (u > 0) {
              var q = Date.parse(new Date()) - overTime;
              if (q > u) {
                $('#next').onclick = function() {
                  window.location.href = '/webar/share.php';
                };
                $('#next')[0].style.display = 'block';
                u = -1;
              }
            }
          }
        });
        function LoadFbx() {
          var fbxloader = new THREE.FBXLoader();
          fbxloader.load('./trex_v3.fbx', function(fbx) {
            var loader = new THREE.TextureLoader();
            var d = loader.load('./ashe_base_2011_tx_cm.jpg', function(texture) {
              if (fbx.animations != undefined && fbx.animations.length > 0) {
                fbx.mixer = new THREE.AnimationMixer(fbx);
                frames.push(fbx.mixer);
                /*
                Returns an AnimationAction for the passed clip, optionally using a root object different from the mixer's default root. The first parameter can be either an AnimationClip object or the name of an AnimationClip.

                If an action fitting these parameters doesn't yet exist, it will be created by this method.

                Note: Calling this method several times with the same parameters returns always the same clip instance.
                */
                var animationAction = fbx.mixer.clipAction(fbx.animations[0]);

             //  animationAction.setLoop(THREE.LoopRepeat);
              //  animationAction.clampWhenFinished = true;



                animationAction.play();
                console.log('动画' + fbx.animations.length + ',' + fbx.animations[0].tracks.length + '帧');
              }
              fbx.traverse(function(mesh) {
                if (mesh instanceof THREE['Mesh']) {
                  mesh.material.transparent = true;
                  mesh.material.opacity = 1;
                  console.log('Find Mesh' + mesh);
                }
              });
              scene.add(fbx);
              fbxObject = fbx;
              fbx.scale.set(0.009, 0.009, 0.009);
              isLoaded = true;
              var b = new THREE.Vector3();
              var h = camera.quaternion;
              b.copy(new THREE.Vector3(0, 0, -1)).applyQuaternion(h);
              b.add(b.multiplyScalar(6));
              fbx.rotation.set(0, 0, 0);
              fbx.position.set(0, 0, 0);
              var j = camera.position.x;
              var o = camera.position.y;
              var m = camera.position.z;
              scene.position.set(b.x + j, b.y + o, b.z + m);
              var d = new THREE.Vector3();
              d.copy(camera.position);
              d.setX(10 * Math.sin(r * Math.PI / 180));
              d.setZ(10 * Math.cos(r * Math.PI / 180));
              ///normalize方法将返回向量的长度为1（只读）. 
    /// 复习一下初中的几何吧,三角恒等式,给你准备好了 :) ,见维基百科: 
    /// http://zh.wikipedia.org/wiki/%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0#.E4.B8.89.E8.A7.92.E6.81.92.E7.AD.89.E5.BC.8F 
              var q = d.sub(fbx.position).normalize();
              var g = scaleVector(fbx, q, 60);
              var pointLighte = new THREE.PointLight(0xffffff, 2);
              pointLighte.name = 'pointlight_01';
              scene.add(pointLighte);
              pointLighte.position.set(g.x, g.y, g.z);
              var orbitControls = new THREE.OrbitControls(fbx, document.querySelector('#container'));
              orbitControls.target = scaleVector(fbx, new THREE.Vector3(0x0, 0x0, 1), 0.1);
              orbitControls.rotateSpeed = 0.6;

              var size = 100;  
              var divisions = 100;  
                
              var gridHelper = new THREE.GridHelper( size, divisions );  
              scene.add( gridHelper );  

              const axesHelper = new THREE.AxesHelper( size );
              scene.add( axesHelper );  

            });
          }, function(a) {
            if (a.lengthComputable) {
              var b = a.loaded / a.total * 0x64;
              document.getElementById('loading').innerHTML = '加载中...' + Math.round(b, 2) + '%';
              if (Math.round(b, 0x2) >= 0x63) {
                document.getElementById('loading').innerHTML = '惊喜就在眼前啦~';
                w();
              }
            }
          }, function(a) {
            console.log(a);
          });
        };
        if (a == 0x0) {
          LoadFbx();
        } else {
          var v = new SPAR[('Recognizer')](e);
          v['start'](h['a'], function(a, b) {
            if (a) {
              s['innerHTML'] = a['message'];
              q = 0x0;
            } else {
              q = 0x1;
              s['innerHTML'] = '匹配成功';
              document['getElementById']('showimg01')['style']['display'] = 'none';
              document['getElementById']('showimg02')['style']['display'] = 'none';
              v['stop']();
              LoadFbx();
            }
          });
        }
        z['style']['display'] = 'none';
      })['catch'](function(a) {
        console['log']('catch error', a);
      });
    };
  }, ![]);
  var u = !![];

  function v() {
    var b = navigator['userAgent'];
    console['log']('device=' + b);
    var d = new MobileDetect(b);
    var a = d['os']();
    var e = '';
    if (a == 'IOS') {
      c = ![];
    } else if (a == 'AndroidOS') {
      c = !![];
    } else {
      c = ![];
    }
    console['log']('os=' + a);
    if (navigator['getUserMedia']) {
      console['log'](' Support');
    } else {
      alert('Not support in this browser');
      location['href'] = '/webar/index.html';
    }
  }

  function y(a, c, d) {
    var b = new THREE[('Matrix4')]();
    b['makeRotationAxis'](c['normalize'](), d);
    b['multiply'](a['matrix']);
    a['matrix'] = b;
    a['rotation']['setFromRotationMatrix'](a['matrix']);
  }

  function x() {
    var a = window['location']['href'];
    var c = a['length'];
    var d = a['indexOf']('?');
    var e = a['substr'](d, c);
    var b = e['split']('=');
    if (b['length'] == 0x2) {
      return b[0x1];
    } else {
      return 0x0;
    }
  }

  function scaleVector(fbx, f, scale) {
    var a = new THREE.Vector3();
    //这里实际上调用的是vector.applyQuaternion()方法,将四元数变换应用到三维向量vector.  
    a.copy(f.applyQuaternion(fbx.quaternion));
     ///multiplyScalar方法用来将四元数的(x,y,z,w)坐标值直接与参数s相乘.并返回新的坐标值的四元数. 
    /// NOTE:这里与multiply()方法不同的是,这里传递的参数scalar是一个标量,而multiply()方法的参数v是一个四元数. 
    a.add(a.multiplyScalar(scale));
    var c = fbx.position.x;
    var d = fbx.position.y;
    var e = fbx.position.z;
    a.x = a.x + c;
    a.y = a.y + d;
    a.z = a.z + e;
    return a;
  }

  function o() {
    if (window['innerHeight'] > window['innerWidth']) {
      var c = window['innerWidth'];
      c = c * 0.9;
      var d = document['getElementById']('showimg01');
      d['style']['width'] = c + 'px';
      d['style']['height'] = c + 'px';
      d['style']['left'] = (window['innerWidth'] - c) / 0x2 + 'px';
      d['style']['top'] = (window['innerHeight'] - c) / 0x2 + 'px';
      var e = document['getElementById']('showimg02');
      e['style']['width'] = c + 'px';
      e['style']['height'] = c + 'px';
      e['style']['left'] = (window['innerWidth'] - c) / 0x2 + 'px';
      e['style']['top'] = (window['innerHeight'] - c) / 0x2 + 'px';
      b = c;
    } else {
      var a = window['innerHeight'];
      a = a * 0.9;
      alert(window['innerHeight'] + ',' + a);
      var f = document['getElementById']('showimg01');
      f['style']['width'] = a + 'px';
      f['style']['height'] = a + 'px';
      f['style']['top'] = (window['innerHeight'] - a) / 0x2 + 'px';
      f['style']['left'] = (window['innerWidth'] - a) / 0x2 + 'px';
      var g = document['getElementById']('showimg02');
      g['style']['width'] = a + 'px';
      g['style']['height'] = a + 'px';
      g['style']['top'] = (window['innerHeight'] - a) / 0x2 + 'px';
      g['style']['left'] = (window['innerWidth'] - a) / 0x2 + 'px';
      b = a;
    }
    document['getElementById']('showimg01')['style']['display'] = 'block';
    document['getElementById']('showimg02')['style']['display'] = 'block';
    document['getElementById']('loading')['innerHTML'] = '请将身份证背面放在框里开始扫描';
    document['getElementById']('loading')['style']['color'] = '#ffffff';
  }
  var e = ![];

  function w() {
    var a = document['getElementById']('bgm');
    //a['play']();
    document['addEventListener']('WeixinJSBridgeReady', function() {
      a['play']();
    }, ![]);
    window['addEventListener']('touchstart', function() {
      if (!e) {
        a['play']();
        e = !![];
      }
    }, ![]);
  }
}, function(a, b) {
  a['exports'] = {
    'host': 'https://webar.easyar.cn',
    'appKey': '3a43a9daa618e74c630bc040f20d61e0',
    'appSecret': 'tqi5Oq8MNFp3wkkd4DlPXfAs7cXvD3al0E6AVlXhymR3pSs8fB6bhVGIFUb5VOefOhlD9rnohcGwxPQ89EQnUUv7JprI2UTl9xLqVprGmrjMVyoIJRYAVbD2wPHvbSk2'
  };
}]));