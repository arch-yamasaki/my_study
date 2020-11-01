var app = new Vue({
    el: "#app",
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {
        keyword: function(newKeyword, oldKeyword){
            // console.log(newKeyword)
            this.message = "waiting for you to stop typing ..."
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        // this.keyword = 'JavaScript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function(){
            if (this.keyword === '') {
                this.items = null
                this.message = ''
                return
            }
            this.message = 'Loading...'
            var vm = this
            var params = {page: 1, per_page: 20, query: this.keyword}
            axios.get('https://qiita.com/api/v2/items', {params} )
                .then(res => {
                    console.log("1", res.data)
                    vm.items = res.data
                    console.log("vm.items")
                    console.log(vm.items)
                }).catch(error => {
                    vm.message = "Error!" + error
                }).finally(() => {
                    vm.message = 'Results'
                })
        }
    }
})