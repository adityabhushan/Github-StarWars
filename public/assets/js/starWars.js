// (function() {

    var getData = function(page){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                makeTable(JSON.parse(this.responseText))
            }
        };
        var url = "https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc&page="+page+"&per_page=50"
        xhttp.open("GET",url , true);
        xhttp.send();        
    }

    getData(1);
    

    var makeTable = function(responseText) {
        var items = responseText.items
        var tbody = document.querySelector("tbody")
        for (var i = 0; i < items.length; i++) {
            var newRow = tbody.insertRow(tbody.rows.length)
            var repo = newRow.insertCell(0);
            var desc = newRow.insertCell(1);
            var starCount = newRow.insertCell(2);
            newRow.classList.add("trClass");
            repo.classList.add("tdClass");
            desc.classList.add("tdClass");
            starCount.classList.add("tdClass");
            repo.innerHTML = '<a href=' + items[i].html_url + ' target=_blank>' + items[i].name + '</a>';
            var descText = document.createTextNode(items[i].description);
            desc.appendChild(descText);
            var starCountText = document.createTextNode(items[i].stargazers_count);
            starCount.appendChild(starCountText);

        }
    }

    window.onscroll = function(event){
        var scrollTop = window.scrolltop();
        var windowHeight = window.innerHeight;
        var body = document.body
        var html = document.documentElement;
        var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
        var bodyHeight = documentHeight - windowHeight;
        var scrollPercentage = (scrollTop / bodyHeight);

        // if the scroll is more than 90% from the top, load more content.
        if(scrollPercentage > 0.9) {
            console.log("yup it works")
        }
    }
    



// })()