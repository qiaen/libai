import { useState } from "react";
import menus from "./menus";
export default function () {
	function getMenu(pathname) {
		let c = undefined;
		for (let item of menus) {
			if (item.child) {
				getMenu(item.child);
			} else {
				if (item.path === pathname) {
					c = {
						...item,
						pathname: item.path,
					};
					break;
				}
			}
		}
		return c;
	}

	return [menus, getMenu];
}
