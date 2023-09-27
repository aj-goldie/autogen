"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8957:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Getting Started",s={unversionedId:"Getting-Started",id:"Getting-Started",isDocsHomePage:!1,title:"Getting Started",description:"AutoGen is a framework that enables development of LLM applications using multiple agents that can converse with each other to solve task. AutoGen agents are customizable, conversable, and seamlessly allow human participation. They can operate in various modes that employ combinations of LLMs, human inputs, and tools.",source:"@site/docs/Getting-Started.md",sourceDirName:".",slug:"/Getting-Started",permalink:"/autogen/docs/Getting-Started",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Getting-Started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/autogen/docs/Installation"}},l=[{value:"Main Features",id:"main-features",children:[],level:3},{value:"Quickstart",id:"quickstart",children:[{value:"Multi-Agent Conversation Framework",id:"multi-agent-conversation-framework",children:[],level:4},{value:"Enhanced LLM Inferences",id:"enhanced-llm-inferences",children:[],level:4}],level:3},{value:"Where to Go Next?",id:"where-to-go-next",children:[],level:3}],c={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"AutoGen is a framework that enables development of LLM applications using multiple agents that can converse with each other to solve task. AutoGen agents are customizable, conversable, and seamlessly allow human participation. They can operate in various modes that employ combinations of LLMs, human inputs, and tools."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AutoGen Overview",src:n(5653).Z})),(0,r.kt)("h3",{id:"main-features"},"Main Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AutoGen enables building next-gen LLM applications based on ",(0,r.kt)("strong",{parentName:"li"},"multi-agent conversations")," with minimal effort. It simplifies the orchestration, automation and optimization of a complex LLM workflow. It maximizes the performance of LLM models and overcome their weaknesses."),(0,r.kt)("li",{parentName:"ul"},"It supports ",(0,r.kt)("strong",{parentName:"li"},"diverse conversation patterns")," for complex workflows. With customizable and conversable agents, developers can use AutoGen to build a wide range of conversation patterns concerning conversation autonomy,\nthe number of agents, and agent conversation topology."),(0,r.kt)("li",{parentName:"ul"},"It provides a collection of working systems with different complexities. These systems span a ",(0,r.kt)("strong",{parentName:"li"},"wide range of applications")," from various domains and complexities. They demonstrate how AutoGen can easily support different conversation patterns."),(0,r.kt)("li",{parentName:"ul"},"AutoGen provides a drop-in replacement of ",(0,r.kt)("inlineCode",{parentName:"li"},"openai.Completion")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"openai.ChatCompletion")," as an ",(0,r.kt)("strong",{parentName:"li"},"enhanced inference API"),". It allows easy performance tuning, utilities like API unification & caching, and advanced usage patterns, such as error handling, multi-config inference, context programming etc.")),(0,r.kt)("p",null,"AutoGen is powered by collaborative ",(0,r.kt)("a",{parentName:"p",href:"/docs/Research"},"research studies")," from Microsoft, Penn State University, and University of Washington."),(0,r.kt)("h3",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"Install from pip: ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install pyautogen"),". Find more options in ",(0,r.kt)("a",{parentName:"p",href:"/docs/Installation"},"Installation"),"."),(0,r.kt)("h4",{id:"multi-agent-conversation-framework"},"Multi-Agent Conversation Framework"),(0,r.kt)("p",null,"Autogen enables the next-gen LLM applications with a generic multi-agent conversation framework. It offers customizable and conversable agents which integrate LLMs, tools and human.\nBy automating chat among multiple capable agents, one can easily make them collectively perform tasks autonomously or with human feedback, including tasks that require using tools via code. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from autogen import AssistantAgent, UserProxyAgent\nassistant = AssistantAgent("assistant")\nuser_proxy = UserProxyAgent("user_proxy")\nuser_proxy.initiate_chat(assistant, message="Plot a chart of META and TESLA stock price change YTD.")\n# This initiates an automated chat between the two agents to solve the task\n')),(0,r.kt)("p",null,"The figure below shows an example conversation flow with AutoGen.\n",(0,r.kt)("img",{alt:"Agent Chat Example",src:n(248).Z})),(0,r.kt)("h4",{id:"enhanced-llm-inferences"},"Enhanced LLM Inferences"),(0,r.kt)("p",null,"Autogen also helps maximize the utility out of the expensive LLMs such as ChatGPT and GPT-4. It offers a drop-in replacement of ",(0,r.kt)("inlineCode",{parentName:"p"},"openai.Completion")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"openai.ChatCompletion")," with powerful functionalites like tuning, caching, error handling, templating. For example, you can optimize generations by LLM with your own tuning data, success metrics and budgets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# perform tuning\nconfig, analysis = autogen.Completion.tune(\n    data=tune_data,\n    metric="success",\n    mode="max",\n    eval_func=eval_func,\n    inference_budget=0.05,\n    optimization_budget=3,\n    num_samples=-1,\n)\n# perform inference for a test instance\nresponse = autogen.Completion.create(context=test_instance, **config)\n')),(0,r.kt)("h3",{id:"where-to-go-next"},"Where to Go Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand the use cases for ",(0,r.kt)("a",{parentName:"li",href:"/docs/Use-Cases/agent_chat"},"multi-agent conversation"),"."),(0,r.kt)("li",{parentName:"ul"},"Understand the use cases for ",(0,r.kt)("a",{parentName:"li",href:"/docs/Use-Cases/enhanced_inference"},"enhanced LLM inference"),"."),(0,r.kt)("li",{parentName:"ul"},"Find code examples from ",(0,r.kt)("a",{parentName:"li",href:"/docs/Examples/AutoGen-AgentChat"},"Examples"),"."),(0,r.kt)("li",{parentName:"ul"},"Read ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/agentchat/conversable_agent/"},"SDK"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn about ",(0,r.kt)("a",{parentName:"li",href:"/docs/Research"},"research")," around AutoGen."),(0,r.kt)("li",{parentName:"ul"},"Chat on ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/pAbnFJrkgZ"},"Discord"),".")),(0,r.kt)("p",null,"If you like our project, please give it a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/stargazers"},"star")," on GitHub. If you are interested in contributing, please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/Contribute"},"Contributor's Guide"),"."))}p.isMDXComponent=!0},5653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autogen_agentchat-0f2be80585fd5bf03f0ac701bd51f2b9.png"},248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat_example-da70a7420ebc817ef9826fa4b1e80951.png"}}]);