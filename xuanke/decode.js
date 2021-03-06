var beautify = require('js-beautify').js_beautify;
fs = require('fs');
var vm = require('vm');

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


fs.readFile('origin.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    //先执行让它自动解密
    data = data.replace("eval", "var origin=");
    vm.runInThisContext(data, {
        console: console,
    });
    fs.writeFile(tmpDir+'origin-beautify.js', beautify(origin, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    //开始提取_$_455d 并获取其中值
    var globalData = origin.substr(0, origin.indexOf("function FastClick"));
    var functionData = origin.substr(origin.indexOf("function FastClick"));
    vm.runInThisContext(globalData, {
        console: console,
    });
    var finalSource = "var _$_455d = " + JSON.stringify(_$_455d, null, '\n') + functionData;
    fs.writeFile(tmpDir+'beautify.js', beautify(finalSource, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    //开始替换代码文件
    for (var i = 0; i < _$_455d.length; i++) {
        var realData = _$_455d[i];//replaceAll(_$_455d[i],"\\\\","\\");
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
        if (_$_455d[i] == "" || contains(_$_455d[i], arr)) {} else {
            functionData = replaceAll(functionData, "\\[_\\$_455d\\[" + i + "\\]\\]", "." + realData);
        }
        functionData = replaceAll(functionData, "_\\$_455d\\[" + i + "\\]", '"' + replaceAll(realData, '"', '\\"') + '"');
    };
    //屏蔽host校验
    functionData = replaceAll(functionData, "d.test\\(h\\)", "!d.test(h)");
    functionData = replaceAll(functionData, "xuan", "dammy");
    functionData = replaceAll(functionData, "XK3D", "DM3D");
    fs.writeFile('assets/js/final.js', beautify(functionData, { indent_size: 2 }), function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });

    //手动去修改buildImageURL 适配自己的图片url
    //手动修改rotate 进行角度修改
    //手动修改n.adjustDeltaX(g.position[1], d)* -1 调整转动方向
});