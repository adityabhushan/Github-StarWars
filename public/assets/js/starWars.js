(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.responseText;
            //console.log(this.responseText)
            makeTable(JSON.parse(this.responseText))
        }
    };
    xhttp.open("GET", "https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc&page=1&per_page=100", true);
    xhttp.send();

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

    // var scrollTop = $(document).scrollTop();
    // var windowHeight = $(window).height();
    // var bodyHeight = $(document).height() - windowHeight;
    // var scrollPercentage = (scrollTop / bodyHeight);
    // if(scrollPercentage > 0.6) {
    //   alert("I am scrolling")
    // }


    //       $(window).on('scroll', function(){
    //     if( $(window).scrollTop() > $(document).height() - $(window).height() ) {
    //         alert("I am scrolling hahaha");
    //     }
    //     // alert("I am scrolling hahaha");
    // }).scroll();

    window.addEventListener(scroll, function(){
      console.log(window.scrollTop)
    })  



})()