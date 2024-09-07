import { Plugin } from "obsidian";
import { use, useSettings, useSettingsTab } from "@ophidian/core";

interface MySettings {

}

export default class MyPlugin extends Plugin {
	use = use.plugin(this);
	settingsTab = useSettingsTab(this);
	settings = useSettings(this, {
		// default settings
		
	} as MySettings, (settings) => {
		// when settings changed

	}, (settings) => {
		// settings first time load

	});

	onload() {
		
	}

	onunload() {

	}

	showSettings() {
		// build settings tab here

	}
}