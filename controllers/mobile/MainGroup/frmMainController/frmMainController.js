define({ 

  navToForm: function(formName, data) {
    var target = new kony.mvc.Navigation(formName);
    if (data) {
      target.navigate(data);
    } else {
      target.navigate();
    }	
  },



  onPreShow: function() {
    this.view.btnHello.onClick = this.navToForm.bind(this, 'frmTest');

    this.view.btnHello.text = 'Hi there!';
    this.initActions();
  },

  initActions: function() {
    this.view.btnHello.onClick = this.onClick.bind(this);
  },
	
  onClick: function() {
    
  },


});