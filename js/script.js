

/*=====================jq======================*/

 $(document).ready(function(){


 //ex1
     $('#btn').on("click",function (){

      alert("welcome");

     });

//ex2
     $('#btnh').on("click",function (){

     $('#sh').fadeOut();
     })
     $('#btns').on("click",function (){

     $('#sh').fadeIn();
     })

//ex3
     $('#btnt').on("click",function(){
     	$('#tgl').toggle(1000);
     })

//ex4

     $('.ques').on("click",function(){
       $('.ans').slideToggle(800);

     })

//ex5

});
     

   