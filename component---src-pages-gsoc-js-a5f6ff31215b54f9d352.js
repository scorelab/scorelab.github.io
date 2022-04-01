(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{SLib:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"f80eaf75-6bf5-5f0b-a18a-ea4340cc4d63","frontmatter":{"title":"GSoC 2022","mainImage":"./logos/gsocLogo.png","description":"Welcome to the SCoRe Lab Google Summer of Code (GSoC) 2022 project ideas page. We are a dynamic and enthusiastic nonprofit research group pioneering in Computer Security, and Software Tools, and is one of the best groups in South Asia. This is the 6th time that we are participating in the GSoC, we will use this page to develop possible project ideas that have on the above mentioned areas. Please note that anyone who is interested can participate in this process. You do not have to be a GSoC student or mentor to suggest possible project ideas. You can also talk to us about possible project ideas and we are happy to improve or heip you with them. Please keep in mind that projects need to be realistically something that is able to be functionally completed by a student working full time for about eight weeks. Thanks!","links":[{"name":"Mailing List","url":"https://groups.google.com/forum/#!forum/score-community"},{"name":"Gitter Channel","url":"https://gitter.im/scorelab/"},{"name":"Proposal Template","url":"https://goo.gl/KXcqAL"}],"guidelinesHeading":"Important Guidelines on Submitting Ideas","guidelinesDescription":"There are some important guidelines to submit ideas, please read these carefully before adding your ideas!","guidelines":["There is a fixed time period for implementing and coding your ideas","Come up with attainable goals and you will be able to complete what you set out to do. You can always contact   our mentors and community and get an idea about the workload and whether you might be able to complete them.","You are free to come up with your own ideas. The ideas should be about Internet of Things (IOT), Computer Security and Software Tools. Also if you love to work on any of these subjects but do not have an idea you can always contact us.","Lets Talk! The best way to solve problems that you might have is to contact our mentors and also our community.","We encourage you to do documentation so that we can keep track of your progress and also help you if things are not going according to plan. Although not compulsory we have a strong belief that this method can cut down your time to code and also the workload of the mentors drastically.","Please send your new project ideas to gsoc[at]scorelab.org"],"projectListHeading":"All SCoRe Lab Projects","projectListButtonText":"View All Projects","projectListUrl":"/projects","ideaListHeading":"Idea List for 2022","ideaListDescription":"The following is the idea list for Google Summer of Code 2022","ideaList":[{"title":"#1: Rewrite ImageLab backend (~175 hours)","description":"ImageLab is a standalone tool that lets the user play with OpenCV using its GUI. It is a tool for the students and researchers who are new to image processing. Its functionality is similar to Scratch (https://scratch.mit.edu) except that it allows users to interact with the OpenCV library.","expectedresults":"<ul><li>ImageLab was initially written in Java.</li><li>Last year we revamped the interface using electron.</li><li>Your task for this period is to rewrite the entire functionality in Javascript so that the app can be made fully electron.</li></ul>","githuburl":"https://github.com/scorelab/imagelab","requiredknowledge":"Javascript, Electron (preferred), Java","possiblementors":"Oshan Mudannayake (oshan.ivantha@gmail.com), Sahan Dissanayake"},{"title":"#2: TensorMap (~175 hours)","description":"TensorMap is a web application that will allow users to create machine learning algorithms visually. TensorMap will support reverse engineering of the visual layout to a Tensorflow implementation in preferred languages. The goal of the TensorMap is to let beginners play with machine learning algorithms in TensorFlow without less background knowledge about the library.","expectedresults":"<ul><li>We expect you to test the current state of the TensorMap and come up with your own milestones that would bring TensorMap closer to its desired functionality.</li><li>Please discuss with the mentor before submitting a proposal to this project.</li></ul>","githuburl":"https://github.com/scorelab/tensormap","requiredknowledge":"Tensorflow. Python","possiblementors":"Oshan Mudannayake (oshan.ivantha@gmail.com), Asela Dasanayaka"},{"title":"#3: Scan8 (~175 hours)","description":"Scan8 is a distributed scanning system for detecting malicious threats embedded in files. The system allows one to submit files and get the scan results in return. The system creates numerous ClamAV containers and distributes the scan list on demand amongst them.","expectedresults":"<ul><li>Work on the user interface to display more information with dynamic updates.</li><li>Include an option to download the scan results</li><li>Add a lock mechanism to handle concurrent access by multiple coordinator nodes</li><li>Decouple the webserver and coordinator node to different docker images</li><li>Host the application to a website</li><li>Adding test cases to the test suite</li></ul>","githuburl":"https://github.com/web-telescope/Scan8","requiredknowledge":"HTML, CSS, Python, Parallel programming, Docker and writing unit tests","possiblementors":"Maanas Talwar, Ravindu"},{"title":"#4: Implement Community Application using Go-Social Framework (~175 hours)","description":"Implement and Develop Community Application using Go-Social Framework. Go-Social is React-Native based project/framework, containing common app templates with customizable and Generic components for community-based mobile applications in order to reduce development time.","expectedresults":"<ul><li>Propose valid idea for Community Application with use case.</li><li>Design and Implement Community Application.</li></ul>","githuburl":"https://github.com/scorelab/Go-social","requiredknowledge":"Javascript, React-Native, ReactJS, NodeJS, Firebase","possiblementors":"Abhi Kulshrestha, Wathsara, Shehan Dhaleesha"},{"title":"#5: kubebot (~175 hours)","description":"kubebot is a messaging bot for monitoring and debugging Kubernetes clusters. Conext of kubebot is generate root cause analysis in human readable format using machine learning.","expectedresults":"<ul><li>Design and Implement kubebot</li></ul>","githuburl":"https://github.com/leopardslab/kubebot","requiredknowledge":"go programming language, Kubernetes","possiblementors":"Pratik Dhanave"},{"title":"#6: Clocal GCP - Core (~175 hours)","description":"Clocal GCP can be separated into core CLI application and a list of providers. Currently it resides in the same repository but having separate docker containers. Student can discuss the best approaches with the mentors and start implementing. What is expected is a well written CLI application which can be integrated with plugins. For an example a user can install the clocal GCP cli application and add separate plugins as necessary. example - Cloud Function plugin. This task involves creating the core CLI application and converting existing cloud emulation services to plugins. And adding the below services as plugins.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/leopardslab/clocal-gcp","requiredknowledge":"node.js, docker, general idea of gcp cloud and services.","possiblementors":"Rumesh Hapuarachchi, Rajika Imal"},{"title":"#7: Clocal GCP - Services (~175 hours)","description":"Here the task is to implement the emulation services for below Google Cloud platform products. These has to be implemented as individual services as docker containers, so that in a later phase these will be used as plugins for clocal gcp core CLI application. And students are free to choose the technology stack they are most familiar with to implement the emulation services.But NodeJS and python are preferred.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/leopardslab/clocal-gcp","requiredknowledge":"node.js, docker, general idea of gcp cloud and services.","possiblementors":"Rumesh Hapuarachchi, Rajika Imal"},{"title":"#8: Clocal Azure - Services (~175 hours)","description":"Clocal Azure is an emulation engine for azure services. The student is expected to identify the azure services which is practical to apply on Clocal Azure and implement the services. New services are expected from the student to implement. Later on, the student is expected to update the existing services and implement more features on the existing services. When implementing new services, student is free to propose any service with the approval of the mentor to implement during the period. Below are few suggested services.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/leopardslab/clocal-azure","requiredknowledge":"node.js, docker, general idea of azure cloud and services.","possiblementors":"Rumesh Hapuarachchi, Rajika Imal"},{"title":"#9: NodeCloud - Rackspace Provider (~175 hours)","description":"Rackspace Provider is another key provider which we are missing at the moment. Student has a bigger task to do here as Rackspace does not offer their own NodeJS SDK. What they offer is pkgcloud binding for Rackspace. Student will have to implement the NodeSDK using REST API and will have to use the developed SDK to support Rackspace provider for Nodecloud.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/cloudlibz/nodecloud","requiredknowledge":"nodejs, rackspace","possiblementors":"Rumesh Hapuarachchi, Rajika Imal"},{"title":"#10: NodeCloud - Ali Cloud Provider (~175 hours)","description":"Ali-cloud is a rising cloud provider in the cloud arena. Currently, NodeJS only supports only AWS and GCP. Students task is to implement the major services of Ali-cloud in the NodeJS. The student will have to discuss with mentors for the potential project scope as implementing entire provider will be a bigger task and may require multiple students.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/cloudlibz/nodecloud","requiredknowledge":"nodejs, ali-cloud","possiblementors":"Mohit Bhat, Rumesh Hapuarachchi, Rajika Imal"},{"title":"#11: CodeLabz - FrontEnd, News Feed, Profiles, Organization, Profiles (~175 hours)","description":"CodeLabz is a platform where the users can engage with online tutorials and the organizations can create tutorials for the users.","expectedresults":"<ul><li>Improve FrontEnd for CodeLabz Platform.</li><li>Develop FrontEnd improvemnts CodeLabz Platform..</li><li>Provide Testing and Documentation</li></ul>","githuburl":"https://github.com/scorelab/Codelabz","requiredknowledge":"ReactJS","possiblementors":"Charith Elvitigala"},{"title":"#12: Design 5 new Themes for Webiu (~175 hours)","description":"Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running by developing reusable Gatsby Components which are easily plugable to create Gatsby websites with ease.","expectedresults":"<ul><li>Design 5 new themes for Webiu(For 5 difference use case)</li><li>Desing and Develop theme module for Webiu</li><li>Implement new themes in Webiu</li></ul>","githuburl":"https://github.com/scorelab/Webiu","requiredknowledge":"Javascript, React Js, GatsbyJs","possiblementors":"Charith Elvitigala, Devon Wijesinghe, Yash"},{"title":"#13: React Email (~175 hours)","description":"Modern day web browsers are pretty standardized and come with a certain guarantee that if a web page works in one browser, it will work in another web browser too except for a few minor cases. However, this is not true for email clients yet. The developer community is thus aligned to certain tricks and hacks to make sure the emails sent are properly rendered by these different email clients.  Few example would be, <ul><li>Using indeed CSS styles instead of class-bases styles</li><li>Using `table`s for layouting rather than `div`s</li><li>Using email client specific resets</li></ul>Given this situation, it would be a great help to implement a React based framework to provide a common interface for email building. For example, <img src=\\"../gsoc/react-email-1.png\\" width=\\"500\\" height=\\"225\\"></br>This when given to the email generation function, should generate raw HTML based email content using a valid boilerplate as the base. </br><img src=\\"../gsoc/react-email-2.png\\" width=\\"500\\" height=\\"100\\"></br>","expectedresults":"<ul><li>Initialize the project using TypeScript, based on Rollup as bundler <ul><li>Look for Rollup based Node Module building boilerplates</li></ul></li><li>Implement the basic components, like Email, Grid, Row, Cell, Typography, Image, Button, Link, Quote, etc.</li><li>Implement a utility method to combine styles</br><img src=\\"../gsoc/react-email-3.png\\" width=\\"500\\" height=\\"100\\"></li><li>Implement a hook for exposing styles to components with style overrides</br><img src=\\"../gsoc/react-email-4.png\\" width=\\"500\\" height=\\"225\\"></li><li>Setup Storybook and implement user stories for each component <ul><li>Add sample templates using the component in Storybook</li></ul></li><li>Host Storybook using GitHub pages</li><li>Setup CI/CD to auto-deploy the Storybook when a change is merged to master</li><li>Implement component styles based on Material UI spec (like Button)<ul><li>Framework should expose both styles and unstyled components</li></ul></li><li>Implement text email generation utility based on Email templates</br><img src=\\"../gsoc/react-email-5.png\\" width=\\"500\\" height=\\"100\\"></li><li>Setup Jest testing and write test cases for component and utility methods</li><li>Implement stotyshot testing for components</li><li>Investigate and implement a way to validate the compatibility of the generated HTMl content using a library or a 3rd party service which has a generous free tier</li></ul>","githuburl":"https://github.com/leopardslab/react-email","requiredknowledge":"Typescript, React","possiblementors":"Milindu Kumarage"},{"title":"#14: OpenMF extend to iOS (~175 hours)","description":"OpenMF is an open source forensic tool for Android smartphones that helps digital forensic investigators throughout the life cycle of digital forensic investigation. Idea is to extend OpenMF with data extraction from iOS too. Right now it only extracts android data. Also, connecting it with OpenMF Analytics. Students can also add more analytics features and integrate it with the OpenMF frontend.","expectedresults":"<ul><li>Develop iOS data collector</li><li>Show iOS data web UI</li><li>Testing</li></ul>","githuburl":"https://github.com/scorelab/OpenMF","requiredknowledge":"React, Python, Flask, some idea of data visualization and iOS","possiblementors":"Swapnal Shahil"},{"title":"#15: ipv6 survey Tool (survey6) (~175 hours)","description":"Ipv6 is the internet\'s future, and it necessitated a more scalable survey tool to comprehend how routing and DNS function. The purpose of this project is to create an IPv6 listener that will passively collect IPv6 traffic data as a passive data collection tool for cyber security research.","expectedresults":"<ul><li>Develop a Linux network probe to intercept ipv6 traffic</li><li>To centralize the data being intercepted by the probe, develop a geo-distributed grid application that integrated with the probe</li><li>Testing</li></ul>","githuburl":"https://github.com/web-telescope/survey6","requiredknowledge":"C++, Linux","possiblementors":"Ravindu"},{"title":"#16: Build a SCoRe Lab web Dapp to mint NFTs (~175 hours)","description":"A non-fungible token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. Each NFT has its own unique identity. Design NFT’s along with building a web3 dapp, that can mint NFTs.","expectedresults":"<ul><li>Design and Implement Web dapp to mint NFT</li><li>Design NFTs with props</li><li>Testing</li><li>The module should be as much as configurable as possible</li><li>There should be a default NFT contract or we can let user put there own NFT contract address if they want but they should make it as per our and erc721/erc1155 standards</li><li>Implement different options for storing nft data like filecoin, pinata, textile, web3.storage, IPFS, arweave, etc</li><li>Storage choice should be given in configurations options along with input for keys and required auth parameters for the same</li>Think of mongoose like package to be built for NFTs<li>These are just basic features , more ideas are welcome in your proposals!</li></ul>","githuburl":"https://github.com/scorelab/mint-NFT","requiredknowledge":"Javascript using tools like Solidity, Alchemy, React, Metamask, Remix, Opensea, Ethereum, Smart Contracts","possiblementors":"Abhi Kulshrestha, Mohit Bhat"},{"title":"#17: LabelLab - Web (~175 hours)","description":"LabelLab is an image analysis and classification platform for Machine Learning researchers. Originally built to classify images of elephants, it has been developed over the years and is now a full-fledged ML utility tool that is able to classify all kinds of images and carry out a number of ML-related tasks in a project-based manner while teaming up with other researchers.","expectedresults":"For GSoC 2022, the main objective is to further improve the collaborative and version tracking system of the project.<ul><li>Create a ticketing/issue tracking system inside projects (e.g. Similar to Jira). A few features that could be implemented are - <ul><li>Project admins should be able to create issues/tasks inside a project and assign them to project members</li><li>Project members can discuss the issue/task by posting comments on it</li><li>Issues can be associated with activity logs to track and display its progress</li><li>Issues can be associated with entities</li><li>Issues should follow the pre-existing teams system and be assigned a category and team. Only concerned team members can view and work on them</li></ul></li><li>Introducing the above feature would also require some changes and restructuring in the pre-existing project activity tracking system. One can start with - <ul><li>Associating activity logs with the ticket/issue number</li><li>Using logs to determine the status of an issue</li></ul> </li><li>Enhance the chat system present inside teams - <ul><li>Mentioning/tagging users, activity logs and issues within a message</li><li>Improve UI</li></ul> </li><li>Fix existing bugs</li><li>Write unit tests for the backend and frontend</li><li>The exact requirements of these features are not set in concrete. The above points are provided to give a basic idea on how the project can be shaped in the future. The applicant can contact the mentor for further clarification and discussion about other potential improvements</li></ul>","githuburl":"https://github.com/scorelab/LabelLab","requiredknowledge":"Python, Flask, JavaScript, React.js","possiblementors":"Amlan Kumar Nandy"},{"title":"#18: LabelLab - Mobile (~175 hours)","description":"LabelLab is an image analysis and classification platform for Machine Learning researchers. Originally built to classify images of elephants, it has been developed over the years and is now a full-fledged ML utility tool that is able to classify all kinds of images and carry out a number of ML-related tasks in a project-based manner while teaming up with other researchers.","expectedresults":"For GSoC 2022, the main objective is to further improve the collaborative and version tracking system of the project. <ul><li>Create a ticketing/issue tracking system inside projects (e.g. Similar to Jira). A few features that could be implemented are - <ul><li>Project admins should be able to create issues/tasks inside a project and assign them to project members</li><li>Project members can discuss the issue/task by posting comments on it</li><li>Issues can be associated with activity logs to track and display its progress</li><li>Issues can be associated with entities</li><li>Issues should follow the pre-existing teams system and be assigned a category and team. Only concerned team members can view and work on them</li><li>Push notifications for issues related to the specific users</li></ul></li><li>Introducing the above feature would also require some changes and restructuring in the pre-existing project activity tracking system. One can start with - <ul><li>Associating activity logs with the ticket/issue number</li><li>Using logs to determine the status of an issue</li></ul> </li><li>Enhance the chat system present inside teams - <ul><li>Mentioning/tagging users, activity logs and issues within a message</li><li>Improve UI</li><li>Push notifications</li></ul> </li><li>Fix existing bugs</li><li>Write unit tests for the mobile application</li><li>The exact requirements of these features are not set in concrete. The above points are provided to give a basic idea on how the project can be shaped in the future. The applicant can contact the mentor for further clarification and discussion about other potential improvements</li></ul>","githuburl":"https://github.com/scorelab/LabelLab","requiredknowledge":"Dart, Flutter, Python, Flask","possiblementors":"Amlan Kumar Nandy"},{"title":"#19: GraphNet (~175 hours)","description":"Graphnet is a javascript graph library that will be created as a module to the semantic UI framework. Whereas Graphnet dynamically renders all nodes and edges via websocket connections, node and edge positioning algorithms such as force, random, circular, and others must be provided within the Graphnet as builtin modules.","expectedresults":"<ul><li>Milestones can be defined prior to GSoC starts</li></ul>","githuburl":"https://github.com/scorelab/GraphNet","requiredknowledge":"Javascript, React","possiblementors":"Ravindu, Nipuna"}]}}}]}}}')},"j/AA":function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),o=i.n(a),s=i("7vrA"),n=i("3Z9Z"),l=i("JI6e"),r=i("Wbzz"),c=i("wHSu"),d=i("jfxn"),u=i("SLib"),h=i("SQ6y"),p=i("wtQ5"),m=i("8bOL");t.default=function(){var e,t=(e=u.data.allMarkdownRemark).edges.length>0?e.edges[0].node.frontmatter:null,i=Object(h.a)();return o.a.createElement(d.a,null,o.a.createElement(p.a,{title:"Score Labs GSoC Page"}),o.a.createElement(m.g,{mainText:t.title,icon:c.g,backgroundColor:"#fff8e4",small:!0}),o.a.createElement(m.b,{image:t.mainImage,mainText:t.description}),o.a.createElement(s.a,null,o.a.createElement(n.a,null,o.a.createElement(l.a,null,o.a.createElement(m.i,{links:t.links})))),o.a.createElement("br",null),o.a.createElement(m.e,{heading:t.ideaListHeading,description:t.ideaListDescription,listItems:t.ideaList,defaultActiveKeys:t.ideaList.map((function(e,t){return""+t}))}),o.a.createElement("br",null),o.a.createElement(m.f,{heading:t.guidelinesHeading,description:t.guidelinesDescription,guidelines:t.guidelines}),o.a.createElement("br",null),o.a.createElement(m.k,{title:i.mailingListHeading,feedUrl:i.mailingListFeedUrl,small:!0}),o.a.createElement("br",null),o.a.createElement(m.d,{title:i.gitterRoomsListHeading,gitterOrganizationName:i.gitterOrganizationName,gitterToken:i.gitterToken,small:!0}),o.a.createElement("br",null),o.a.createElement(m.a,{heading:t.projectListHeading,buttonText:t.projectListButtonText,onClick:function(){return Object(r.navigate)(t.projectListUrl)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-gsoc-js-a5f6ff31215b54f9d352.js.map