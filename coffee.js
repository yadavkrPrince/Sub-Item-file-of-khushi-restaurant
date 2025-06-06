//function to increment and decrement quantity

   function increment(id) {
    const element = document.getElementById(id);
    let current = parseInt(element.innerText);
    element.innerText = current + 1;
   }

function decrement(id) {
    const element = document.getElementById(id);
    let current = parseInt(element.innerText);
    if(current >1){

        element.innerText = current - 1;
    }
   }


//    checker function to add item in bill 

  document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.my-checker');
        const selectedContainer = document.getElementById('selected-items');

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        const id = this.getAttribute('data-id');
        const name = document.getElementById('coffee-name' + id).innerText;
        const price = document.getElementById('price' + id);
 
        // .replace(/[^\d]/g, ''); this is used to remove rupees character 
        let priceInnumber=parseInt(price.innerText.replace(/[^\d]/g, ''));

        const quantity = document.getElementById('quantity' + id);

        let  quantityInnumber = parseInt(quantity.innerText)
          const itemId = 'selected-item-' + id;


        // cost of item according to number of item 
        const totalprice =  parseInt(priceInnumber * quantityInnumber);


        if (this.checked) {
        // Create a new line item
          const item = document.createElement('div');
            item.id = itemId;

            // ✅ Creating span elements with spacing
            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name';
            nameSpan.textContent = name;

            
            const qtySpan = document.createElement('span');
            qtySpan.className = 'item-qty';
            qtySpan.textContent = quantityInnumber;

            const priceSpan = document.createElement('span');
            priceSpan.className = 'item-price';
            priceSpan.textContent = totalprice;

            item.appendChild(nameSpan);
            item.appendChild(qtySpan);
            item.appendChild(priceSpan);

            selectedContainer.appendChild(item);
          } else {
           
            quantity.innerText="1"
            const oldItem = document.getElementById(itemId);
            if (oldItem) {
              oldItem.remove();
            }
          }
      });
    });
  });

