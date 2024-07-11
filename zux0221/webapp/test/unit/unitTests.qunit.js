/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync5/zux0221/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});