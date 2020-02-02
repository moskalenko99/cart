$('document').ready(function(){
    loadGoods();
});

var sum = 0;
var massPrice = [];

function loadGoods() {
    var out = '';
    
    $.post( "/cart", function( data ) {

        var i = 0;
        
        out+='<form method="GET" action="/shipping">';
        data.forEach(function(item){
    
            out+='<div class="single-goods" i="' + i + '">';
            out+='<img src="'+item.photo+'" width="128" height="128">';
            out+='<div class="text"><h3>'+item.title+'</h3>';
            out+='<p>'+item.text+'</p></div>';
            out+='<div class="count"><div class="minus"><i class="far fa-minus-square"></i></div><input class="count-product" disabled="disabled" type="number" value="1"><div class="plus"><i class="far fa-plus-square"></i></div></div>';
            out+='<input class="price" disabled="disabled" type="number" value="' + item.price + '">';
            out+='<i class="image far fa-trash-alt"></i>';
            out+='</div>';
            sum += item.price;
            massPrice[i] = item.price;
            i++;
        });  

        out+='<div class="buy">';
        out+='<input name="sum" class="sum-price" disabled="disabled" type="number" value="' + sum + '">';
        out+='<button type="submit" class="btn-buy">BUY</button>';
        out+='</div>';
        out+='</form>';

        $('#goods').html(out);
        
        $('.image').click(function (){  
            $(this).parent().remove();
            
             $(".sum-price")[0].value -= $(this).parent().children()[3].value;
        });

        $('.minus').click(function(data){
            let countProduct = $(this).parent().children()[1].value;
            if(!(countProduct === "1")){
                let div = $(this).parent().parent()[0];
                let i = $(div).attr("i");
                
                $(div).children()[3].value = $(div).children()[3].value - +massPrice[i];
                $(".sum-price")[0].value = +$(".sum-price")[0].value - +massPrice[i];
                $(this).parent().children()[1].value--;                
            }
        });

        $('.plus').click(function(data){
            let countProduct = $(this).parent().children()[1].value;
            if(!(countProduct === "50")){
                let div = $(this).parent().parent()[0];
                let i = $(div).attr("i");
                
                $(div).children()[3].value = +$(div).children()[3].value + +massPrice[i];
                $(".sum-price")[0].value = +$(".sum-price")[0].value + +massPrice[i];
                $(this).parent().children()[1].value++;                
            }
        });
    });

    // $.getJSON('goods.json', function (data) {
    //     var out = '';
    //     var i = 0;

    //     out+='<form method="GET" action="../shipping">';
    //     for (var key in data){
    //         out+='<div class="single-goods" i="' + i + '">';
    //         out+='<img src="'+data[key]['image']+'">';
    //         out+='<div class="text"><h3>'+data[key]['name']+'</h3>';
    //         out+='<p>'+data[key]['description']+'</p></div>';
    //         out+='<div class="count"><div class="minus"><i class="far fa-minus-square"></i></div><input class="count-product" disabled="disabled" type="number" value="1"><div class="plus"><i class="far fa-plus-square"></i></div></div>';
    //         out+='<input class="price" disabled="disabled" type="number" value="' + data[key]['cost']+ '">';
    //         out+='<i class="image far fa-trash-alt"></i>';
    //         out+='</div>';
    //         sum += data[key]['cost'];
    //         massPrice[i] = data[key]['cost'];
    //         i++;
            
    //     }
    //     out+='<div class="buy">';
    //     out+='<input name="sum" class="sum-price" disabled="disabled" type="number" value="' + sum + '">';
    //     out+='<button class="btn-buy">BUY</button>';
    //     out+='</div>';
    //     out+='</form>';
            
        // $('button.add-to-cart').on('click', addToCart);
        
    }


// function minusItem(param){        
//     var a = $(".count-product");
//     if(!(a[param].value === "1")){
//         $(".price")[param].value = $(".price")[param].value - +massPrice[param];
//         $(".sum-price")[0].value = +$(".sum-price")[0].value - +massPrice[param];
//         a[param].value--;
//     }
// }

// function plusItem(param){
//     var a = $(".count-product");
//     if(!(a[param].value === "50")){
//         a[param].value++;
//         $(".price")[param].value = +$(".price")[param].value + +massPrice[param];
//         $(".sum-price")[0].value = +$(".sum-price")[0].value + +massPrice[param];
        
//     }
// }

// function addToCart() {
//     //добавляем товар в корзину
//     var articul = $(this).attr('data-art');
//     if (cart[articul]!=undefined) {
//         cart[articul]++;
//     }
//     else {
//         cart[articul] = 1;
//     }

//     console.log(cart);


// }
