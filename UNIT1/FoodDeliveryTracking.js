function placeOrder(item,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order Confirmed");
            resolve("order_1");
        },delay)
    });
}
function assignRider(orderId,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Rider Assigned");
            resolve("rider_1");
        },delay)
    });
}
function pickUpOrder(riderId,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("On the way");
            resolve();
        },delay)
    });
}
function deliverOrder(orderId,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Delivered");
            resolve();
        },delay)
    });
}
// async function trackOrder(item,delay){
//     try{
//         const orderId = await placeOrder(item,1000);
//         const riderId = await assignRider(orderId,2000);
//         await pickUpOrder(riderId,2000);
//         await deliverOrder(orderId,3000);
//     }
//     catch(error){
//         console.log("Error:",error);
//     }
//     finally{
//         console.log("Tracking Closed");
//     }
// }
// trackOrder("Pizza",1000);

placeOrder("Pizza",1000)
  .then((orderId)=>{
    return assignRider(orderId,2000);
  })
  .then((riderId)=>{  
    return pickUpOrder(riderId,2000);
  })
  .then((orderId)=>{
    return deliverOrder(orderId,3000);
  })
  .catch((error)=>{
    console.log("Error:",error);
  })
  .finally(()=>{
    console.log("Tracking Closed");
  });