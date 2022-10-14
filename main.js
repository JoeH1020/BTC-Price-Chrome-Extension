document.addEventListener('DOMContentLoaded', () => {
  let price = 0;
  const display = document.getElementById('btcPrice');




  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then((data) => data.json())
      .then((data) => {
       price = data.bitcoin.usd;
       display.innerHTML = `1 BTC = $${price} USD`
      console.log('test');
    });



});