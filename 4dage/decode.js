var beautify = require('js-beautify').js_beautify;
fs = require('fs');
var vm = require('vm');
var toSource = require('tosource');

function replaceAll(source, s1, s2) {
    return source.replace(new RegExp(s1, "gm"), s2);
}

function contains(source, arr) {
    for (const iterator of arr) {
        if (source.indexOf(iterator) >= 0)
            return true;
    }
    return false;
}

var tmpDir = "jstemp\\";
if (!fs.existsSync(tmpDir)){
    fs.mkdirSync(tmpDir,0777);
}

fs.readFile('模型展示\\marmoset.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'marmoset-beautify.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
});


fs.readFile('模型展示\\4dage-show.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage-show-beautify.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });


    data = data.replace("(function() {", "");
    data = data.replace("})()", "");
    data = data.replace("LYX();", "");



    fs.writeFileSync(tmpDir+'4dage-show-step1.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });


    //先执行让它自动解密
    //data = data.replace("eval", "var origin=");
    vm.runInThisContext(data, {
        console: console,
    });
    fs.writeFileSync(tmpDir+'4dage-show-step2.js', LYX, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    data = "(" + toSource(LYX) + ")()";

    // data = data.replace("function anonymous(", "");
    // data = data.replace("/*``*/", "");
    // data = data.replace(") {", "");


    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage-show-step3.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    data = toSource(LYX);
    functionData = data;
    data = data.replace("function anonymous(", "");
    data = data.replace("/*``*/", "");
    data = data.replace(") {", "");
    data = data.replace("(_0x181F6)(Fdage)\n}", "");

    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage-show-step4.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });


    vm.runInThisContext(data, {
        console: console,
    });

    //console.log(_0x181B9);
    //开始替换代码文件
    for (var i = 0; i < _0x181B9.length; i++) {
        var realData = _0x181B9[i];//replaceAll(_$_455d[i],"\\\\","\\");
        realData = replaceAll(realData, "\\\\\\\\", "\\\\\\\\");
        realData = replaceAll(realData, "\\\\w", "\\\\w");
        realData = replaceAll(realData, "\\\\d", "\\\\d");
        realData = replaceAll(realData, "\\r\\n", "\\\\r\\\\n");

        var arr = ["wheel",
            "jquery",
            ",",
            ":",
            ".",
            "*",
            " ",
            "-",
            "#",
            ">",
            "<",
            "&",];
        if (_0x181B9[i] == "" || contains(_0x181B9[i], arr)) { } else {_0x181B9[0]
            functionData = replaceAll(functionData, "\\[\\_0x181B9\\[" + i + "\\]\\]", "." + realData);
        }
        functionData = replaceAll(functionData, "\\_0x181B9\\[" + i + "\\]", '"' + replaceAll(realData, '"', '\\"') + '"');
    };
    data = beautify(functionData, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage-show-step5.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    return;
});


