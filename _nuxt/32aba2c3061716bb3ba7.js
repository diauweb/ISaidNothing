(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(o,n,e){"use strict";e.r(n);const r={},t={};["㐀䴀一鼀ꄀꐀꔀꘀ𐘀𐜀𒀀𒌀𓀀𓐀𔐀𔘀𖠀𖨀𠀀𨘀","ᔀᘀ"].forEach((o,n)=>{const e=16-8*n;r[e]={};let c=0;o.match(/../gu).forEach(o=>{const[n,f]=[...o].map(o=>o.codePointAt(0));for(let o=n;o<f;o++){const n=String.fromCodePoint(o),f=16===e?c%256*256+(c>>8):c;r[e][f]=n,t[n]=[e,f],c++}})});var c={algo:{encode:function(text){return(o=>{const n=o.length;let e="",t=0,c=0;for(let i=0;i<n;i++){const n=o[i];for(let o=7;o>=0;o--){t=(t<<1)+(n>>o&1),c++,16===c&&(e+=r[c][t],t=0,c=0)}}if(0!==c){for(;!(c in r);)t=1+(t<<1),c++;e+=r[c][t]}return e})(new TextEncoder("utf-8").encode(text))},decode:function(text){return new TextDecoder("utf-8").decode((o=>{const n=o.length,e=new Uint8Array(Math.floor(16*n/8));let r=0,c=0,f=0,d=!1;for(const n of o){if(d)throw new Error("Secondary character found before end of input");if(!(n in t))throw new Error(`Unrecognised Base65536 character: ${n}`);const[o,l]=t[n];for(let n=o-1;n>=0;n--){c=(c<<1)+(l>>n&1),f++,8===f&&(e[r]=c,r++,c=0,f=0)}16!==o&&(d=!0)}if(c!==(1<<f)-1)throw new Error("Padding mismatch");return new Uint8Array(e.buffer,0,r)})(text))}}},f=e(19),component=Object(f.a)(c,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);