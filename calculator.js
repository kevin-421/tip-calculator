
  let FiveDecimal = 2;
  let TenDecimal = 3;
  let FifteenDecimal = 10;
  let TwentyDecimal = 5;
  let ThirtyDecimal = 6;
  let FortyDecimal = 7; 

let button = document.getElementById("button-submit")
addEventListener("submit", function () {
    event.preventDefault();
    
    let MoneyInput = document.querySelector("input").value;
    
    // Multiplying FiveDecimal by Input value 
   
    
    
    
   /* let Tip = document.getElementById("Tip-select").value
    let FiveTotal = MoneyInput * FiveDecimal;
    let Output = document.querySelector('output').value = FiveTotal */
   /* let Tip = document.getElementById("Tip-select").value
    
    if (TenDecimal === TenDecimal) {
            let TenTotal = (MoneyInput * TenDecimal);
            let Output = document.querySelector('output').value = TenTotal;
        } else if (FifteenDecimal === FifteenDecimal) {
            let FifteenTotal = (MoneyInput * FifteenDecimal);
            let Output = document.querySelector('output').value = FifteenTotal;
        }
     */   

});
       addEventListener('submit',function() {
        event.preventDefault();

        MoneyInput = document.querySelector('input').value;

        let TenTotal = (MoneyInput * TenDecimal);
        let Output = document.querySelector('output').value = TenTotal;
      
           });
    let Fifteen = document.getElementById("Tip-select").value
      addEventListener('submit',function() {
        let FifteenTotal = (MoneyInput * FifteenDecimal);
        let Output = document.querySelector('output').value = FifteenTotal;
      
           });






//let val = MoneyInput.valueOf();
//    let Total = (MoneyInput * FiveDecimal);
//    console.log(Total);
