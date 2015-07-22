var total_date=0;

// $(function(){
    $.getJSON('/transaction', function(items) {
       var date = new Date().toJSON().slice(0,10);
       var yes = new Date();
       yes.setDate(yes.getDate() - 1);
       var yes1 = new Date();
       yes1.setDate(yes1.getDate() -2);

        var yessterday = yes.toJSON().slice(0,10);

        document.getElementById("date").innerHTML = date;
        
       items.forEach( function (items){
        if(date === items.date){
          $("#demo-list").prepend("<tr><td class='col-md-1 col-xs-1'><i class='fa fa-"+items.category+"'></i></td><td class='col-md-21 col-xs-19'>"+items.category+"</td><td class='col-md-2 col-xs-4'>"+items.number+"</td></tr>") 
          total_date=items.number+total_date;
        }

          
       });

       document.getElementById("total-date").innerHTML = total_date;


    });

  // });

