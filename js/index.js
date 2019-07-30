

//const algoliasearch = require('algoliasearch');
//const dotenv = require('dotenv');
//const firebase = require('firebase');
//
//// load values from the .env file in this directory into process.env
//dotenv.load();
//
//// configure algolia
//const algolia = algoliasearch(
//  process.env.ALGOLIA_APP_ID,
//  process.env.ALGOLIA_API_KEY
//);
//const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);
//

//// Get all contacts from Firebase
//database.ref('/contacts').once('value', contacts => {
//  // Build an array of all records to push to Algolia
//  const records = [];
//  contacts.forEach(contact => {
//    // get the key and data from the snapshot
//    const childKey = contact.key;
//    const childData = contact.val();
//    // We set the Algolia objectID as the Firebase .key
//    childData.objectID = childKey;
//    // Add object for indexing
//    records.push(childData);
//  });
//
//  // Add or update new objects
//  index
//    .saveObjects(records)
//    .then(() => {
//      console.log('Contacts imported into Algolia');
//    })
//    .catch(error => {
//      console.error('Error when importing contact into Algolia', error);
//      process.exit(1);
//    });
//});


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD__0sfP-c4tCStFArKsl3MyR2Y8WjRFP8",
    authDomain: "fantasy-crypto.firebaseapp.com",
    databaseURL: "https://fantasy-crypto.firebaseio.com",
    projectId: "fantasy-crypto",
    storageBucket: "fantasy-crypto.appspot.com",
    messagingSenderId: "1066538764682"
  };
firebase.initializeApp(config);

// New Firebase
var resourceDB = firebase.database().ref('resource-tip');
var resourceRef = resourceDB.orderByChild('tip');//limit to last

// orderByChild('tip')
//function sorting() {
//    x = document.getElement("text menu")
//}
//
//ref.orderByKey().on("child_added", function(snapshot) {
//  console.log(snapshot.key);
//});

// Form as a JSON
$(document).ready(function() {
    var count = 0;

   // Check for change & list Items
resourceRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // Get the Key & Child Data
    var key = childSnapshot.key;
    var tipsArray = childSnapshot.val();
      var $container = $('#container');
      for (var prop in tipsArray){
        var str = '';
        var tipTime = moment.utc(tipsArray.tiptime).local().startOf('hour').fromNow();
          
              str += '<li style="padding-bottom: 14px"><a style=" display:block; text-decoration: none;" href=" ' + tipsArray.url + '"' +    '<div class="ui card"> <div class="content"> <div class="header" style="font-weight: bold; font-size: 1.28571429em; margin-top: -0.21Z425em; margin-bottom: 0.1em; line-height: 1.28571429em; color: rgba(0, 0, 0, 0.85) !important" >' +
      tipsArray.tip + ' </div> <p style="font-size: 0.6em;" class="ui  blue  basic label">' + tipsArray.category + '</p> <p style="font-size: 0.6em;" class="ui  blue  basic label">' + tipTime + '</p> <div class="meta"> <p class="description">' + tipsArray.description + '</p></div></div></a></div></li>';  
//    
//              str.attr('link': tipsArray.url, 'title': tipsArray.tip, 'category': tipsArray.url, 'description': tipsArray.description);
        }
    
      // Create the list in HTML
      $('.list').append(str);
        count = ++count;
    });
  });
//var codepenList = new List('test-list', { 
//  valueNames: ['name', 'attr']
//});
//    
   window.onload = function() {
      document.getElementById("demo").innerHTML=$list.length;
}  
      window.onload = function() {
      document.getElementById("count").innerHTML=count;
}  
    
    
   
    
      var aList = new List('origlist', { 
  valueNames: ['name', 'attr']
});
  var monkeyList = new List('mylist', { 
  valueNames: ['content', 'header', 'label', 'description']
});
    
  // Add a New Item
  $("#resourceformTip").submit(function(event) {
      event.preventDefault();
    
    // Get the form data
    resourceDB.push({
      'category': $('select#category').val(),
      'tip': $('textarea#tip').val(),
      'url' : $('textarea#url').val(),
      'description' : $('textarea#description').val(),
      'tiptime': Date.now()
    });

    console.log("sent");
    resourceformTip.reset();

  });
});



//$('.ui.dropdown').dropdown({
//  allowAdditions: true,
//}); 



//    trying to do sorting by A-Z
//     writer choice, number of likes 
//    ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
//  console.log(snapshot.key);
//});
//});

//$.expr[':'].info = function(a,i,m){  
//  return (a.getAttribute('data-icon')
//};

$('.ui.dropdown')
  .dropdown()
;


var $search = $('#search');
$search.on('keyup', function () {
  var filter = $(this).val(); 
    var count = 0;
  if (filter) {
    var $matches = $($container).find('li:icon(' + filter + ')');   
    $('ul', $container).not($matches).hide();
    $matches.show();    
  }
  else {
    $('li', $container).show();
  }  
  
  return false;
});