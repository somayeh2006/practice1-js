let order = [
  { 
  price: 215, paid: true, delivered: false,
  customertype: "normal"
  },
    { 
  price: 250, paid: true, delivered: true,
  customertype: "vip"
  },
    { 
  price: 190, paid: true, delivered: false,
  customertype: "normal"
  },
    { 
  price: 255, paid: true, delivered: true,
  customertype: "normal"
  },
    { 
  price: 200, paid: true, delivered: false,
  customertype: "vip"
  },
  ];
  
  let stock= 15 ;
  let freeshippinglimit = 200;
  let c =0;
  let send =0;
  let notsend =0;

  while( c < order.length ){
  if( order[c].price > 0 && order[c].paid === true && order[c].delivered === false ){
      send++;
    stock -=1;
    if(stock <= 0){
      break;
    
    }
    if(order[c].customertype ==="vip"){
      console.log("number of order that is sent" +"  "+ c);
    }else if(order[c].customertype ==="normal" && order[c].price >= freeshippinglimit){
      console.log("number of order that is sent" +"  "+ c);
    }
  }else{
    notsend++;
  }
    c++;
  }
    
console.log("numbers of stock" + " "+stock);
console.log("numbers of orders that are Registered "+"  " +send );
console.log("numbers of orders that are not Registered" +"  " + notsend);
 
function orders (price, paid, delivered){
  let check;
    if(price > 0 && paid === true && delivered === false ){
      check = true;
    }else{
      check = false;
    }
      return check;
  }
let result = orders(25,true, false);
console.log(result);