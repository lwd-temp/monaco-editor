"use strict";var fs=require("fs"),path=require("path"),keywords=getMySQLKeywords();function getMySQLKeywords(){for(var r=[],e=0,t=fs.readFileSync(path.join(__dirname,"keywords.mysql.txt")).toString().split(/\r\n|\r|\n/);e<t.length;e++){var s=t[e];s=(s=s.replace(/;.*$/,"")).trim(),/ \(R\)$/.test(s)&&(s=s.replace(/ \(R\)$/,""),r.push(s))}return r}keywords.sort(),console.log("'".concat(keywords.join("',\n'"),"'"));