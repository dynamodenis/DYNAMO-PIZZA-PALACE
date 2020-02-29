// BACK END
// This is the order constructor that will take persons order

function Order(type,size,crust,toppings,total){
    this.pizzaType=type;
    this.pizzaSize=size;
    this.pizzaCrust=crust;
    this.pizzaToppings=toppings;
    this.total=total;
}
var pizza; var size; var toppings; var crust;
var large;
var medium;
var small;
var total=0;
var totalOrder=0;
// Create  a function for everypizza
function chickenMushroom(){
    large=1300;
    medium=900;
    small=650;
}
function hawaiian(){
    large=1250;
    medium=800;
    small=550;
}
// total prototype.


// USER INTERFACE
// FRONT END
$(document).ready(function(){
    // // This recieves the data value of the type of pizza;
    $('.confirmOrder').click(function(event){
        event.preventDefault();
      var pizza=parseInt($('.pizzaType option:selected').val());
      var size=parseInt($('.pizzaSize option:selected').val());
      var toppings=parseInt($('.pizzaToppings option:selected').val());
      var crust=parseInt($('.pizzaCrust option:selected').val());
      
      total= size+toppings+crust;
      console.log(total);
        // after confirming order the values will hold no data untill you input
      $('.pizzaType').val("");
      $('.pizzaSize').val("");
      $(".pizzaToppings").val("");
      $('.pizzaCrust').val("");

      
    
    //   append the total amount to the div
    $('.total').append(total);
    });
});
