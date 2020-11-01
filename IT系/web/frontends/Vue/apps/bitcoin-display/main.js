var app = new Vue({
    el: '#app',
    data: {
        bpi : null,
        hasError : false,
        loading : true
    },
    mounted: function(){
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
          .then(res => {
						// current_bpi = res.data.bpi;
	          // console.log(current_bpi);
            console.log(res.data.bpi);
          	this.bpi =  res.data.bpi;
          }).catch(error =>{
	          console.log(error);
  	        this.hasError = true
          }).finally(() =>{
          	this.loading = false
          })
    },
    filters:{
    	currencyDecimal(value){
	      return value.toFixed(2);
      }
    }
})