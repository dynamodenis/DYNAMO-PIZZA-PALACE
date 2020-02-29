// BACK END
// This is the order constructor that will take persons order
function Order(type,size,crust,toppings){
    this.pizzaType=type;
    this.pizzaSize=size;
    this.pizzaCrust=crust;
    this.pizzaToppings=toppings;
}
var pizza; var size; var toppings; var crust;
var large;
var medium;
var small;
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
    $('.pizzaType').change(function(){
        var pizza=parseInt($(this).val());
        $(".pizzaPrice").html(pizza);
        console.log(pizza);
     });
    //  This receives the size of the pizza
    $(".pizzaSize").change(function(){
        var size=parseInt($(this).val());
        console.log(size);
    });
    //This receives the toppings
    $(".pizzaToppings").change(function(){
        var toppings=parseInt($(this).val());
        console.log(toppings);
    });
    $(".pizzaCrust").change(function(){
        var crust=parseInt($(this).val());
        console.log(crust);
    })
});
