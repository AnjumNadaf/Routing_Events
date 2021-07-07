sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("projectevent.controller.SplitApp", {
			onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			}

			// onNext:function(){
			// 	debugger;
			// 	this.oRouter.navTo("RouteView2");

			// }
		});
	});
