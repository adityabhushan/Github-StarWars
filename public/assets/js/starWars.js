(function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      this.responseText;
      //console.log(this.responseText)
      makeTable(JSON.parse(this.responseText))
    }
  };
  xhttp.open("GET", "https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc", true);
  xhttp.send();

  var makeTable = function(responseText){
    var items = responseText.items
    var tbody = document.querySelector("tbody")
    for(var i  = 0; i < items.length; i++){
      var newRow = tbody.insertRow(tbody.rows.length)
      var repo = newRow.insertCell(0);
      var desc = newRow.insertCell(1);
      var starCount = newRow.insertCell(2);
      newRow.classList.add("trClass");
      repo.classList.add("tdClass");
      desc.classList.add("tdClass");
      starCount.classList.add("tdClass");
      console.log("repo["+i+"] name is "+items[i].name)
      //var repoText  = document.createTextNode('<a href='+items[i].html_url+'>'+items[i].name+'</a>');
      repo.innerHTML = '<a href='+items[i].html_url+' target=_blank>'+items[i].name+'</a>';
      var descText  = document.createTextNode(items[i].description);
      desc.appendChild(descText);
      var starCountText  = document.createTextNode(items[i].stargazers_count);
      starCount.appendChild(starCountText);

    }
  }
})()
