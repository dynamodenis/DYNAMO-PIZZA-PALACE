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

// add an order prototype.

Order.prototype.addOrder=function(){
    return this.pizzaType +","+ this.pizzaSize +","+ this.pizzaCrust +"," + this.pizzaToppings + "," + this.total;
}

// USER INTERFACE
// FRONT END
$(document).ready(function(){
    $('.confirmOrder').click(function(event){
        event.preventDefault(); 

     // This recieves the data value of the type of pizza;
      var pizza=$('.pizzaType option:selected').val();
      var size=parseInt($('.pizzaSize option:selected').val());
      var toppings=parseInt($('.pizzaToppings option:selected').val());
      var crust=parseInt($('.pizzaCrust option:selected').val());

       // after confirming order the values will hold no data untill you input
       $('.pizzaType').val("");
       $('.pizzaSize').val("");
       $(".pizzaToppings").val("");
       $('.pizzaCrust').val("");  
        
     //   Validating the pizza form
        if(!pizza || !size || !toppings || !crust){
            alert("Failed1! Please choose a pizza.")
        }else{
        }
    
     //   append the total amount to the div
        $('.pName').append(pizza);
        $('.pSize').append(size);
        $('.pToppings').append(toppings);
        $('.pCrust').append(crust);
        $('.total').append(total);
    
        // displays the pizza name , size ,crust and toppings when confirm button is clicked
        $('.pName').show();
        $('.pSize').show();
        $('.pToppings').show();
        $('.pCrust').show();
    

        var orderNumber=0;
        orderNumber= +1;
        total= size+toppings+crust;

        // Use constructor to retrieve  pizza order
        // Use the constructor to append the order on a table

        var order= new Order(pizza,size,toppings,crust,total);


        // Append the new order to the table order
        $('.orderNumber').append(orderNumber);
        $('.orderName').append(order.pizzaType);
        $('.orderSize').append(order.pizzaSize);
        $('.orderToppings').append(order.pizzaToppings);
        $('.orderCrust').append(order.pizzaCrust);
        $('.orderTotal').append(order.total);
    });

    // Home delivery option
    var user;
    var number;
    var location;
    $('.homeDelivery').click(function(){
        // User delivery infomation
        $('.contactForm').slideToggle(1000);
         user=$('.userName').val();
         number=$('.userNumber').val();
         location=$('.userLocation').val();
         console.log(user,number,location)
    });

    // Home Delivery Validation form
    $('.confirmHomeDelivery').click(function(){
         user=$('.userName').val();
         number=$('.userNumber').val();
         location=$('.userLocation').val();

        if(!user && !number && !location){
            alert("Home Delivery Filed! Please fill the form.")
        }
        else{
            alert("Home Delivery Confirmed!");
        }
    });

});

