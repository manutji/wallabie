

// $(function(){
    $.getJSON('/transaction', function(datas) {
      var arrexpend = []; 
      var arrincome = [];
      
      for( a in datas){
        var income = 0;
        var expend = 0;
        for(var i=0; i<datas[a].length; i++){
          if(datas[a][i].category === "Income"){
            income += datas[a][i].number;
          }else{
            expend += datas[a][i].number;
          }
        }
        if(income != 0){
          arrincome.push(income);
        }
        if(expend != 0){
          arrexpend.push(expend);
        }
        var allincome = 0;
        var allexpend = 0;
        for(var i=0; i<arrincome.length; i++){
          allincome += parseInt(arrincome[i]);
        }
        for(var i=0; i<arrexpend.length; i++){
          allexpend += parseInt(arrexpend[i]);
        }
        var allsum = allincome - allexpend;
        

       
        $("#his").append("<div class='panel-heading'><span id='date'>"+a+"</span><div class='pull-right'>Total"+" "+income+"<span id='total-date'></span></div></div>")
        for(var i=0; i<datas[a].length; i++){
          if(datas[a][i].category === "Income"){
          $("#his").append("<table id='demo-list' class='table'><tr><td class='col-md-1 col-xs-1'><i class='fa fa-"+datas[a][i].category+"'></i></td><td class='col-md-21 col-xs-19'>"+datas[a][i].category+"</td><td class='col-md-2 col-xs-4'>"+datas[a][i].number+"</td></tr></table>") 
        }
        else
           $("#his").append("<table id='demo-list' class='table hide'><tr><td class='col-md-1 col-xs-1'><i class='fa fa-"+datas[a][i].category+"'></i></td><td class='col-md-21 col-xs-19'>"+datas[a][i].category+"</td><td class='col-md-2 col-xs-4'>"+datas[a][i].number+"</td></tr></table>") 
        }
      }
      
        $("#allsum").append(allsum);
        $("#allsumincome").append(allincome); 
       // datas.forEach( function (datas){
       //    console.log(datas);
       //    // $("#demo-list").append("<tr><td class='col-md-1 col-xs-1'><i class='fa fa-"+items.category+"'></i></td><td class='col-md-21 col-xs-19'>"+items.category+"</td><td class='col-md-2 col-xs-4'>"+items.number+"</td></tr>") 
       //    // total_date=items.number+total_date;
       // });
    });

  // });

