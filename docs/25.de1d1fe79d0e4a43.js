"use strict";(self.webpackChunkpines_angular=self.webpackChunkpines_angular||[]).push([[25],{1025:(Q,T,C)=>{C.r(T),C.d(T,{RegisterModule:()=>Y});var N=C(6895),R=C(6773),n=C(8256);function H(a,d,e,t,s,r,l){try{var f=a[r](l),i=f.value}catch(h){return void e(h)}f.done?d(i):Promise.resolve(i).then(t,s)}var $=C(433);const A=new n.OlP("ngx-mask config"),O=new n.OlP("new ngx-mask config"),D=new n.OlP("initial ngx-mask config"),B={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new n.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},G=["Hh:m0:s0","Hh:m0","m0:s0"],U=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let F=(()=>{class a{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,s,r,l)=>{let f=[],i="";if(Array.isArray(r)){const p=new RegExp(r.map(u=>"[\\^$.|?*+()".indexOf(u)>=0?`\\${u}`:u).join("|"));f=t.split(p),i=t.match(p)?.[0]??""}else f=t.split(r),i=r;const h=f.length>1?`${i}${f[1]}`:"";let c=f[0];const g=this.separatorLimit.replace(/\s/g,"");g&&+g&&(c="-"===c[0]?`-${c.slice(1,c.length).slice(0,g.length)}`:c.slice(0,g.length));const k=/(\d+)(\d{3})/;for(;s&&k.test(c);)c=c.replace(k,"$1"+s+"$2");return void 0===l?c+h:0===l?c:c+h.substr(0,l+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const s=t.split(".");return s.length>1?Number(s[s.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let s=this.suffix?.length-1;s>=0;s--){const r=this.suffix.substr(s,this.suffix?.length);if(t.includes(r)&&(s-1<0||!t.includes(this.suffix.substr(s-1,this.suffix?.length))))return t.replace(r,"")}return t},this.checkInputPrecision=(t,s,r)=>{if(s<1/0){if(Array.isArray(r)){const i=r.find(h=>h!==this.thousandSeparator);r=i||r[0]}const l=new RegExp(this._charToRegExpExpression(r)+`\\d{${s}}.*$`),f=t.match(l);f&&f[0].length-1>s&&(t=t.substring(0,t.length-(f[0].length-1-s))),0===s&&this._compareOrIncludes(t[t.length-1],r,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,r]=t;return this.customPattern=r,this.applyMask(e,s)}applyMask(e,t,s=0,r=!1,l=!1,f=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,h="",c=!1,g=!1,k=1,p=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const u=e.toString().split("");if("IP"===t){const m=e.split(".");this.ipError=this._validIP(m),t="099.099.099.099"}const S=[];for(let m=0;m<e.length;m++)e[m]?.match("\\d")&&S.push(e[m]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==S.length&&14!==S.length,t=S.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const m=this.getPrecision(t);e=this.checkInputPrecision(e,m,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),h=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!l?e.slice(1,e.length):e,l&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const m=this._charToRegExpExpression(this.thousandSeparator);let o='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(m,"");if(Array.isArray(this.decimalMarker))for(const M of this.decimalMarker)o=o.replace(this._charToRegExpExpression(M),"");else o=o.replace(this._charToRegExpExpression(this.decimalMarker),"");const _=new RegExp("["+o+"]");(e.match(_)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const E=this.getPrecision(t),I=(e=this.checkInputPrecision(e,E,this.decimalMarker)).replace(new RegExp(m,"g"),"");h=this._formatWithSeparators(I,this.thousandSeparator,this.decimalMarker,E);const P=h.indexOf(",")-e.indexOf(","),v=h.length-e.length;if(v>0&&","!==h[s]){g=!0;let M=0;do{this._shift.add(s+M),M++}while(M<v)}else 0!==P&&s>0&&!(h.indexOf(",")>=s&&s>3)||!(h.indexOf(".")>=s&&s>3)&&v<=0?(this._shift.clear(),g=!0,k=v,this._shift.add(s+=v)):this._shift.clear()}else for(let m=0,o=u[0];m<u.length&&i!==t.length;m++,o=u[m])if(this._checkSymbolMask(o,t[i])&&"?"===t[i+1])h+=o,i+=2;else if("*"===t[i+1]&&c&&this._checkSymbolMask(o,t[i+2]))h+=o,i+=3,c=!1;else if(this._checkSymbolMask(o,t[i])&&"*"===t[i+1])h+=o,c=!0;else if("?"===t[i+1]&&this._checkSymbolMask(o,t[i+2]))h+=o,i+=3;else if(this._checkSymbolMask(o,t[i])){if("H"===t[i]&&Number(o)>2){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(h+="0");continue}if("h"===t[i]&&"2"===h&&Number(o)>3){i+=1,m--;continue}if("m"===t[i]&&Number(o)>5){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(h+="0");continue}if("s"===t[i]&&Number(o)>5){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(h+="0");continue}const _=31;if("d"===t[i]&&(Number(o)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>_||"/"===e[i+1])){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(h+="0");continue}if("M"===t[i]){const I=0===i&&(Number(o)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),P=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),v=Number(e.slice(i-3,i-1))<=_&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),M=Number(e.slice(i-3,i-1))>_&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,X=Number(e.slice(i-3,i-1))<=_&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(o)>1&&this.leadZeroDateTime||I||P||v||M||X){i+=1,this._shiftStep(t,i,u.length),m--,this.leadZeroDateTime&&(h+="0");continue}}h+=o,i++}else" "===o&&" "===t[i]?(h+=o,i++):-1!==this.maskSpecialCharacters.indexOf(t[i])?(h+=t[i],i++,this._shiftStep(t,i,u.length),m--):this.maskSpecialCharacters.indexOf(o)>-1&&this.maskAvailablePatterns[t[i]]&&this.maskAvailablePatterns[t[i]]?.optional?(!!u[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(h+=u[i]),i++,m--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(o)===this.maskExpression[i+2]&&c||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(o)===this.maskExpression[i+2]&&c?(i+=3,h+=o):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(o)<0&&o!==this.placeHolderCharacter&&(p=!0);h.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(h+=t[t.length-1]);let y=s+1;for(;this._shift.has(y);)k++,y++;let x=r&&!t.startsWith("separator")?i:this._shift.has(s)?k:0;p&&x--,f(x,g),k<0&&this._shift.clear();let w=!1;l&&(w=u.every(m=>this.maskSpecialCharacters.includes(m)));let b=`${this.prefix}${w?"":h}${this.suffix}`;return 0===h.length&&(b=`${this.prefix}${h}`),b}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,s)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===s&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,s){const r=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(r+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(r=>r!==s).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,s)=>e.length!==s+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return a.\u0275fac=function(e){return new(e||a)(n.LFG(A))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac}),a})(),Z=(()=>{class a extends F{constructor(e,t,s,r){super(t),this.document=e,this._config=t,this._elementRef=s,this._renderer=r,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=l=>{}}applyMask(e,t,s=0,r=!1,l=!1,f=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]:"";let h="";if(void 0!==this.hiddenInput&&!this.writingValue){let p=this.actualValue.split("");""!==e&&p.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>p.length?p.splice(this.selStart,0,i):e.length<p.length&&(p.length-e.length==1?p.splice(this.selStart-1,1):p.splice(this.selStart,this.selEnd-this.selStart))):p=[],this.showMaskTyped&&(e=this.removeMask(e)),h=this.actualValue.length&&p.length<=e.length?this.shiftTypedSymbols(p.join("")):e}h=Boolean(h)&&h.length?h:e;const c=super.applyMask(h,t,s,r,l,f);if(this.actualValue=this.getActualValue(c),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(p=>!this._compareOrIncludes(p,this.decimalMarker,this.thousandSeparator))),this.formControlResult(c),!this.showMaskTyped)return this.hiddenInput&&c&&c.length?this.hideInput(c,this.maskExpression):c;const g=c.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const p=this._numberSkipedSymbols(c);return c+k.slice(g+p)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?c+k:c+k.slice(g)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),r=0;for(;null!=s;)r+=1,s=t.exec(e);return r}applyValueChanges(e,t,s,r=(()=>{})){const l=this._elementRef.nativeElement;l.value=this.applyMask(l.value,this.maskExpression,e,t,s,r),l!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((s,r)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[r]]&&this.maskAvailablePatterns[t[r]]?.symbol?this.maskAvailablePatterns[t[r]]?.symbol:s).join("")}getActualValue(e){const t=e.split("").filter((s,r)=>this._checkSymbolMask(s,this.maskExpression[r])||this.maskSpecialCharacters.includes(this.maskExpression[r])&&s===this.maskExpression[r]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((r,l)=>{if(this.maskSpecialCharacters.includes(e[l+1])&&e[l+1]!==this.maskExpression[l+1])return t=r,e[l+1];if(t.length){const f=t;return t="",f}return r})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(s=>this._findSpecialChar(s)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++)e[s]?.match("\\d")&&t.push(e[s]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const r=[];for(let l=0;l<e.length;l++)e[l]?.match("\\d")&&r.push(e[l]);return r.length<=3?t.slice(r.length,t.length):r.length>3&&r.length<=6?t.slice(r.length+1,t.length):r.length>6&&r.length<=9?t.slice(r.length+2,t.length):r.length>9&&r.length<11?t.slice(r.length+3,t.length):11===r.length?"":12===r.length?s.slice(17===e.length?16:15,s.length):r.length>12&&r.length<=14?s.slice(r.length+4,s.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression);let s=this._retrieveSeparatorValue(e);return"."!==this.decimalMarker&&!Array.isArray(this.decimalMarker)&&(s=s.replace(this.decimalMarker,".")),this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return a.\u0275fac=function(e){return new(e||a)(n.LFG(N.K0),n.LFG(A),n.LFG(n.SBq),n.LFG(n.Qsj))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac}),a})(),W=(()=>{class a{constructor(e,t,s){this.document=e,this._maskService=t,this._config=s,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new n.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=r=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:r,prefix:l,suffix:f,thousandSeparator:i,decimalMarker:h,dropSpecialCharacters:c,hiddenInput:g,showMaskTyped:k,placeHolderCharacter:p,shownMaskExpression:u,showTemplate:S,clearIfNotMatch:y,validation:x,separatorLimit:w,allowNegativeNumbers:b,leadZeroDateTime:m,triggerOnMaskChange:o}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((_,E)=>_.length-E.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.maskSpecialCharacters=s.currentValue||[]}r&&r.currentValue&&(this._maskService.maskAvailablePatterns=r.currentValue),l&&(this._maskService.prefix=l.currentValue),f&&(this._maskService.suffix=f.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),h&&(this._maskService.decimalMarker=h.currentValue),c&&(this._maskService.dropSpecialCharacters=c.currentValue),g&&(this._maskService.hiddenInput=g.currentValue),k&&(this._maskService.showMaskTyped=k.currentValue),p&&(this._maskService.placeHolderCharacter=p.currentValue),u&&(this._maskService.shownMaskExpression=u.currentValue),S&&(this._maskService.showTemplate=S.currentValue),y&&(this._maskService.clearIfNotMatch=y.currentValue),x&&(this._maskService.validation=x.currentValue),w&&(this._maskService.separatorLimit=w.currentValue),b&&(this._maskService.allowNegativeNumbers=b.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(_=>"-"!==_))),m&&(this._maskService.leadZeroDateTime=m.currentValue),o&&(this._maskService.triggerOnMaskChange=o.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||U.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(G.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[s].optional&&(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(l=>l===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let r=0,l=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,h)=>{this._justPasted=!1,r=i,l=h}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let f=this._position?this._inputValue.length+s+r:s+("Backspace"!==this._code||l?r:0);f>this._getActualInputLength()&&(f=this._getActualInputLength()),f<0&&(f=0),t.setSelectionRange(f,f),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const l=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==l&&(t.value=l),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const s=t.selectionStart;8===e.keyCode&&!t.readOnly&&0===s&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return function j(a){return function(){var d=this,e=arguments;return new Promise(function(t,s){var r=a.apply(d,e);function l(i){H(r,t,s,l,f,"next",i)}function f(i){H(r,t,s,l,f,"throw",i)}l(void 0)})}}(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,r)=>{if(this._start="{"===s?r:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=r;const l=Number(e.slice(this._start+1,this._end));return t+new Array(l+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(s=>":"!==s).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(N.K0),n.Y36(Z),n.Y36(A))},a.\u0275dir=n.lG2({type:a,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&n.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(r){return t.onModelChange(r)})("input",function(r){return t.onInput(r)})("blur",function(){return t.onBlur()})("click",function(r){return t.onClick(r)})("keydown",function(r){return t.onKeyDown(r)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[n._Bn([{provide:$.JU,useExisting:(0,n.Gpc)(()=>a),multi:!0},{provide:$.Cf,useExisting:(0,n.Gpc)(()=>a),multi:!0},Z]),n.TTD]}),a})();function z(a,d){return d instanceof Function?{...a,...d()}:{...a,...d}}let J=(()=>{class a{static forRoot(e){return{ngModule:a,providers:[{provide:O,useValue:e},{provide:D,useValue:B},{provide:A,useFactory:z,deps:[D,O]},F]}}static forChild(){return{ngModule:a}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({}),a})();const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};L.KeyboardEvent||(L.KeyboardEvent=function(a,d){});const K=[{path:"",component:(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-register"]],decls:21,vars:0,consts:[[1,"container"],[1,"card","mt-3"],["action","",1,"card-body"],[1,"form-group"],["for","email"],["name","email","type","text","placeholder","example@22.com",1,"form-control"],["for","telephone"],["name","telephone","type","text","placeholder","(99) 9 9999-9999","mask","(00) 0 0000-0000",1,"form-control"],["for","username"],["name","username","type","text","placeholder","example22",1,"form-control"],["name","username","type","password","placeholder","********",1,"form-control"],[1,"btn","btn-primary","mt-2"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"label",4),n._uU(5,"E-mail"),n.qZA(),n._UZ(6,"input",5),n.qZA(),n.TgZ(7,"div",3)(8,"label",6),n._uU(9,"Telephone"),n.qZA(),n._UZ(10,"input",7),n.qZA(),n.TgZ(11,"div",3)(12,"label",8),n._uU(13,"User"),n.qZA(),n._UZ(14,"input",9),n.qZA(),n.TgZ(15,"div")(16,"label",8),n._uU(17,"Password"),n.qZA(),n._UZ(18,"input",10),n.qZA(),n.TgZ(19,"button",11),n._uU(20,"Register"),n.qZA()()()())},dependencies:[W]}),a})()}];let q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[R.Bz.forChild(K),R.Bz]}),a})(),Y=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[N.ez,q,J.forRoot()]}),a})()}}]);