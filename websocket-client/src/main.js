/*
 *     Copyright (C) 2010-2016 Marvell International Ltd.
 *     Copyright (C) 2002-2010 Kinoma, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */
import THEME from 'mobile/theme';
import CONTROL from 'mobile/control';

/* Skins and styles */


/* Handlers */

/* UI templates */

	left: 0, right: 0, height: 44, active: true, skin: itemSkin, 
	Behavior: class extends SCREEN.ListItemBehavior {
		onCreate(container, data) {
	}, 
	contents: [
		}),
}));

	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, 
	contents: [
			contents: [
					Behavior: class extends Behavior {
						onCreate(column, data) {
					},
				}),
		}),
}));

	left: 0, right: 0, height: 44, bottom: 0, active: true,
	 contents: [
			left: 0, right: 10, top: 5, bottom: 5, skin: THEME.fieldScrollerSkin, 
			contents: [
					left: 0, right: 30, top: 0, bottom: 0, active: true, 
					Behavior: CONTROL.FieldScrollerBehavior, clip: true, 
					contents: [
							left: 0, top: 0, bottom: 0, skin: THEME.fieldLabelSkin, style: THEME.fieldLabelStyle,
							editable: true, string: $.value,  
							Behavior: class extends CONTROL.FieldLabelBehavior {
						}),
				}),
		}),
			right: 0, top: 0, bottom: 0, active: true, style: THEME.dialogLabelStyle, string: 'Send',
			Behavior: class extends CONTROL.ButtonBehavior {
		}),
}));

class ChatRoomBehavior extends Behavior {

	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, 
	Behavior: ChatRoomBehavior, 
	contents: [
			left: 0, right: 0, top: 0, height: 44, skin: itemSkin, 
		}),
			left: 0, right: 0, top: 44, bottom: 44, active: true, clip: true, 
			contents: [
		}),
}));

	constructor(discovery) {
		this.url = undefined;
		this.conn = undefined;

/* Application set-up */
class ApplicationBehavior extends Behavior {
		application.add( new MainContainer({}) );