fs.readFile('模型展示\\4dage-showmodel.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage-showmodel-beautify.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    data = data.replace("(function() {", "");
    data = data.replace("})()", "");

    fs.writeFileSync(tmpDir+'4dage-showmodel-step1.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    //先执行让它自动解密
    //data = data.replace("eval", "var origin=");
    vm.runInThisContext(data, {
        console: console,
    });
    fs.writeFileSync(tmpDir+'4dage-showmodel-step2.js', fkl, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    data = "var dom, webview, Clamp, codeToCh, fdage;(" + toSource(fkl) + ")()";

    // data = data.replace("function anonymous(", "");
    // data = data.replace("/*``*/", "");
    // data = data.replace(") {", "");


    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage-showmodel-step3.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    return;
});



fs.readFile('场馆漫游\\main2018.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'main2018-beautify.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    data = data.replace("var e; + function() {", "");
    data = data.replace("return 3018\n}()", "");
    data = data.replace("onj(1924);", "");
    

    fs.writeFileSync(tmpDir+'main2018-step1.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    
    //先执行让它自动解密
    //data = data.replace("eval", "var origin=");
    vm.runInThisContext(data, {
        console: console,
    });
    fs.writeFileSync(tmpDir+'main2018-step2.js', onj, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    
    data = "var dom, webview, Clamp, codeToCh, fdage;(" + toSource(onj) + ")()";

    // data = data.replace("function anonymous(", "");
    // data = data.replace("/*``*/", "");
    // data = data.replace(") {", "");


    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'main2018-step3.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    return;
});

fs.readFile('场馆漫游\\myshow.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'myshow-beautify.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    data = data.replace("var e; + function() {", "");
    data = data.replace("return 3018\n}()", "");
    data = data.replace("onj(1924);", "");
    

    fs.writeFileSync(tmpDir+'myshow-step1.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    return;

    
    //先执行让它自动解密
    //data = data.replace("eval", "var origin=");
    vm.runInThisContext(data, {
        console: console,
    });
    fs.writeFileSync(tmpDir+'main2018-step2.js', fkl, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    
    data = "var dom, webview, Clamp, codeToCh, fdage;(" + toSource(fkl) + ")()";

    // data = data.replace("function anonymous(", "");
    // data = data.replace("/*``*/", "");
    // data = data.replace(") {", "");


    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'main2018-step3.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    return;
});



fs.readFile('模型编辑\\EditGUI.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'EditGUI-beautify.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    

    data = data.replace("var GUI; + function() {", "");
    data = data.replace("return 4376\n}()", "");
    data = data.replace("GPg(7356);", "");
    

    fs.writeFileSync(tmpDir+'EditGUI-step1.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    
    
    //先执行让它自动解密
    //data = data.replace("eval", "var origin=");
    vm.runInThisContext(data, {
        console: console,
    });
    fs.writeFileSync(tmpDir+'EditGUI-step2.js', GPg, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    
    data = "(" + toSource(GPg) + ")()";

    // data = data.replace("function anonymous(", "");
    // data = data.replace("/*``*/", "");
    // data = data.replace(") {", "");


    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'EditGUI-step3.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    data = replaceAll(data, "fdage", "jmyd");
    fs.writeFileSync("modeledit\\js\\"+'EditGUI_final.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    return;
});



fs.readFile('模型编辑\\4dage_edit.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage_edit-beautify.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    

  

    fs.writeFileSync(tmpDir+'4dage_edit-step1.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
     data = data.replace("+ function() {", "");
    data = data.replace("return 5036\n}()", "");
    data = data.replace("BBv(5406);", "");

    
    //先执行让它自动解密
    //data = data.replace("eval", "var origin=");
    vm.runInThisContext(data, {
        console: console,
    });
    fs.writeFileSync(tmpDir+'4dage_edit-step2.js', BBv, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    
    data = "(" + toSource(BBv) + ")()";

    
    // data = data.replace("function anonymous(", "");
    // data = data.replace("/*``*/", "");
    // data = data.replace(") {", "");


    data = beautify(data, { indent_size: 2 });
    fs.writeFileSync(tmpDir+'4dage_edit-step3.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    vm.runInThisContext(data, {
        console: console,
    });
    var globals = "dom, clamp, byteToFloat, getSnapRect, Archive, BigInt, "+
    "Bounds, ByteStream, prepareEmbedParams, embed, fetchThumbnail, fdage, Framebuffer, "+
    "FullScreen, Input, TranslateCon, preTransform, getScaleMatrix, Cone, LightTargetCon, Sphere, "+
    "GuideLine, lightSi, Lights, Material, Matrix, drawplane, Sprite, turn3dTo2d, Rect, SnapshotLine, "+
    "Line, Mesh, MeshRenderable, Network, PostRender, Scene, Shader, ShaderCache, ShadowCollector, Sky, "+
    "Sky2, Texture, TextureCache, UI, Vect, View, Previewer, WebViewer, ArchiveSky, ShaderTable";
    globals = globals.split(", ");


    
    
 
     
    globals.forEach(element => {
        if(global[element].name == undefined) {
            //console.log(global[element]);
        } else {
            //console.log(global[element].name);
            var name = global[element].name;
            name = replaceAll(name, "\\_\\$", "\\_\\$");
            data = replaceAll(data, "function "+name, element+" = function");
            data = replaceAll(data, element+" = "+name+";", "");
            data = replaceAll(data, name, element);

            

        }
        var keys = Object.keys(global[element]);
        keys.map(function(key){
            if(typeof global[element][key] == "function") {
               // global[element][key]
                
                var name = global[element][key].name;
                if(name.indexOf("_$") == 0) {
                    //console.log(name + " == " + element+".prototype."+key);
                    name = replaceAll(name, "\\_\\$", "\\_\\$");
                    data = replaceAll(data, "function "+name, element+"."+key+" = function");
                    data = replaceAll(data, key+": "+name+",", "");
                    data = replaceAll(data, key+": "+name+"", "");
                    data = replaceAll(data, element+"."+key+" = "+name+";", "");

                }
            }
        });
 
        if(global[element].hasOwnProperty("prototype")){
            keys = Object.getOwnPropertyNames(global[element].prototype);
            keys.map(function(key){
                if(typeof global[element]["prototype"][key] == "function") {
                   // global[element][key]
                    
                    var name = global[element]["prototype"][key].name;
                    if(name.indexOf("_$") == 0) {
                        //console.log(name + " == " + element+".prototype."+key);
                        name = replaceAll(name, "\\_\\$", "\\_\\$");
                        data = replaceAll(data, "function "+name, element+".prototype."+key+" = function");
                        data = replaceAll(data, element+".prototype."+key+" = "+name+";", "");
                        data = replaceAll(data, element+".prototype\\[\""+key+"\"\\]"+" = "+name+";", "");
                    }
                }
            })
        }
       
        
    });

    data = replaceAll(data, "\\n", "");
    data = beautify(data, { indent_size: 2 });

    fs.writeFileSync(tmpDir+'4dage_edit-step4.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    //补丁
    data = replaceAll(data, "fdage.WebViewer = function", "fdage.WebViewer = WebViewer = function");
    data = replaceAll(data, "dom = {};", "");
    data = replaceAll(data, "fdage = {};", "");
    data = replaceAll(data, "FullScreen = {};", "");
    data = replaceAll(data, "Network = {};;;", "");
    data = replaceAll(data, "Vect = {\\n    type: Float32Array,\\n  };", "");
    data = replaceAll(data, "Matrix = {\\n    type: Float32Array,\\n  };;;", "");

    data = "var "+globals+";\n"+"dom = {};\nfdage = {};\nFullScreen = {};\nNetwork = {};\nVect = {\n    type: Float32Array,\n  };\nMatrix = {\n    type: Float32Array,\n  };\n"+data;


    
    data = replaceAll(data, "fdage", "jmyd");
    fs.writeFileSync("modeledit\\js\\"+'model_edit_final.js', data, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    
    return;
});