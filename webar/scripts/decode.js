var beautify = require('js-beautify').js_beautify;
fs = require('fs');
var vm = require('vm');

function replaceAll(source, s1, s2) {
    return source.replace(new RegExp(s1, "gm"), s2);
}

fs.readFile('bundle.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }

    var origin = beautify(data, { indent_size: 2 });
    fs.writeFileSync('bundle1.js', origin, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    var globalData = origin.substr(0, origin.indexOf("(function(a, d) {"));
    var functionData = origin.substr(origin.indexOf("(function(a, d) {"));
    vm.runInThisContext(globalData, {
        console: console,
    });
    var finalSource = "var _0xc466 = " + JSON.stringify(_0xc466/*, null, '\n'*/) + ";\n" + functionData;
    fs.writeFileSync('bundle2.js', beautify(finalSource, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    //console.log(_0xc466.length);


    fs.writeFileSync('step1.js', beautify("var _0xc466 = " + JSON.stringify(_0xc466, null, '\n') + ";\n", { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });




    var step2 = functionData.substr(0, functionData.indexOf("var _0x6c46") - 0);
    step2 = step2.replace("(", "module.exports = ");
    step2 = step2.replace("(_0xc466, 0x19b))", "");
    /*
    //代码美化进行死循环
    'removeCookie': function() {
        return 'dev';
    }
    */
    step2 = step2.replace("b['test'](a['removeCookie']['toString']())", "true");
    fs.writeFileSync('step2.js', beautify(step2, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    step2 = require('./step2');
    step2(_0xc466, 0x19b);


    var pos0 = functionData.indexOf("var _0x6c46 = function(b, f) {");
    var step3 = functionData.substr(pos0, functionData.indexOf("(function(c) {") - pos0);
    /*
    //代码美化进行死循环
    this['newState'] = function() {
          return 'newState';
    }
    */
    step3 = step3.replace("this['runState'](a['test'](this['newState']['toString']()) ? --this['states'][0x1] : --this['states'][0x0]);", "true;");
    step3 = step3.replace("var _0x6c46", "module.exports");
    fs.writeFileSync('step3.js', beautify(step3, { indent_size: 2 }), function (err) {
        if (err) throw err;
    });
    _0x6c46 = require('./step3');
    //console.log(_0x6c46('0x0', 'huqz'));


    functionData = functionData.substr(functionData.indexOf("(function(c) {"));
    /*fs.writeFileSync('step4.js', beautify(functionData, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });*/


    var patt1 = new RegExp("_0x6c46\\(\'.+?\'..\'.+?\'\\)", "g");
    var str = functionData;//"typeof exports === _0x24fc('0x0', '!$YZ') && "

    while (str.indexOf("_0x6c46") >= 0) {
        var result, a;
        do {
            result = patt1.exec(str);
            if (result != null) {
                //  console.log(JSON.stringify(result)+"\n");
                str = str.replace(result[0], "'" + eval(result[0]) + "'");
                if (result.index == 2) {
                    console.log(
                        "str"
                    );
                }
            }
        }
        while (result != null);
    }
    //!a['\x74\x65\x73\x74'](b['\x74\x6f\x53\x74\x72\x69\x6e\x67']())
    str = str.replace("!a['\\x74\\x65\\x73\\x74'](b['\\x74\\x6f\\x53\\x74\\x72\\x69\\x6e\\x67']())", "false")
    str = str.replace("a['\\x74\\x65\\x73\\x74'](c['\\x74\\x6f\\x53\\x74\\x72\\x69\\x6e\\x67']())", "true")

    
    fs.writeFile('final.js', beautify(str, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    console.log("山外有山");
});


fs.readFile('lib/spar.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }

    var origin = beautify(data, { indent_size: 2 });
    fs.writeFileSync('spar1.js', origin, function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    var globalData = origin.substr(0, origin.indexOf("(function(a, d) {"));
    var functionData = origin.substr(origin.indexOf("(function(a, d) {"));
    vm.runInThisContext(globalData, {
        console: console,
    });
    var finalSource = "var _0x4fc2 = " + JSON.stringify(_0x4fc2/*, null, '\n'*/) + ";\n" + functionData;
    fs.writeFileSync('spar2.js', beautify(finalSource, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });


    fs.writeFileSync('spar-step1.js', beautify("var _0x4fc2 = " + JSON.stringify(_0x4fc2, null, '\n') + ";\n", { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });




    var step2 = functionData.substr(0, functionData.indexOf("var _0x24fc") - 0);
    step2 = step2.replace("(", "module.exports = ");
    step2 = step2.replace("(_0x4fc2, 0xc2))", "");
    /*
    //代码美化进行死循环
    'removeCookie': function() {
        return 'dev';
    }
    */
    step2 = step2.replace("b['test'](a['removeCookie']['toString']())", "true");
    fs.writeFileSync('spar-step2.js', beautify(step2, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
    step2 = require('./spar-step2');
    step2(_0x4fc2, 0xc2);


    var pos0 = functionData.indexOf("var _0x24fc = function(b, f) {");
    var step3 = functionData.substr(pos0, functionData.indexOf("(function(d, a) {") - pos0);
    /*
    //代码美化进行死循环
    this['newState'] = function() {
          return 'newState';
    }
    */
    step3 = step3.replace("this['runState'](a['test'](this['newState']['toString']()) ? --this['states'][0x1] : --this['states'][0x0]);", "true;");
    step3 = step3.replace("var _0x24fc", "module.exports");
    fs.writeFileSync('spar-step3.js', beautify(step3, { indent_size: 2 }), function (err) {
        if (err) throw err;
    });
    _0x24fc = require('./spar-step3');
    //console.log(_0x24fc('0x0', '!$YZ'));


    functionData = functionData.substr(functionData.indexOf("(function(d, a) {"));
    fs.writeFileSync('spar-step4.js', beautify(functionData, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });


    var patt1 = new RegExp("_0x24fc\\(\'.+?\'..\'.+?\'\\)", "g");
    var str = functionData;//"typeof exports === _0x24fc('0x0', '!$YZ') && "

    while (str.indexOf("_0x24fc") >= 0) {
        var result, a;
        do {
            result = patt1.exec(str);
            if (result != null) {
                //  console.log(JSON.stringify(result)+"\n");
                var realCode = eval(result[0]);
                realCode = replaceAll(realCode,"\\r\\n","\\r\\n");
                realCode = replaceAll(realCode,"\\n","\\n");
                realCode = replaceAll(realCode,"'","\\'");
                if(realCode.indexOf("m=") >= 0) {
                    //console.log(eval(result[0]));
                }
                str = str.replace(result[0], "'" + realCode + "'");
                if (result.index == 2) {
                    console.log(
                        "str"
                    );
                }
            }
        }
        while (result != null);
    }

    str = str.replace("!a['\\x74\\x65\\x73\\x74'](b['\\x74\\x6f\\x53\\x74\\x72\\x69\\x6e\\x67']())", "false")
    str = str.replace("a['\\x74\\x65\\x73\\x74'](c['\\x74\\x6f\\x53\\x74\\x72\\x69\\x6e\\x67']())", "true")
    fs.writeFile('lib/final.js', beautify(str, { indent_size: 2 }), function (err) {
        if (err) throw err;
        //console.log('It\'s saved!');
    });

    console.log("山外有山--spar");
});