sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"projectevent/controller/de"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	de) {
		"use strict";

		return Controller.extend("projectevent.controller.View1", {
			onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			},

			onNext:function(){
				debugger;
				this.oRouter.navTo("RouteView2");

			},

			/**
			 * @override
			 */
			onAfterRendering: function() {
				debugger;
				alert("first");
				
			},

			onBeforeRendering:function(){
				debugger;
				alert("Second");
			},

			
		});
	});
