sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("projectevent.controller.View2", {
			onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // this.oRouter.getRoute("RouteView2").attachPatternMatched(this.onLog1,this);
                this.oRouter.attachRoutePatternMatched(this.onLog1,this);
			},

            onLog1:function(oEvent){
                if (oEvent.getParameter("name") !== "RouteView2") {
                    return oEvent.getParameter("name");
                }
            },

			onSplitApp:function(){
				debugger;
				this.oRouter.navTo("RouteView1");
			}
		});
	});
