


var file = "115\\acf9fc3c-bfd2-4856-990f-5ad18c48fcda.4dage";
//var file = 'cp\\scene.mview';
var file = '..\\modeledit\\modelDictionary\\f2908690-002e-4d14-920b-db5cdcc8bf42\\M075700210101011800G_L.marmost';

var path = require("path");
fs = require('fs');

fs.readFile(file, function (err, data) {
    var dir = path.dirname(file) + "\\extract\\";
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir,0777);
    }
    if (err) {
        throw err;
    }
    var archive = new Archive(data);

    /**
     * 场景
     */
    var scene = archive.extract("scene.json");
    var c = JSON.parse((new ByteStream(scene.data)).asString());
    var sceneData = JSON.stringify(c, null, '  ');
    fs.writeFileSync(dir + 'scene.json', sceneData, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    c.sky.backgroundColor = objToArray(c.sky.backgroundColor);
    c.sky.diffuseCoefficients = objToArray(c.sky.diffuseCoefficients);



    /**
     * 缩略图
     */
    fs.writeFileSync(dir + 'thumbnail.jpg', archive.extract("thumbnail.jpg").data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    /**
     * 天空
     */
    var skyData = archive.extract("sky.dat");
    if (skyData != null) {
        fs.writeFileSync(dir + 'sky.dat', skyData.data, function (err) {
            if (err) throw err;
            //console.log('It\'s saved!');
        });
    } else {
        fs.writeFileSync(dir + 'sky.png', archive.extract("sky.png").data, function (err) {
            if (err) throw err;
            //console.log('It\'s saved!');
        });
    }

    /**
     * 模型
     */
    if (c.meshes) {
        for (e = 0; e < c.meshes.length; ++e) {
            d = c.meshes[e];

            fs.writeFileSync(dir + d.file, archive.extract(d.file).data, function (err) {
                if (err) throw err;
                //console.log('It\'s saved!');
            });

        }
    };


    /**
     * 材质
     */
    for (var d in c.materials) {
        var e = c.materials[d];
        //albedo
        fs.writeFileSync(dir + e.albedoTex, archive.extract(e.albedoTex).data, function (err) {
            // if (err) throw err;
        });
        if (archive.get(e.alphaTex) != null) {
            fs.writeFileSync(dir + e.alphaTex, archive.extract(e.alphaTex).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }


        //reflectivity
        fs.writeFileSync(dir + e.reflectivityTex, archive.extract(e.reflectivityTex).data, function (err) {
            // if (err) throw err;
        });
        if (archive.get(e.glossTex) != null) {
            fs.writeFileSync(dir + e.glossTex, archive.extract(e.glossTex).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }

        //normal
        if (archive.get(e.normalTex) != null) {
            fs.writeFileSync(dir + e.normalTex, archive.extract(e.normalTex).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }

        //extras
        if (archive.get(e.extrasTex) != null) {
            fs.writeFileSync(dir + e.extrasTex, archive.extract(e.extrasTex).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }
        if (archive.get(e.extrasTexA) != null) {
            fs.writeFileSync(dir + e.extrasTexA, archive.extract(e.extrasTexA).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }


        //extrasAO
        if (archive.get(e.extrasAOTex) != null) {
            fs.writeFileSync(dir + e.extrasAOTex, archive.extract(e.extrasAOTex).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }
        if (archive.get(e.extrasAOTexA) != null) {
            fs.writeFileSync(dir + e.extrasAOTexA, archive.extract(e.extrasAOTexA).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }

        //extrasSkin
        if (archive.get(e.extrasSkinTex) != null) {
            fs.writeFileSync(dir + e.extrasSkinTex, archive.extract(e.extrasSkinTex).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }
        if (archive.get(e.extrasSkinTexA) != null) {
            fs.writeFileSync(dir + e.extrasSkinTexA, archive.extract(e.extrasSkinTexA).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }

        //extrasEmi
        if (archive.get(e.extrasEmiTex) != null) {
            fs.writeFileSync(dir + e.extrasEmiTex, archive.extract(e.extrasEmiTex).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }
        if (archive.get(e.extrasEmiTexA) != null) {
            fs.writeFileSync(dir + e.extrasEmiTexA, archive.extract(e.extrasEmiTexA).data, function (err) {
                //if (err) throw err;
                //console.log('It\'s saved!');
            });
        }


    };

});

/**
 * 
 * 把marmoset压缩格式重新解压
 * 
 * 
 * 
 */

function Archive(a) {
    this.files = [];
    for (a = new ByteStream(a); !a.empty();) {
        var b = {};
        b.name = a.readCString();
        b.type = a.readCString();
        var c = a.readUint32(),
            d = a.readUint32(),
            e = a.readUint32();
        b.data = a.readBytes(d);
        if (!(b.data.length < d)) {
            if (c & 1 && (b.data = this.decompress(b.data, e), null === b.data)) {
                continue
            };
            this.files[b.name] = b
        }
    }
}
Archive.prototype.get = function (a) {
    return this.files[a]
};
Archive.prototype.extract = function (a) {
    var b = this.files[a];
    delete this.files[a];
    return b
};
Archive.prototype.checkSignature = function (a) {
    if (!a) {
        return !1
    };
    var b = this.get(a.name + ".sig");
    if (!b) {
        return !1
    };
    b = JSON.parse(String.fromCharCode.apply(null, b.data));
    if (!b) {
        return !1
    };
    for (var c = 5381, d = 0; d < a.data.length; ++d) {
        c = 33 * c + a.data[d] & 4294967295
    };
    a = new BigInt;
    a.setBytes([0, 233, 33, 170, 116, 86, 29, 195, 228, 46, 189, 3, 185, 31, 245, 19, 159, 105, 73, 190, 158, 80, 175, 38, 210, 116, 221, 229, 171, 134, 104, 144, 140, 5, 99, 255, 208, 78, 248, 215, 172, 44, 79, 83, 5, 244, 152, 19, 92, 137, 112, 10, 101, 142, 209, 100, 244, 92, 190, 125, 28, 0, 185, 54, 143, 247, 49, 37, 15, 254, 142, 180, 185, 232, 50, 219, 11, 186, 106, 116, 78, 212, 10, 105, 53, 26, 14, 181, 80, 47, 87, 213, 182, 19, 126, 151, 86, 109, 182, 224, 37, 135, 80, 59, 22, 93, 125, 68, 214, 106, 209, 152, 235, 157, 249, 245, 48, 76, 203, 0, 0, 95, 200, 246, 243, 229, 85, 79, 169], !0);
    d = new BigInt;
    d.setBytes(b[0]);
    return d.powmod(65537, a).toInt32() != c ? !1 : !0
};
Archive.prototype.decompress = function (a, b) {
    var c = new Uint8Array(b),
        d = 0,
        e = new Uint32Array(4096),
        f = new Uint32Array(4096),
        g = 256,
        h = a.length,
        k = 0,
        l = 1,
        m = 0,
        n = 1;
    c[d++] = a[0];
    for (var r = 1; ; r++) {
        n = r + (r >> 1);
        if (n + 1 >= h) {
            break
        };
        var m = a[n + 1],
            n = a[n],
            p = r & 1 ? m << 4 | n >> 4 : (m & 15) << 8 | n;
        if (p < g) {
            if (256 > p) {
                m = d, n = 1, c[d++] = p
            } else {
                for (var m = d, n = f[p], p = e[p], q = p + n; p < q;) {
                    c[d++] = c[p++]
                }
            }
        } else {
            if (p == g) {
                m = d;
                n = l + 1;
                p = k;
                for (q = k + l; p < q;) {
                    c[d++] = c[p++]
                };
                c[d++] = c[k]
            } else {
                break
            }
        };
        e[g] = k;
        f[g++] = l + 1;
        k = m;
        l = n;
        g = 4096 <= g ? 256 : g
    };
    return d == b ? c : null
};

function ByteStream(a) {
    this.bytes = new Uint8Array(a)
}
ByteStream.prototype.empty = function () {
    return 0 >= this.bytes.length
};
ByteStream.prototype.readCString = function () {
    for (var a = this.bytes, b = a.length, c = 0; c < b; ++c) {
        if (0 == a[c]) {
            return a = String.fromCharCode.apply(null, this.bytes.subarray(0, c)), this.bytes = this.bytes.subarray(c + 1), a
        }
    };
    return null
};
ByteStream.prototype.asString = function () {
    for (var a = "", b = 0; b < this.bytes.length; ++b) {
        a += String.fromCharCode(this.bytes[b])
    };
    return a
};
ByteStream.prototype.readBytes = function (a) {
    var b = this.bytes.subarray(0, a);
    this.bytes = this.bytes.subarray(a);
    return b
};
ByteStream.prototype.readUint32 = function () {
    var a = this.bytes,
        b = a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24;
    this.bytes = a.subarray(4);
    return b
};

function objToArray(o) {
    if (!(o instanceof Array)) {
        var a = [];
        for (var i in o) {
            a.push(o[i])
        };
        return a
    } else {
        return o
    }
}


