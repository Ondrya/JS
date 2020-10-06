/*
  how filter html table with js/qjuery by multiple fields - for me it works fine

  table has Id "dataTables"
  filter input has class "filter"
  filter input placed in first tr in th
*/

  $("#dataTables :input").on("keyup", function(){
        var inputs = [];
        $("#dataTables :input").each(function() {
            if ($(this).hasClass('filter')){
                inputs.push( [ $(this).parent().index() , $(this).val().toUpperCase() ] );
            }
        })
        table = document.getElementById("dataTables");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            var inputs_filter=[];
            inputs.forEach(el => {
                inputs_filter.push(tr[i].getElementsByTagName("td")[el[0]].textContent.toUpperCase().indexOf(el[1]) > -1);    
            });
            if (inputs_filter.reduce( (a,b) => a * b )) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    });
