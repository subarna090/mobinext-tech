$("#ket").click(function(){
    $.getJSON("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=76597ba4a22e4887821513ec9099125e", function(result){
       
        console.log(result);
        var arr=result.articles;
        //var len=arr.length;
        //var title=result.articles[0].title+" "+result.source+"  "+len;
       //document.getElementById("news").innerHTML=title;
       
       for(var i=0;i<arr.length;i++)
           {
               var article=arr[i];
               $("#here").append('<li><img src="'+article.urlToImage+'"><br><a href="'+article.url+'">'+article.title+'</a></li>');
           }
        
    });
});

