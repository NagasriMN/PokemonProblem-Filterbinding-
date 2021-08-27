const grid1= Ext.define('MyApp.view.Main', {
    extend: 'Ext.grid.Grid',
    title: 'Reykjavik Flight Departures',
 
    grouped: true,
 
    columns: [{
        xtype: 'datecolumn',
        text: 'Date',
        dataIndex: 'date',
        format: 'M j, Y',
        width: 120
    }, {
        xtype: 'column', // This is the default column xtype
        text: 'Airline',
        dataIndex: 'airline',
        width: 200
    }, {
        text: 'To',
        dataIndex: 'to',
        width: 200
    }, {
        text: 'Scheduled',
        dataIndex: 'plannedDeparture',
        align: 'center'
    }, {
        text: 'Status',
        dataIndex: 'realDeparture',
        flex: 1
    }],
 
    store: {
        type: 'store',
        autoLoad: true,
        fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
        proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
    }
    });
   

Ext.define('Myapp2.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: grid1
});
