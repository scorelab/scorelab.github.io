(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{SLib:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"d27f87d4-0418-5975-9569-1ce03b8e5493","frontmatter":{"title":"GSoC 2023","mainImage":"./logos/gsocLogo.png","description":"Welcome to the SCORE Lab Google Summer of Code (GSoC) 2023 project ideas page. We are a dynamic and enthusiastic nonprofit research lab pioneering in Computer Security, and Software Tools, and is one of the best labs in South Asia. This is the 6th time that we are participating in the GSoC, we will use this page to develop possible project ideas that have on the above mentioned areas. Please note that anyone who is interested can participate in this process. You do not have to be a GSoC student or mentor to suggest possible project ideas. You can also talk to us about possible project ideas and we are happy to improve or heip you with them. Please keep in mind that projects need to be realistically something that is able to be functionally completed by a student working full time for about eight weeks. Thanks!","links":[{"name":"Mailing List","url":"https://groups.google.com/forum/#!forum/score-community"},{"name":"Gitter Channel","url":"https://gitter.im/scorelab/"},{"name":"Proposal Template","url":"https://goo.gl/KXcqAL"}],"guidelinesHeading":"Important Guidelines on Submitting Ideas","guidelinesDescription":"There are some important guidelines to submit ideas, please read these carefully before adding your ideas!","guidelines":["There is a fixed time period for implementing and coding your ideas","Come up with attainable goals and you will be able to complete what you set out to do. You can always contact   our mentors and community and get an idea about the workload and whether you might be able to complete them.","You are free to come up with your own ideas. The ideas should be about Internet of Things (IOT), Computer Security and Software Tools. Also if you love to work on any of these subjects but do not have an idea you can always contact us.","Lets Talk! The best way to solve problems that you might have is to contact our mentors and also our community.","We encourage you to do documentation so that we can keep track of your progress and also help you if things are not going according to plan. Although not compulsory we have a strong belief that this method can cut down your time to code and also the workload of the mentors drastically.","Please send your new project ideas to gsoc[at]scorelab.org"],"projectListHeading":"All SCoRe Lab Projects","projectListButtonText":"View All Projects","projectListUrl":"/projects","ideaListHeading":"Idea List for 2023","ideaListDescription":"The following is the idea list for Google Summer of Code 2023","ideaList":[{"title":"#1: Frontend and Backend Integration in Codelabz (~175 hours)","description":"Designing new screens and redesigning existing ones, including Codelabz creation, Quick access, explore screen etc. <ul><li>Rendering dynamic data on the home screen, Design and development of the Codelabz application\'s backend.</li><li>Users and Organisations can create and publish tutorials and notebooks on their pages.</li><li>They can recursively follow/unfollow any Organisation and like + comment on posts.</li><li>Implementation of the FCM(Firebase Cloud Messaging) cross-platform messaging to trigger notifications when a post(Codelabz tutorial) is liked or commented.</li><li>Additionally, documentation should be kept up to date with any changes or updates to the feature.</li></ul>","expectedresults":"<ul><li>At the end of your summer, we will expect the first working prototype of the Codelabz application.</li><li>Also, you will have an updated UI as per the system design.</li></ul>","githuburl":"https://github.com/scorelab/Codelabz","requiredknowledge":"React.JS, Node.JS, Firebase","possiblementors":"Charith, Nipuna, Mahender(Maahi_10001), Sarfraz(Sarfraz-droid)"},{"title":"#2: ProjectExplainer: Summarization using Large Language Models (~175 hours)","description":"Large Language Models are becoming popular for their ability to perform great at tasks such as text generation, summarization, classification etc. Work requires incubating a project for summarization tasks using language models in open. And later come up with a solution to summarize application documentation such as READMEs for easy understanding and helping project newcomers to understand the synopsis of the projects. In the future, it could be extended to factor in wider spaces such as code or conversation to portray an easy picture for the newcomers.","expectedresults":"<ul><li>Dataset exploration and reporting gaps based on the intended outcome.</li><li>Choosing the right LLM (by doing some experiments/theoretical evidence) and finetuning them for the task.</li><li>Integrate them as a browser extension or web UI for consumption</li></ul>","githuburl":"https://github.com/scorelab/","requiredknowledge":"Deep Learning, Hugging Face, Pytorch, Python","possiblementors":"Mehant Kammakomati(kmehant)"},{"title":"#3: Implement Community Application using Go-Social Framework (~175 hours)","description":"Implement and Develop Community Application using Go-Social Framework. Go-Social is React-Native based project/framework, containing common app templates with customizable and Generic components for community-based mobile applications in order to reduce development time.","expectedresults":"<ul><li>Propose valid idea for Community Application with use case.</li><li>Design and Implement Community Application.</li></ul>","githuburl":"https://github.com/scorelab/Go-social","requiredknowledge":"Javascript, React-Native, ReactJS, NodeJS, Firebase","possiblementors":"Abhi Kulshrestha, Wathsara, Shehan Dhaleesha"},{"title":"#4: B0Bot - Bug Zero Twitter Bot (~175 hours)","description":"B0Bot - Bug Zero Twitter Bot is a bot that provides periodic hacker, and cybersecurity news to the followers of the Bug Zero Twitter account. In addition, if a user mentions the Bug Zero Twitter account and asks for certain keywords or news, B0Bot will reply with the latest news (on Twitter) with the given keywords.<ul><li>Develop the basic Flask API suitable for serverless infrastructure.</li><li>Develop mentions and retweets module using Tweepy.</li><li>Add test cases for Flask API.</li><li>Design MongoDB database scheme for storing intermediate information such as last retweeted, mentions, etc.</li><li>Attention to API security.</li><li>Optimization of the code for lower memory and execution time relevant to the serverless architecture.</li><li>Attention to API development best practices, and load and stress balancing.</li><li>Documentation of the API using OpenAPI v3.</li></ul>","expectedresults":"<ul><li>At the end of your summer, we expect the first working prototype of the B0Bot (Bug Zero Twitter Bot).</li><li>In addition, we expect the project to be completely tested with suitable test coverage.</li></ul>","githuburl":"https://github.com/bug-zero/b0bot","requiredknowledge":"Python, Flask, API, MongoDB (PyMongo), Twitter API (Tweepy), Serverless Architecture (Vercel), OpenAPI v3 (fka Swagger)","possiblementors":"Nipuna"},{"title":"#5: Design 5 new Themes for Webiu (~175 hours)","description":"Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running by developing reusable Gatsby Components which are easily plugable to create Gatsby websites with ease.","expectedresults":"<ul><li>Design 5 new themes for Webiu(For 5 difference use case)</li><li>Desing and Develop theme module for Webiu</li><li>Implement new themes in Webiu</li></ul>","githuburl":"https://github.com/scorelab/Webiu","requiredknowledge":"Javascript, React Js, GatsbyJs","possiblementors":"Charith Elvitigala"},{"title":"#6: GraphNet (~175 hours)","description":"Graphnet is a javascript graph library that will be created as a module to the semantic UI framework. Whereas Graphnet dynamically renders all nodes and edges via websocket connections, node and edge positioning algorithms such as force, random, circular, and others must be provided within the Graphnet as builtin modules.","expectedresults":"<ul><li>Milestones can be defined prior to GSoC starts</li></ul>","githuburl":"https://github.com/scorelab/GraphNet","requiredknowledge":"Javascript, React","possiblementors":"Ravindu, Nipuna"},{"title":"#7: Community Dictionary - A crowd-sourced multilingual dictionary (~175 hours)","description":"This project focuses on developing a crowd-sourced dictionary which will support the English language as well as multiple other languages. The dictionary will provide the users with a platform containing concise definitions along with examples on the usage of words, in multiple languages. Community Dictionary includes words/terms from multiple languages, representing multiple categories. Each word is defined along with an example of each word\'s usage. These words, definitions and examples can be added in any language the user desires. The users have the facilities to search through the dictionary fast and easily. The users are able to comment on how accurate the given definitions are to ensure reliability. If any user who is not happy or disgreeing with a word or a definiton has the ability to report it to the community for review.","expectedresults":"<ul><li>Improve FrontEnd for Community Dictionary.</li><li>Develop FrontEnd improvemnts Community Dictionary Platform..</li><li>Provide Testing and Documentation</li></ul>","githuburl":"https://github.com/scorelab/com-dictionary","requiredknowledge":"ReactJS","possiblementors":"Asitha"},{"title":"#8: Scan8 -  Realtime front end (~175 hours)","description":"Scan8 is a distributed scanning system for detecting trojans, viruses, malware, and other malicious threats embedded in files. The system will allow one to submit a list of URLs or files and get the scan results in return.","expectedresults":"Current dashboard doesn\'t support any real-time data orchestrating features therefore this project is for refactoring the entire front-end with real-time data orchestrating","githuburl":"https://github.com/web-telescope/Scan8","requiredknowledge":"ReactJs, Flask, WebSocket","possiblementors":"Ravindu, Isuru"},{"title":"#9: Scan8 -  Web-scanner (~175 hours)","description":"Scan8 is a distributed scanning system for detecting trojans, viruses, malware, and other malicious threats embedded in files. The system will allow one to submit a list of URLs or files and get the scan results in return.","expectedresults":"Currently Scan8 is only capable of scanning binaries. In this project, we want to write a plugin to the Scan8 to capture all the js, html, cs and txt content of a given URl and submit to the Scan8 scanner and collect scan outputs","githuburl":"https://github.com/web-telescope/Scan8","requiredknowledge":"Web crawling, Linux, python","possiblementors":"Ravindu, Isuru"},{"title":"#10: survey6 - Data aggregator (~175 hours)","description":"Ipv6 is the internet\'s future, and it necessitated a more scalable survey tool to comprehend how routing and DNS function. The purpose of this project is to create an IPv6 listener that will passively collect IPv6 traffic data as a passive data collection tool for cyber security research.","expectedresults":"Currently, the collector probe does not ship the data to the central C&C server. This project is to design and implement a data aggregate component. Therefore we expect to design a big data scale async and robust data uploading pipeline.","githuburl":"https://github.com/web-telescope/survey6","requiredknowledge":"rsync protocol, linux, python, c/c++","possiblementors":"Ravindu, Udesh"},{"title":"#11: RayZed - Performance evaluation, codebase update, and AWS, AZURE migration (~175 hours)","description":"RayZed is a ray-based, distributed web vulnerability scanner designed on a ray queue. Also, RayZed is a cloud-native tool implemented using Terraform stack.","expectedresults":"<ul><li>We need a deep inspection of the performance evaluation of the RayZed to understand the full capabilities of the tool we designed as well as its faults. require, bash scripts to test the tool</li><li>The codebase is Almost one year old and needs to upgrade to the latest TF versions</li><li>Update TF scripts for AWS and AZURE and test</li></ul>","githuburl":"https://github.com/web-telescope/RayZed","requiredknowledge":"Ray.io, zed, Linux, bash, Terraform, GCP, AWS, AZURE","possiblementors":"Ravindu, Udesh"},{"title":"#12: NFT-ToolBox (~175 hours)","description":"An npm package for seamless integration of all NFT related functionalities in Web2 projects. This project helps web2 developers seamlessly integrate web3 functionality.","expectedresults":"Currently we are able to mint NFT on Ethereum chain and upload metadata to multiple storage services. The current task is to improve the existing stuff with multi-chain support like Solana, Tezos and EVM compatible chains, add more ERC’s support, make different types of on-chain and off-chain algorithms for super fast batch minting of NFT and add support for Soulbound NFTs, dynamic NFT and nested NFT. A website with all these functionalities needs to be created along with required smart contracts.","githuburl":"https://github.com/scorelab/NFT-Toolbox","requiredknowledge":"Solidity, NFT, Blockchain, Rust, Nodejs, Rust, ReactJs, Typescript","possiblementors":"Mohit Bhat"},{"title":"#13: NodeCloud (~175 hours)","description":"NodeCloud is a standard library to get a single API on the open cloud with multiple providers. It is a NodeJs library which comes with plugins for each cloud provider. NodeCloud\'s aim is to abstract away the differences between different cloud providers. It provides an easy to use API for developers in order to interact with different cloud providers.","expectedresults":"Improving existing code base and adding support for more cloud services such as Linode, Vmware cloud, IBM cloud, oracle cloud, etc.","githuburl":"https://github.com/leopardslab/nodecloud","requiredknowledge":"Cloud, Nodejs, Typescript, compiler, Javascript","possiblementors":"Mohit Bhat"},{"title":"#14: ImageLab (~175 hours)","description":"ImageLab is a standalone tool which supports anyone to get started with image processing related concepts and techniques in an interactive, less logical way. So, this tool enables and also motivates the fresh users to understand how image processing concepts work by interacting with ImageLab. Moreover, for the users who are already comfortable with image processing tasks ImageLab offers a test environment before they move ahead with actual implementation or development.","expectedresults":"At the conclusion of the program we expect the student to achieve the following objectives. <ul><li>Overhaul the UI to the current industry standards.</li><li>Incorporate the processing of video files</li><li>Update the relevant tests, documentation etc</li></ul>","githuburl":"https://github.com/scorelab/imagelab","requiredknowledge":"OpenCV, HTML, CSS, Javascript, Electron (Optional)","possiblementors":"Oshan Mudannayake, Sahan Dissanayake"},{"title":"#15: TensorMap (~175 hours)","description":"TensorMap is a web application that will allow the users to create machine learning algorithms visually. TensorMap supports reverse engineering of the visual layout to a Tensorflow implementation in preferred languages. The goal of the project is to let the beginners play with machine learning algorithms in Tensorflow without less background knowledge about the library.","expectedresults":"The student is expected to clean up the codebase of the project and simplify the project architecture as necessary. Relevant tests and documentation should be created as well.","githuburl":"https://github.com/scorelab/TensorMap","requiredknowledge":"Tensorflow, Python","possiblementors":"Oshan Mudannayake"}]}}}]}}}')},"j/AA":function(e,t,o){"use strict";o.r(t);var i=o("q1tI"),a=o.n(i),n=o("7vrA"),s=o("3Z9Z"),r=o("JI6e"),l=o("Wbzz"),d=o("wHSu"),c=o("jfxn"),u=o("SLib"),h=o("SQ6y"),p=o("wtQ5"),m=o("8bOL");t.default=function(){var e,t=(e=u.data.allMarkdownRemark).edges.length>0?e.edges[0].node.frontmatter:null,o=Object(h.a)();return a.a.createElement(c.a,null,a.a.createElement(p.a,{title:"Score Labs GSoC Page"}),a.a.createElement(m.g,{mainText:t.title,icon:d.g,backgroundColor:"#fff8e4",small:!0}),a.a.createElement(m.b,{image:t.mainImage,mainText:t.description}),a.a.createElement(n.a,null,a.a.createElement(s.a,null,a.a.createElement(r.a,null,a.a.createElement(m.i,{links:t.links})))),a.a.createElement("br",null),a.a.createElement(m.e,{heading:t.ideaListHeading,description:t.ideaListDescription,listItems:t.ideaList,defaultActiveKeys:t.ideaList.map((function(e,t){return""+t}))}),a.a.createElement("br",null),a.a.createElement(m.f,{heading:t.guidelinesHeading,description:t.guidelinesDescription,guidelines:t.guidelines}),a.a.createElement("br",null),a.a.createElement(m.k,{title:o.mailingListHeading,feedUrl:o.mailingListFeedUrl,small:!0}),a.a.createElement("br",null),a.a.createElement(m.d,{title:o.gitterRoomsListHeading,gitterOrganizationName:o.gitterOrganizationName,gitterToken:o.gitterToken,small:!0}),a.a.createElement("br",null),a.a.createElement(m.a,{heading:t.projectListHeading,buttonText:t.projectListButtonText,onClick:function(){return Object(l.navigate)(t.projectListUrl)}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-gsoc-js-3634c59b243a90dfbce5.js.map