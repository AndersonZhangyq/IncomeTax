"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[868],{6868:(e,o,l)=>{l.r(o),l.d(o,{default:()=>z});var a=l(9835);function n(e,o,l,n,t,i){const u=(0,a.up)("tax-calculator"),m=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(m,{class:"row items-center justify-evenly",style:{width:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1})}var t=l(6970);const i={class:"q-pa-md"},u={class:"row q-pt-sm q-col-gutter-sm"},m={class:"row q-pt-sm q-col-gutter-sm"},s={class:"row q-pt-sm q-col-gutter-sm"},d={class:"row q-pt-sm q-col-gutter-sm"},c={class:"row q-pt-sm q-col-gutter-sm"},r={class:"row q-pt-sm q-col-gutter-sm"},g={class:"row q-pt-sm q-col-gutter-sm"},b={class:"row q-pt-sm justify-center"},j={class:"col-2 text-center"},p={class:"col-2 text-center"},h={class:"row q-pt-sm justify-center"},f={class:"col-12 col-md-8"},V={class:"row q-pt-sm justify-center"},v=(0,a.Uk)("数据配置"),y={class:"row q-pt-sm justify-start q-col-gutter-sm"},M={class:"row q-pt-sm justify-start q-col-gutter-sm"},x={key:0,class:"row q-pt-sm justify-start q-col-gutter-sm"};function w(e,o,l,n,w,W){const q=(0,a.up)("q-input"),U=(0,a.up)("q-select"),B=(0,a.up)("q-btn"),P=(0,a.up)("q-toggle"),_=(0,a.up)("q-table"),k=(0,a.up)("q-tab"),I=(0,a.up)("q-tabs"),C=(0,a.up)("q-tab-panel"),T=(0,a.up)("q-tab-panels"),D=(0,a.up)("q-card"),Z=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",u,[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.income,"onUpdate:modelValue":o[0]||(o[0]=o=>e.form.income=o),modelModifiers:{number:!0},type:"number",label:"每月工资"},null,8,["modelValue"]),(0,a.Wm)(U,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.times,"onUpdate:modelValue":o[1]||(o[1]=o=>e.form.times=o),label:"缴纳期数",options:e.timesOptions},null,8,["modelValue","options"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.totalSalary,"onUpdate:modelValue":o[2]||(o[2]=o=>e.totalSalary=o),label:"累计工资",readonly:""},null,8,["modelValue"])]),(0,a._)("div",m,[(0,a.Wm)(U,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.shebaoMethod,"onUpdate:modelValue":[o[3]||(o[3]=o=>e.form.shebaoMethod=o),o[4]||(o[4]=o=>e.updateshebaoBase())],label:"社保缴纳方案",options:e.shebaoMethodOptions},null,8,["modelValue","options"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.shebaoBase,"onUpdate:modelValue":o[5]||(o[5]=o=>e.form.shebaoBase=o),label:"社保缴纳基数",type:"number",readonly:e.form.shebaoMethod.value!=e.CUSTOM},null,8,["modelValue","readonly"])]),(0,a._)("div",s,[(0,a.Wm)(U,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.gongjijinMethod,"onUpdate:modelValue":[o[6]||(o[6]=o=>e.form.gongjijinMethod=o),o[7]||(o[7]=o=>e.updategongjijinBase())],label:"公积金缴纳方案",options:e.gongjijinMethodOptions},null,8,["modelValue","options"]),(0,a.Wm)(U,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.gongjijinPercent,"onUpdate:modelValue":[o[8]||(o[8]=o=>e.form.gongjijinPercent=o),o[9]||(o[9]=o=>e.updategongjijinBase())],label:"公积金缴纳比例",options:e.gongjijinPercentOptions},null,8,["modelValue","options"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.gongjijinBase,"onUpdate:modelValue":o[10]||(o[10]=o=>e.form.gongjijinBase=o),label:"公积金缴纳基数",type:"number",readonly:e.form.gongjijinMethod.value!=e.CUSTOM},null,8,["modelValue","readonly"])]),(0,a._)("div",d,[(0,a.Wm)(U,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.buchonggongjijinMethod,"onUpdate:modelValue":[o[11]||(o[11]=o=>e.form.buchonggongjijinMethod=o),o[12]||(o[12]=o=>e.updatebuchonggongjijinBase())],label:"补充公积金缴纳方案",options:e.gongjijinMethodOptions},null,8,["modelValue","options"]),(0,a.Wm)(U,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.buchonggongjijinPercent,"onUpdate:modelValue":[o[13]||(o[13]=o=>e.form.buchonggongjijinPercent=o),o[14]||(o[14]=o=>e.updatebuchonggongjijinBase())],label:"补充公积金缴纳比例",options:e.buchonggongjijinPercentOptions},null,8,["modelValue","options"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.buchonggongjijinBase,"onUpdate:modelValue":o[15]||(o[15]=o=>e.form.buchonggongjijinBase=o),label:"补充公积金缴纳基数",type:"number",readonly:e.form.buchonggongjijinMethod.value!=e.CUSTOM},null,8,["modelValue","readonly"])]),(0,a._)("div",c,[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.jiangjinMonths,"onUpdate:modelValue":o[16]||(o[16]=o=>e.form.jiangjinMonths=o),modelModifiers:{number:!0},type:"number",label:"奖金月数"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.jiangjinBase,"onUpdate:modelValue":o[18]||(o[18]=o=>e.form.jiangjinBase=o),modelModifiers:{number:!0},type:"number",label:"奖金基数"},{append:(0,a.w5)((()=>[(0,a.Wm)(B,{flat:"",round:"",icon:"replay",onClick:o[17]||(o[17]=o=>e.form.jiangjinBase=e.form.income)})])),_:1},8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.totalBonus,"onUpdate:modelValue":o[19]||(o[19]=o=>e.totalBonus=o),label:"奖金总数",readonly:""},null,8,["modelValue"])]),(0,a._)("div",r,[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.hoursPerDay,"onUpdate:modelValue":o[20]||(o[20]=o=>e.form.hoursPerDay=o),modelModifiers:{number:!0},type:"number",label:"每天工作时长"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.daysPerWeek,"onUpdate:modelValue":o[21]||(o[21]=o=>e.form.daysPerWeek=o),modelModifiers:{number:!0},type:"number",label:"每周工作天数"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.hoursPerWeek,"onUpdate:modelValue":o[22]||(o[22]=o=>e.hoursPerWeek=o),label:"每周工作小时数",readonly:""},null,8,["modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.other,"onUpdate:modelValue":o[23]||(o[23]=o=>e.form.other=o),modelModifiers:{number:!0},type:"number",label:"其他收入"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.form.special,"onUpdate:modelValue":o[24]||(o[24]=o=>e.form.special=o),modelModifiers:{number:!0},type:"number",label:"每月专项扣除总和"},null,8,["modelValue"])]),(0,a._)("div",b,[(0,a._)("div",j,"税级 "+(0,t.zw)(e.taxInfo.level),1),(0,a._)("div",p," 税率 "+(0,t.zw)("-"==e.taxInfo.rate?e.taxInfo.rate:100*e.taxInfo.rate+"%"),1),(0,a.Wm)(P,{dense:"",label:"年终奖"+(e.isCalcuateCombined?"合并计税":"分别计税"),color:"blue",modelValue:e.isCalcuateCombined,"onUpdate:modelValue":o[25]||(o[25]=o=>e.isCalcuateCombined=o)},null,8,["label","modelValue"])]),(0,a._)("div",h,[(0,a._)("div",f,[(0,a.Wm)(_,{dense:"",columns:[{name:"name",label:"name",field:"name",align:"center",style:"width: 15em; padding: 8px 10px"},{name:"value",label:"value",field:"value",align:"center",format:(e,o)=>e.toFixed(2)}],rows:e.taxForTable,"row-key":"name","rows-per-page-options":[0],"hide-bottom":"","hide-header":""},null,8,["columns","rows"])])]),(0,a._)("div",V,[(0,a.Wm)(B,{color:"primary",onClick:o[26]||(o[26]=o=>e.info.configDialog=!0)},{default:(0,a.w5)((()=>[v])),_:1})]),(0,a.Wm)(Z,{modelValue:e.info.configDialog,"onUpdate:modelValue":o[35]||(o[35]=o=>e.info.configDialog=o)},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{style:{"min-width":"750px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{modelValue:e.info.tab,"onUpdate:modelValue":o[27]||(o[27]=o=>e.info.tab=o)},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{name:"config",label:"五险一金配置"}),(0,a.Wm)(k,{name:"tax",label:"税率表"})])),_:1},8,["modelValue"]),(0,a.Wm)(T,{modelValue:e.info.tab,"onUpdate:modelValue":o[34]||(o[34]=o=>e.info.tab=o)},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"config"},{default:(0,a.w5)((()=>[(0,a._)("div",y,[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.taxFree,"onUpdate:modelValue":o[28]||(o[28]=o=>e.info.taxFree=o),modelModifiers:{number:!0},type:"number",label:"个税免征额"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.shebao.up,"onUpdate:modelValue":o[29]||(o[29]=o=>e.info.shebao.up=o),modelModifiers:{number:!0},type:"number",label:"社保上限"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.shebao.bottom,"onUpdate:modelValue":o[30]||(o[30]=o=>e.info.shebao.bottom=o),modelModifiers:{number:!0},type:"number",label:"社保下限"},null,8,["modelValue"])]),(0,a._)("div",M,[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.shebao.percent.yanglao,"onUpdate:modelValue":o[31]||(o[31]=o=>e.info.shebao.percent.yanglao=o),modelModifiers:{number:!0},type:"number",label:"养老保险缴纳比例"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.shebao.percent.yiliao,"onUpdate:modelValue":o[32]||(o[32]=o=>e.info.shebao.percent.yiliao=o),modelModifiers:{number:!0},type:"number",label:"医疗保险缴纳比例"},null,8,["modelValue"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.shebao.percent.shiye,"onUpdate:modelValue":o[33]||(o[33]=o=>e.info.shebao.percent.shiye=o),modelModifiers:{number:!0},type:"number",label:"失业保险缴纳比例"},null,8,["modelValue"])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.info.gongjijin,((o,l)=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:"row q-pt-sm justify-start q-col-gutter-sm"},[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.gongjijin[l].up,"onUpdate:modelValue":o=>e.info.gongjijin[l].up=o,modelModifiers:{number:!0},type:"number",label:`公积金缴存${l}%上限`},null,8,["modelValue","onUpdate:modelValue","label"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.gongjijin[l].bottom,"onUpdate:modelValue":o=>e.info.gongjijin[l].bottom=o,modelModifiers:{number:!0},type:"number",label:`公积金缴存${l}%下限`},null,8,["modelValue","onUpdate:modelValue","label"])])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.info.buchonggongjijin,((o,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:o},[0!=l?((0,a.wg)(),(0,a.iD)("div",x,[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.buchonggongjijin[l].up,"onUpdate:modelValue":o=>e.info.buchonggongjijin[l].up=o,modelModifiers:{number:!0},type:"number",label:`补充公积金缴存${l}%上限`},null,8,["modelValue","onUpdate:modelValue","label"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.info.buchonggongjijin[l].bottom,"onUpdate:modelValue":o=>e.info.buchonggongjijin[l].bottom=o,modelModifiers:{number:!0},type:"number",label:`补充公积金缴存${l}%下限`},null,8,["modelValue","onUpdate:modelValue","label"])])):(0,a.kq)("",!0)],64)))),128))])),_:1}),(0,a.Wm)(C,{name:"tax"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.taxTable,((o,l)=>((0,a.wg)(),(0,a.iD)("div",{key:o[0],class:"row q-pt-sm justify-start q-col-gutter-sm"},[(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.taxTable[l][0],"onUpdate:modelValue":o=>e.taxTable[l][0]=o,modelModifiers:{number:!0},type:"number",label:`第${l+1}级税阶上限`},null,8,["modelValue","onUpdate:modelValue","label"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.taxTable[l][1],"onUpdate:modelValue":o=>e.taxTable[l][1]=o,modelModifiers:{number:!0},type:"number",label:`第${l+1}级税率`},null,8,["modelValue","onUpdate:modelValue","label"]),(0,a.Wm)(q,{class:"col-12 col-md-4",outlined:"",modelValue:e.taxTable[l][2],"onUpdate:modelValue":o=>e.taxTable[l][2]=o,modelModifiers:{number:!0},type:"number",label:`第${l+1}级税阶速算扣除数`},null,8,["modelValue","onUpdate:modelValue","label"])])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])}var W=l(499);const q=(0,a.aZ)({setup(){const e=(0,W.qj)({shebao:{bottom:7384,up:36921,percent:{yanglao:.08,yiliao:.02,shiye:.005}},gongjijin:{7:{up:2584,bottom:188},6:{up:2215,bottom:161},5:{up:1846,bottom:135}},buchonggongjijin:{5:{up:1846,bottom:135},4:{up:1477,bottom:108},3:{up:1108,bottom:81},2:{up:738,bottom:54},1:{up:369,bottom:27},0:{up:0,bottom:0}},configDialog:!1,taxFree:5e3,tab:"config"});let o;(function(e){e[e["Income"]=0]="Income",e[e["Lowest"]=1]="Lowest",e[e["Highest"]=2]="Highest",e[e["Custom"]=3]="Custom"})(o||(o={}));const l=(0,W.iH)(!0),n=(0,W.qj)([[36e3,.03,0],[144e3,.1,2520],[3e5,.2,16920],[42e4,.25,31920],[66e4,.3,52920],[96e4,.35,85920],[1e30,.45,181920]]),t=o.Custom,i=(0,a.Fl)((()=>j.income*j.times)),u=(0,a.Fl)((()=>j.jiangjinBase*j.jiangjinMonths)),m=(0,a.Fl)((()=>u.value+i.value)),s=[1,2,3,4,5,6,7,8,9,10,11,12],d=[{label:"按工资",value:o.Income},{label:"当地最低",value:o.Lowest},{label:"当地最高",value:o.Highest},{label:"自定义",value:o.Custom}],c=[{label:"按工资",value:o.Income},{label:"自定义",value:o.Custom}],r=[];for(const a in e.gongjijin)r.push({label:`${a}%`,value:a});const g=[];for(const a in e.buchonggongjijin)g.push({label:`${a}%`,value:a});const b=(0,W.qj)({level:"-",rate:"-"}),j=(0,W.qj)({income:0,times:12,shebaoMethod:(0,W.iH)(d[0]),shebaoBase:0,gongjijinMethod:(0,W.iH)(c[0]),gongjijinPercent:(0,W.iH)(r[2]),gongjijinBase:0,buchonggongjijinMethod:(0,W.iH)(c[0]),buchonggongjijinPercent:(0,W.iH)(g[0]),buchonggongjijinBase:0,jiangjinMonths:0,jiangjinBase:0,hoursPerDay:8,daysPerWeek:5,other:0,special:0}),p=(0,W.qj)({养老保险金:0,医疗保险金:0,失业保险金:0,基本住房公积金:0,补充住房公积金:0,年度个人所得税:0}),h=(0,W.qj)({养老保险金:0,医疗保险金:0,失业保险金:0,基本住房公积金:0,补充住房公积金:0,年度个人所得税:0});(0,a.YP)((()=>j.income),(e=>{j.shebaoMethod.value==o.Income&&(j.shebaoBase=e),j.gongjijinMethod.value==o.Income&&(j.gongjijinBase=e),j.buchonggongjijinMethod.value==o.Income&&(j.buchonggongjijinBase=e),j.jiangjinBase=e}));const f=()=>{switch(j.shebaoMethod.value){case o.Income:j.shebaoBase=j.income;break;case o.Lowest:j.shebaoBase=e.shebao.bottom;break;case o.Highest:j.shebaoBase=e.shebao.up;break}},V=()=>{switch(j.gongjijinMethod.value){case o.Income:j.gongjijinBase=j.income;break}},v=()=>{switch(j.buchonggongjijinMethod.value){case o.Income:j.buchonggongjijinBase=j.income;break}},y=e=>{let o={tax:-1,taxInfo_level:"/",taxInfo_rate:"/"};for(const[l,a]of n.entries()){let[n,t,i]=a;if(e<=n){o.tax=e*t-i,o.taxInfo_level=(l+1).toString(),o.taxInfo_rate=t.toString();break}}return o},M=()=>{const o=Math.max(Math.min(j.shebaoBase,e.shebao.up),e.shebao.bottom);let l=j.gongjijinBase*j.gongjijinPercent.value/100;const a=e.gongjijin[j.gongjijinPercent.value].up,n=e.gongjijin[j.gongjijinPercent.value].bottom;l=Math.max(Math.min(l,a),n);let t=j.buchonggongjijinBase*j.buchonggongjijinPercent.value/100;const u=e.buchonggongjijin[j.buchonggongjijinPercent.value].up,m=e.buchonggongjijin[j.buchonggongjijinPercent.value].bottom;t=Math.max(Math.min(t,u),m),p["养老保险金"]=o*e.shebao.percent.yanglao,p["医疗保险金"]=o*e.shebao.percent.yiliao,p["失业保险金"]=o*e.shebao.percent.shiye,p["基本住房公积金"]=l,p["补充住房公积金"]=t;const s=p["养老保险金"]+p["医疗保险金"]+p["失业保险金"]+p["基本住房公积金"]+p["补充住房公积金"]+e.taxFree+j.special,d=i.value-s*j.times+j.jiangjinBase*j.jiangjinMonths+1*j.other;if(d<=0)return p["年度个人所得税"]=0,b.level="-",void(b.rate="-");const c=y(d);p["年度个人所得税"]=c.tax,b.level=c.taxInfo_level,b.rate=c.taxInfo_rate},x=()=>{const o=Math.max(Math.min(j.shebaoBase,e.shebao.up),e.shebao.bottom);let l=j.gongjijinBase*j.gongjijinPercent.value/100;const a=e.gongjijin[j.gongjijinPercent.value].up,n=e.gongjijin[j.gongjijinPercent.value].bottom;l=Math.max(Math.min(l,a),n);let t=j.buchonggongjijinBase*j.buchonggongjijinPercent.value/100;const u=e.buchonggongjijin[j.buchonggongjijinPercent.value].up,m=e.buchonggongjijin[j.buchonggongjijinPercent.value].bottom;t=Math.max(Math.min(t,u),m),h["养老保险金"]=o*e.shebao.percent.yanglao,h["医疗保险金"]=o*e.shebao.percent.yiliao,h["失业保险金"]=o*e.shebao.percent.shiye,h["基本住房公积金"]=l,h["补充住房公积金"]=t;const s=h["养老保险金"]+h["医疗保险金"]+h["失业保险金"]+h["基本住房公积金"]+h["补充住房公积金"]+e.taxFree+j.special,d=i.value-s*j.times+1*j.other,c=j.jiangjinBase*j.jiangjinMonths;if(d<=0){const e=y(c);return h["年度个人所得税"]=e.tax,b.level="-",void(b.rate="-")}const r=y(d);h["年度个人所得税"]=r.tax+y(c).tax,b.level=r.taxInfo_level,b.rate=r.taxInfo_rate},w=(0,a.Fl)((()=>{let e,o;l.value?(M(),e=p):(x(),e=h);const a=(e["养老保险金"]+e["医疗保险金"]+e["失业保险金"]+e["基本住房公积金"]+e["补充住房公积金"])*j.times,n=[],t=m.value+1*j.other;for(o in n.push({name:"税前年收入",value:t}),n.push({name:"税后年收入",value:t-e["年度个人所得税"]-a}),n.push({name:"年度公积金总额（个人+公司）",value:24*(e["基本住房公积金"]+e["补充住房公积金"])}),n.push({name:"税后月收入",value:(t-e["年度个人所得税"]-a)/12}),n.push({name:"税后时薪",value:(t-e["年度个人所得税"]-a)/12/q.value/4}),e)n.push({name:("年度个人所得税"!=o?"每月":"")+o,value:e[o]});return n})),q=(0,a.Fl)((()=>j.hoursPerDay*j.daysPerWeek));return{CUSTOM:t,info:e,form:j,taxTable:n,totalSalary:i,totalBonus:u,totalIncome:m,timesOptions:s,taxForTable:w,hoursPerWeek:q,taxCombined:p,taxSeperated:h,taxInfo:b,shebaoMethodOptions:d,gongjijinMethodOptions:c,gongjijinPercentOptions:r,buchonggongjijinPercentOptions:g,isCalcuateCombined:l,updateshebaoBase:f,updategongjijinBase:V,updatebuchonggongjijinBase:v,calculateCombined:M,calculateSeperated:x,calculateTax:y}}});var U=l(1639),B=l(6611),P=l(1594),_=l(9379),k=l(3175),I=l(5235),C=l(7743),T=l(4458),D=l(7817),Z=l(900),O=l(9800),H=l(4106),F=l(9984),Q=l.n(F);const S=(0,U.Z)(q,[["render",w]]),$=S;Q()(q,"components",{QInput:B.Z,QSelect:P.Z,QBtn:_.Z,QToggle:k.Z,QTable:I.Z,QDialog:C.Z,QCard:T.Z,QTabs:D.Z,QTab:Z.Z,QTabPanels:O.Z,QTabPanel:H.Z});const Y=(0,a.aZ)({name:"PageIndex",components:{TaxCalculator:$},setup(){return{}}});var L=l(9885);const K=(0,U.Z)(Y,[["render",n]]),z=K;Q()(Y,"components",{QPage:L.Z})}}]);