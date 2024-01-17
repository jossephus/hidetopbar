/**
 * This file is part of Hide Top Bar
 *
 * Copyright 2020 Thomas Vogt
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

//const Main = imports.ui.main;
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { PanelVisibilityManager } from "./panelVisibilityManager.js";
import { DEBUG } from "./convenience.js";

let mSettings = null;
let mPVManager = null;
let monitorIndex = null;


import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class ExampleExtension extends Extension {
    constructor(metadata) {
        super(metadata);
        // DO NOT create objects, connect signals or add main loop sources here
    }

    enable() {
        // Create objects, connect signals, create main loop sources, etc.
        DEBUG("enable()");
        this._settings = this.getSettings();
        monitorIndex = Main.layoutManager.primaryIndex;
        mPVManager = new PanelVisibilityManager(mSettings, monitorIndex);
    }

    disable() {
        // Destroy objects, disconnect signals, remove main loop sources, etc.
        DEBUG("disable()");
        mPVManager.destroy();
        this._settings = null;

        mPVManager = null;
    }
}

//function init() { }

//function enable() {
    //DEBUG("enable()");
    //mSettings = Extension.getSettings();
    //monitorIndex = Main.layoutManager.primaryIndex;
    //mPVManager = new PanelVisibilityManager(mSettings, monitorIndex);
//}

//function disable() {
//}
