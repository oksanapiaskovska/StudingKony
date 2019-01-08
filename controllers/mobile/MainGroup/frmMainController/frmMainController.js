define({ 

  btnOnClick: function() {
    const self = this;
  	this.view.btnHello.onClick = function() {
      self.view.btnHello.text = 'Hello';
    };
  },

//   navToMain: function() {
//     const target = new kony.mvc.Navigation('frmMain');
//     target.navigate();
//   }
  
  

 });