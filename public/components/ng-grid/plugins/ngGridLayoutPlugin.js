ngGridLayoutPlugin = function () {
	var self = this;
	this.grid = null;
	this.scope = null;
    this.init = function (scope, grid, services) {
        self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
    };
	
	this.updateGridLayout = function(){
		self.domUtilityService.UpdateGridLayout(self.grid);
		self.grid.configureColumnWidths();
		self.domUtilityService.BuildStyles(self.scope, self.grid);
	};
}