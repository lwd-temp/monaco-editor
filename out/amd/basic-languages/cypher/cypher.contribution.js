define(["require","exports","../_.contribution"],(function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),(0,n.registerLanguage)({id:"cypher",extensions:[".cypher",".cyp"],aliases:["Cypher","OpenCypher"],loader:function(){return AMD?new Promise((function(r,n){e(["vs/basic-languages/cypher/cypher"],r,n)})):new Promise((function(r,n){e(["./cypher"],r,n)}))}})}));