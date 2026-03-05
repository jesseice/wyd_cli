import chalk from "chalk";
import prompts from "prompts";
import fs from "fs";
import ora from "ora";
import download from "download-git-repo";

const gitClone = (remote, name, option) => {
	const downSpinner = ora("正在下载模板...").start();
	return new Promise((resolve, reject) => {
		download(remote, name, option, (err) => {
			if (err) {
				downSpinner.fail();
				console.log("err", chalk.red(err));
				reject(err);
				return;
			}
			downSpinner.succeed(chalk.green("模板下载成功！"));
			console.log(`Done. Now run:\r\n`);
			console.log(chalk.green(`cd ${name}`));
			console.log(chalk.blue("npm install"));
			console.log("npm run dev\r\n");
			resolve();
		});
	});
};
const remoteList = {
	Antdv4Vue3: "https://github.com/jesseice/ant4-vue3-back.git",
	Nuxt3: "https://github.com/jesseice/nuxt3_init.git",
	Crx: "https://github.com/jesseice/vue3_vite5_chrome_plugin.git",
	Crx_NoPackage: "git@github.com:jesseice/origin_crx.git",
	Crx_NoPackage_Vue: "git@github.com:jesseice/origin_crx.git",
	Nest_Ts: "git@github.com:jesseice/nest_cli.git",
	Node_Ts: "git@github.com:jesseice/node_typescript_init.git"
};
let branch = "main";
const promptsOptions = [
	{
		type: "text", //单选
		name: "name",
		message: "project-name",
		validate(val) {
			if (!val) return "模板名称不能为空！";
			if (fs.existsSync(val)) return "项目名已存在";
			if (val.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g)) return "模板名称包含非法字符，请重新输入";
			return true;
		},
	},
	{
		type: "select", //单选
		name: "template",
		message: "select a framework",
		choices: [
			{ title: "vue3-vite-Antdv4(普系统)", value: "Antdv4Vue3" },
			{ title: "Nuxt3启动框架", value: "Nuxt3" },
			{ title: "chrome扩展(vue3+vite5)", value: "Crx" },
			{ title: "chrome扩展(无封装 + vite + ts)", value: "Crx_NoPackage" },
			{ title: "chrome扩展(无封装 + vite + ts + vue)", value: "Crx_NoPackage_Vue" },
			{ title: "nest后台启动模板（ts）", value: "Nest_Ts" },
			{ title: "node后台启动模板（ts）", value: "Node_Ts" },
		],
	},
];
const getInputInfo = async () => {
	const res = await prompts(promptsOptions);
	if (!res.name || !res.template) return;
	if (res.template === "Crx_NoPackage_Vue") {
		branch = "feature-vue";
	}
	gitClone(`direct:${remoteList[res.template]}#${branch}`, res.name, {
		clone: true,
	});
};

export default getInputInfo;
