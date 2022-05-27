$(document).ready(function(){
const products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];


 
   
    
   
      $("#brand").change(function(){
            var table = document.getElementById("myTable"); 
            table.innerHTML="";
            var row="<tr><th>ID</th><th>Name</th><th>Brand</th><th>OS</th><th>Action</th></tr>";
            for(let i=0;i<products.length;i++){
                if($('#brand').val() == "nobrandvalue"){
                    return;
                } 
               else if($('#brand').val() == products[i].brand && $('#os').val() == products[i].os ){
               // console.log(products[i].brand);
                row += "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td><td> <button type='button'>X</button> </td></tr>";
              }
              else if($('#os').val() == "noosvalue" && $('#brand').val() == products[i].brand){
                row += "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td><td> <button type='button'>X</button></td></tr>";
               }
            }
            $("#myTable").append(row); 
       });
    

   
 
  
 
        $("#os").change(function(){
               var table = document.getElementById("myTable"); 
               table.innerHTML="";
               var row="<tr><th>ID</th><th>Name</th><th>Brand</th><th>OS</th><th>Action</th></tr>";
               for(let i=0;i<products.length;i++){
                    if($('#os').val() == "noosvalue"){
                       return;
                     } 
                    else if($('#os').val() == products[i].os && $('#brand').val() == products[i].brand){
                      row += "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td><td> <button type='button'>X</button></td></tr>";
                    }
                   else if($('#os').val() == products[i].os && $('#brand').val() == "nobrandvalue"){
                    row += "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td><td> <button type='button'>X</button></td></tr>";
                   }
                }
                $("#myTable").append(row); 
            });


        $("#srch").click(function(){
            var table = document.getElementById("myTable"); 
            table.innerHTML="";
            var row="<tr><th>ID</th><th>Name</th><th>Brand</th><th>OS</th></tr>";
            if($('#search').val()==""){
                return ;
            }
            else{
            for(let i=0;i<products.length;i++){
               if($('#search').val() == products[i].name || $('#search').val() == products[i].id){
                   row += "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td></tr>";
                }
              
            }
            $("#myTable").append(row);
        } 
        });
     
      $("#divInner") .on("click","button",function(){
        $(this).parent().parent().hide();
         
      
      });
    
    });


  