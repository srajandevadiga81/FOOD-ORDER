document.getElementById('foodOrderForm')
.addEventListener('submit',function(event){
.preventDefault();

    const name=document.getElementById('name').value;
    const food=document.getElementById('food').value;
    const quantity=document.getElementById('quantity').value;
    if(name && food && quantity){
        document.getElementById('orderMessage').classList.remove('hidden');
        console.log(OrderDetails: Name - $ (name),Food - $ (food), Quantity - $ (quantity)) ;
        document.getElementById('foodOrderForm').reset();
    }
});