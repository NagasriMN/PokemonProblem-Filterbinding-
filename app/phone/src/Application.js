Ext.define('Myapp2.Application', {
	extend: 'Ext.app.Application',
	name: 'Myapp2',
	requires: [
		'Myapp2.*',
		'Ext.dataview.List',
		'Ext.field.Date',
		'Ext.Video',
		'Ext.carousel.Carousel',
		'Ext.data.TreeStore',
		'Ext.layout.Center'
	],
	defaultToken: 'personnelview',

	launch: function () {
		Ext.getBody().removeCls('launching');
		var elem = document.getElementById("splash");
		elem.parentNode.removeChild(elem);

		Ext.Viewport.add([{ xtype: 'mainview'}]);
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
