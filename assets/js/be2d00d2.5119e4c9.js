"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[579],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return C}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=g(n),C=r,m=d["".concat(s,".").concat(C)]||d[C]||A[C]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96434:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return p},default:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={sidebar_label:"3. Preparing your Assets"},s="Preparing your Assets",g={unversionedId:"candy-machine-v2/preparing-assets",id:"candy-machine-v2/preparing-assets",title:"Preparing your Assets",description:"The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your project's artwork and metadata.",source:"@site/docs/candy-machine-v2/03-preparing-assets.md",sourceDirName:"candy-machine-v2",slug:"/candy-machine-v2/preparing-assets",permalink:"/candy-machine-v2/preparing-assets",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v2/03-preparing-assets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"3. Preparing your Assets"},sidebar:"sidebar",previous:{title:"2. Configuration",permalink:"/candy-machine-v2/configuration"},next:{title:"4. Creating the Candy Machine",permalink:"/candy-machine-v2/creating-candy-machine"}},p=[{value:"Example NFT Collection",id:"example-nft-collection",children:[],level:2},{value:"Sample Items of the Collection",id:"sample-items-of-the-collection",children:[{value:"\u2022 Image: <code>0.png</code>",id:"-image-0png",children:[],level:4},{value:"\u2022 Metadata: <code>0.json</code>",id:"-metadata-0json",children:[],level:4},{value:"\u2022 Image: <code>9.png</code>",id:"-image-9png",children:[],level:4},{value:"\u2022 Metadata: <code>9.json</code>",id:"-metadata-9json",children:[],level:4}],level:2}],A={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preparing-your-assets"},"Preparing your Assets"),(0,i.kt)("p",null,"The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your project's artwork and metadata."),(0,i.kt)("p",null,"Your assets consist of a collection of images (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),") and metadata (",(0,i.kt)("inlineCode",{parentName:"p"},".json"),") files organized in a 1:1 mapping - i.e., each image has a corresponding metadata file."),(0,i.kt)("p",null,"There are a multitude of unique ways to generate images and metadata, and in most scenarios, you will automate this process. In this guide we will cover the creation of a simple collection to illustrate the metadata requirements and Candy Machine distribution. You should familiarize yourself with the ",(0,i.kt)("a",{parentName:"p",href:"/nft-standard"},"Metaplex Token Metadata Standard"),"."),(0,i.kt)("h2",{id:"example-nft-collection"},"Example NFT Collection"),(0,i.kt)("p",null,"A 10-item collection will have 20 files in total:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Images"),(0,i.kt)("th",{parentName:"tr",align:null},"Metadata"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"6.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"6.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9.json"))))),(0,i.kt)("p",null,"Each pair ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.json")," are combined to represent the first NFT in this example collection; ",(0,i.kt)("inlineCode",{parentName:"p"},"1.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.json")," describe the second NFT and so forth. Theses files are typically grouped into a single folder, usually named ",(0,i.kt)("inlineCode",{parentName:"p"},"assets"),", but that is not a hard requirement. Grouping them into a single folder simplifies next steps and is highly encouraged."),(0,i.kt)("p",null,"The content of the image files reflect the artwork you would like to display for each NFT and the content of the metadata files describe each of these pieces of artwork using the schema defined in the ",(0,i.kt)("a",{parentName:"p",href:"/nft-standard"},"Metaplex Token Metadata Standard"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The first item in your collection must have the index ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", the second ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and so forth. In a ",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," NFT drop, will start with the pair ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.json"),", and end with the pair ",(0,i.kt)("inlineCode",{parentName:"p"},"9999.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"9999.json"),". The numbering must also be consecutive - i.e., should not have gaps in the numbering.")),(0,i.kt)("h2",{id:"sample-items-of-the-collection"},"Sample Items of the Collection"),(0,i.kt)("p",null,"Below are two simple examples of items in this collection:"),(0,i.kt)("h4",{id:"-image-0png"},"\u2022 Image: ",(0,i.kt)("inlineCode",{parentName:"h4"},"0.png")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"0.png",src:n(18670).Z})),(0,i.kt)("h4",{id:"-metadata-0json"},"\u2022 Metadata: ",(0,i.kt)("inlineCode",{parentName:"h4"},"0.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Number #0001",\n    "symbol": "NB",\n    "description": "Collection of 10 numbers on the blockchain. This is the number 1/10.",\n    "seller_fee_basis_points": 500,\n    "image": "0.png",\n    "attributes": [\n        {"trait_type": "Layer-1", "value": "0"},\n        {"trait_type": "Layer-2", "value": "0"}, \n        {"trait_type": "Layer-3", "value": "0"},\n        {"trait_type": "Layer-4", "value": "1"}\n    ],\n    "properties": {\n        "creators": [{"address": "N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw", "share": 100}],\n        "files": [{"uri": "0.png", "type": "image/png"}]\n    },\n    "collection": {"name": "numbers", "family": "numbers"}\n}\n')),(0,i.kt)("h4",{id:"-image-9png"},"\u2022 Image: ",(0,i.kt)("inlineCode",{parentName:"h4"},"9.png")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"9.png",src:n(75196).Z})),(0,i.kt)("h4",{id:"-metadata-9json"},"\u2022 Metadata: ",(0,i.kt)("inlineCode",{parentName:"h4"},"9.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Number #0010",\n    "symbol": "NB",\n    "description": "Collection of 10 numbers on the blockchain. This is the number 10/10.",\n    "seller_fee_basis_points": 500,\n    "image": "9.png",\n    "attributes": [\n        {"trait_type": "Layer-1", "value": "0"},\n        {"trait_type": "Layer-2", "value": "0"}, \n        {"trait_type": "Layer-3", "value": "1"},\n        {"trait_type": "Layer-4", "value": "0"}\n    ],\n    "properties": {\n        "creators": [{"address": "N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw", "share": 100}],\n        "files": [{"uri": "9.png", "type": "image/png"}]\n    },\n    "collection": {"name": "numbers", "family": "numbers"}\n}\n')),(0,i.kt)("p",null,"Notice that the difference in the metadata between each image is on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"name"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Number #0001"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Number #0010"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"description"')," property: it shows ",(0,i.kt)("inlineCode",{parentName:"li"},'"number 1/10"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"number 10/10"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"image"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.png"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"9.png"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"properties.files.uri"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.png"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"9.png"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"attributes"')," property: the values for ",(0,i.kt)("inlineCode",{parentName:"li"},'"Layer-3"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Layer-4"')," trait-types are different, since they describe attributes of the images")),(0,i.kt)("p",null,"It is also important to make sure that you set royalties percentage awarded to creators (",(0,i.kt)("inlineCode",{parentName:"p"},'"seller_fee_basis_points"')," property) is set and each creators' wallet is listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"properties.creators"')," property."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can download the complete ",(0,i.kt)("a",{target:"_blank",href:n(90096).Z},"sample collection")," for testing and experimentation. Subsequent steps in this walkthrough will assume it's the collection in use."))))}d.isMDXComponent=!0},90096:function(e,t,n){t.Z=n.p+"assets/files/assets-934a7281da49092b2a477733d067d8a0.zip"},18670:function(e,t){t.Z="data:image/png;base64,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"},75196:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAABe2lDQ1BJQ0MgUHJvZmlsZQAAeJx1kd8rg1EYxz8bmpgoyi5cLI2rTTO1uFEmoZbWTBluttd+qP14e98tLbfKraLEjV8X/AXcKtdKESm5U66JG/R63k1tyZ7Tc57P+Z7zPJ3zHLBGMkpWb/RCNlfQwpMB53x0wWl7xo6Nblw4YoqujoVCQeraxx0WM954zFr1z/1rrcsJXQFLs/CoomoF4Snh4GpBNXlbuEtJx5aFT4XdmlxQ+NbU4xV+MTlV4S+TtUh4HKwdws5UDcdrWElrWWF5Oa5spqj83sd8iT2Rm5uV2Cveg06YSQI4mWaCcfwMMiKzHw8+BmRFnXxvOX+GvOQqMquU0FghRZoCblGLUj0hMSl6QkaGktn/v33Vk0O+SnV7AJqeDOOtD2xb8L1pGJ+HhvF9BA2PcJGr5ucPYPhd9M2q5tqH9nU4u6xq8R043wDHgxrTYmWpQdyaTMLrCbRFofMaWhYrPfvd5/geImvyVVewuwf9cr596QdWH2fetPe83QAABDJJREFUeJzt3LENAjEQAEFANPJk0AWNP10Q0go08BIOEGbRTPzIR7KyLvB+PS/PHUDAYfYAAKMEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCDjOHsAGHG9P4a+u11OzvjCGbO4YQEZggVkCBaQIVhAhqU7P2draTy6IB797TfO2DI6y6hZ/2MWNywgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CAjP16Xp6zh4B3/vkt9E8/8+JNd4AfIFhAhmABGYIFZFi6AxluWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGS89nzVvwoua2gAAAABJRU5ErkJggg=="}}]);