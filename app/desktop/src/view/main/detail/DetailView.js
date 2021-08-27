/*Ext.define('Myapp2.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
      xtype: 'container', 
      style: 'background:white', 
      html: '<div style="padding:10px;font-size:24px;">detailview</div>'
    }
  ]
}) */

Ext.define('Myapp2.view.main.detail.DetailView', {
  extend: 'Ext.grid.Grid',
  title: 'Pokemon',
   
  onHpChange: function(field, value) {
      var store = this.getStore();
      store.clearFilter();
      store.filterBy(function(r1) {
          return r1.data.hp >= value;
      });
  },
   
  plugins: {
    gridfilters: true,
    gridsummaryrow: true
},
 
onClearFilters: function(){
    this.getStore().clearFilter();
},

  items: [{
      xtype: 'toolbar',
      docked: 'top',
      items: [{
          xtype: 'spinnerfield',
          minValue: 30,
          maxValue: 100,
          stepValue: 10,
          value: 30,
          width: 80,
          labelWidth: 30,
          label: 'HP',
          listeners: {
              change: 'up.onHpChange'
          }
      }]
  }],

  store: {
      sorters: ['hp'],
      proxy: {
          type: 'ajax',
          url: 'inventory.json'
      },
      autoLoad: true
  },
  columns: [{
      text: 'Name',
      dataIndex: 'name',
      summary: 'count',
      summaryRenderer: function(grid, context) {
          return (context.records.length + ' Pokemon');
      }
  }, {
      text: 'HP',
      dataIndex: 'hp'
  }, {
      text: 'Attack',
      dataIndex: 'attack'
  }, {
      cell: {
          encodeHtml: false,
          tpl: '<img src="https://docs.sencha.com/resources/json/pokemon/{pokedex}.png" height="24">',
      },
      text: 'Picture',
      dataIndex: 'pokedex',
      flex: 1
  }]
  });
  //Ext.application({
  //name: 'MyApp',
 // mainView: 'MyApp.view.Main'
 // });