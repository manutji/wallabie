

// $(function(){
    $.getJSON('/transaction', function(datas) { 
      for( a in datas){
        var sum = 0;
        console.log(a);
        for(var i=0; i<datas[a].length; i++){
          if(datas[a][i].category === "Income"){
            sum += datas[a][i].number;
          }else{
            sum -= datas[a][i].number;
          } 
          console.log(datas[a][i]);
        }
        $("#his").append("<div class='panel-heading'><span id='date'>"+a+"</span><div class='pull-right'>Total"+" "+sum+"<span id='total-date'></span></div></div>")
        console.log(sum);
        for(var i=0; i<datas[a].length; i++){
          $("#his").append("<table id='demo-list' class='table'><tr><td class='col-md-1 col-xs-1'><i class='fa fa-"+datas[a][i].category+"'></i></td><td class='col-md-21 col-xs-19'>"+datas[a][i].category+"</td><td class='col-md-2 col-xs-4'>"+datas[a][i].number+"</td></tr></table>") 
        }
      }
     
      
       // datas.forEach( function (datas){
       //    console.log(datas);
       //    // $("#demo-list").append("<tr><td class='col-md-1 col-xs-1'><i class='fa fa-"+items.category+"'></i></td><td class='col-md-21 col-xs-19'>"+items.category+"</td><td class='col-md-2 col-xs-4'>"+items.number+"</td></tr>") 
       //    // total_date=items.number+total_date;
       // });
    });

  // });

