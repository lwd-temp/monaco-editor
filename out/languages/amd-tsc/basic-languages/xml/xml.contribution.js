define(["require","exports","../_.contribution"],(function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),(0,i.registerLanguage)({id:"xml",extensions:[".xml",".xsd",".dtd",".ascx",".csproj",".config",".props",".targets",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xslt",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:function(){return AMD?new Promise((function(s,i){e(["vs/basic-languages/xml/xml"],s,i)})):new Promise((function(s,i){e(["./xml"],s,i)}))}})}));