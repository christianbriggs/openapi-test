if($oAuth_Token!=''){

  var github = new Github({
	  token: $oAuth_Token,
	  auth: "oauth"
	  });
            
		var repo = github.getRepo('kinlane', 'email');
  
		repo.read('master','data/buildingblockcategories.json',function(err, data){    
		  $Data = jQuery.parseJSON(data);
		  if($Data!==null){
			  // We Have Access
			  }
			else{
			  // Do Not Have Access
			  }
	  });
	}