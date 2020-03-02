// BACK END
// This is the order constructor that will take persons order

function Order(type,size,crust,toppings,total){
    this.pizzaType=type;
    this.pizzaSize=size;
    this.pizzaCrust=crust;
    this.pizzaToppings=toppings;
    this.total=total;
    this.address=[];
}

function Address(user,number,location){
    this.userName=user;
    this.userNumber=number;
    this.userLocation=location;
}

var pizza; var size; var toppings; var crust;
var large;
var medium;
var small;
var total=0;
var totalOrder=0;
var order;
var newAddress;
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
        $('.total').html(total);
        // Use constructor to retrieve  pizza order
        // Use the constructor to append the order on a table

        order= new Order(pizza,size,toppings,crust,total);


        // Append the new order to the table order
        $('.orderNumber').append(orderNumber);
        $('.orderName').append(order.pizzaType);
        $('.orderSize').append(order.pizzaSize);
        $('.orderToppings').append(order.pizzaToppings);
        $('.orderCrust').append(order.pizzaCrust);
        $('.orderTotal').append(order.total);
    });

    // ADD ANOTHER PIZZA
    $('.addPizza').click(function(){
        $('.orderForm').append('<div class="row orderSpace">'+
                                        '<div class="col-md-4">'+
                                            '<label for="type">Type of Pizza</label>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                            '<form action="">'+
                                                '<select name="pizza" class="pizzaType" style="width: 300px;">'+
                                                    '<option  value="Chicken Mushroom">Chicken Mushroom Pizza - Ksh.1300</option>'+
                                                    '<option value="Hawaiian">Hawaiian Pizza - Ksh.1250</option>'+
                                                    '<option value="Chicken Tikka">Chicken Tikka Pizza - Ksh.1100</option>'+
                                                    '<option value="Vegeterian Tikka">Vegeterian Tikka Pizza - Ksh.1150</option>'+
                                                    '<option value="Pepperoni">Beef Pepperoni Pizza - Ksh.1300</option>'+
                                                    '<option value="Italian">Italian Pizza - Ksh.1400</option>'+
                                                '</select>'+
                                            '</form>'+
                                        '</div>'+
                                        '<div class="col-md-4 ">'+
                                        '<p class="pName border border-danger rounded-lg"></p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row orderSpace">'+
                                        '<div class="col-md-4">'+
                                            '<label for="type">Size of Pizza</label>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                            '<form action="">'+
                                                '<select name="size" class="pizzaSize" style="width: 300px;">'+
                                                    '<option value=1300 class="large">Large</option>'+
                                                    '<option value=800 class="medium">Medium</option>'+
                                                    '<option value=550 class="small">Small</option>'+
                                                '</select>'+
                                            '</form>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                        '<p class="pSize border border-danger rounded-lg"></p>'+ 
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row orderSpace">'+
                                        '<div class="col-md-4">'+
                                            '<label for="type">Type of Toppings</label>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                            '<form action="">'+
                                                '<select name="toppings" class="pizzaToppings" style="width: 300px;">'+
                                                    '<option value="100" class="mushroom">Mushroom</option>'+
                                                    '<option value="100" class="bacon">Bacon</option>'+
                                                    '<option value="100" class="bacon">Sausage</option>'+
                                                    '<option value="100" class="chese">Cheese</option>'+
                                                '</select>'+
                                            '</form>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                            '<p class="pToppings border border-danger rounded-lg"></p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row orderSpace">'+
                                        '<div class="col-md-4">'+
                                            '<label for="type">Type of Crust</label>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                            '<form action="">'+
                                                '<select name="crust" class="pizzaCrust" style="width: 300px;">'+
                                                    '<option value=50 class="stuffed">Stuffed Crust</option>'+
                                                    '<option value=100 class="thinCrispy">Thin Crispy Crust</option>'+
                                                    '<option value=150 class="neopolitan">Neopolitan Crust</option>'+
                                                    '<option value=100 class="gluteen">Gluteen Free Crust</option>'+
                                                '</select>'+
                                            '</form>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                                    '<p class="pCrust border border-danger rounded-lg"></p>'+
                                                '</div>'+
                                        '</div>'
                                        );
        
    });

    // Home delivery option
    var user;
    var number;
    var location;
    var order;
    var deliveryTotal;
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
            $('.total').html(total);
            alert("Home Delivery Filed! Please fill the form.");
        }
        else{
            // Add home delivery charges to the original amount after the confrmed is true
            deliveryTotal=total+200;
            $('.total').html(deliveryTotal);
            alert("Home Delivery Confirmed!");
        }
        // Create a new address using ADDRESS constructor
        newAddress=new Address(user,number,location);
        
        // Push the address to the Order constuctor on the address empty array property
        order.address.push(newAddress);
        // console.log(order);
    
        $("#submit").click(function(event){
            event.preventDefault();
            if(user && number && location){
            alert(newAddress.userName +','+' '+'we have received your order of' +','+' '+ order.pizzaType +'and will be sent to'+' '+ newAddress.userLocation+'.'+' '+'Thank You!');
            }
            else if(!user && !number && !location){
                alert( 'Your' +' '+order.pizzaType+' '+'has been recorded. Thank You!')
            }
        });
    });

});

