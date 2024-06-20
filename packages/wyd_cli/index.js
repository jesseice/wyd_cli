#! /usr/bin/env node
// import commandLineArgs from "command-line-args";
// import commandLineUsage from "command-line-usage";
import getInputInfo from "./clone/index.js";
getInputInfo();
//帮助内容
// const helpSections = [
//   {
//     header: "create-kitty",
//     content: "一个快速生成组件库搭建环境的脚手架",
//   },
//   {
//     header: "Options",
//     optionList: [
//       {
//         name: "version",
//         typeLabel: "{underline boolean}",
//         description: "版本号",
//       },
//       {
//         name: "arg1",
//         typeLabel: "{underline string}",
//         description: "参数1",
//       },
//       {
//         name: "arg2",
//         typeLabel: "{underline number}",
//         description: "参数2",
//       },
//     ],
//   },
// ];
// //配置命令参数
// const optionDefinitions = [{ name: "help", alias: "h", type: Boolean }];
// const options = commandLineArgs(optionDefinitions);
// console.log(options);
// if (options.help) console.log(chalk.green(commandLineUsage(helpSections)));
