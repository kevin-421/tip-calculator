  let FiveDecimal = 0.5;
  let TenDecimal = 0.10;
  let FifteenDecimal = 0.15;
  let TwentyDecimal = 0.20;
  let ThirtyDecimal = 0.30;
  let FortyDecimal = 0.40; 

let button = document.getElementById("button-submit")
addEventListener("submit", function () {
    event.preventDefault();
    
    let MoneyInput = document.querySelector("input").value;
    let Tip = document.getElementById("Tip-select")
    
    // Multiplying Decimals by Input value 
   
    if (Tip.value === '5%') {
        let FiveTotal = MoneyInput * FiveDecimal;
        let Output = document.querySelector('output').value = FiveTotal

    }
    if (Tip.value === '10%') {
        let TenTotal = MoneyInput * TenDecimal;
        let Output = document.querySelector('output').value = TenTotal        
    }
    if (Tip.value === '15%') {
        let FifteenTotal = MoneyInput * FifteenDecimal;
        let Output = document.querySelector('output').value = FifteenTotal        
    }
    if (Tip.value === '20%') {
        let TwentyTotal = MoneyInput * TwentyDecimal;
        let Output = document.querySelector('output').value = TwentyTotal        
    }
    if (Tip.value === '30%') {
        let ThirtyTotal = MoneyInput * ThirtyDecimal;
        let Output = document.querySelector('output').value = ThirtyTotal        
    }
    if (Tip.value === '40%') {
        let FortyTotal = MoneyInput * FortyDecimal;
        let Output = document.querySelector('output').value = FortyTotal        
    }
});   