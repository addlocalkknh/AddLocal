require(["dijit/form/Button", 
         "dojo/dom", 
         "dijit/registry",
         "dijit/dijit",
         "dijit/form/TextBox", 
         "dojox/layout/TableContainer",
         "dijit/layout/ContentPane",
         "dijit/form/ValidationTextBox",
         "dojo/request/xhr",
         "dojo/domReady!"], function(Button, dom, registry,dijit,TextBox,TableContainer,ContentPane,
        		 ValidationTextBox,xhr){

	window.userDetails = new Object();
	
var cP = new ContentPane({
	         style:"height:300px;width=100px;"
		}, "tableConDiv");


var tc = new dojox.layout.TableContainer(
{
  cols: 1,
  customClass:"labelsAndValues",
  "labelWidth": "150"
});


var t1 = new ValidationTextBox({label: "User Name :", required : true});
var t2 = new ValidationTextBox({ label : "Password :",type: "password", required : true });
var t3 = new ValidationTextBox({ label : "Email :", required : true });
var t4 = new ValidationTextBox({ label : "Age :", required : true });

var sb = new Button({
    label: "Sign-up",
    onClick: function(){
    	userDetails["name"]= t1.getValue();
    	userDetails["password"] = t2.getValue();
    	userDetails["emailId"] = t3.getValue();
    	userDetails["age"] = t4.getValue();
    	submitAction();
    	
    }
});

var cb = new Button({
    label: "Clear",
    onClick: function(){
    	t1.setValue("");
    	t2.setValue("");
    	t3.setValue("");
    	t4.setValue("");
    }
});

tc.addChild(t1);
tc.addChild(t2);
tc.addChild(t3);
tc.addChild(t4);

cP.addChild(tc);
cP.addChild(sb);
cP.addChild(cb);
cP.startup()
tc.startup();

});


function submitAction(name,password,email,age){
require(["dojo/request/xhr"], function (xhr){
	
	var name = userDetails["name"];
	var password = userDetails["password"];
	var email = userDetails["emailId"];
	var age = userDetails["age"];
	var url = "/AddLocal/user/add/"+name+"/"+password+"/"+email+"/"+age; 
	
	  xhr(url, {
	    method:"get",
	    headers : {	"Content-Type" : "application/json",
	    			'Accept': 'application/json'},
	  }).then(function(data){

	  }, function(err){

	  }, function(evt){

	  });

	});
}