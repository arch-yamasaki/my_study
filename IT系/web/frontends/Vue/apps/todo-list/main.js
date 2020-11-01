
var app = new Vue({
    el: "#app",
    
    data:{
        newItem: "",
        todos:[]
    },
    
    methods:{
        deleteitem: function(index){
            this.todos.splice(index, 1)
        },
        addItem: function(event){
            var todo = {
                item: this.newItem,
                isDone: false
            }
            if (this.newItem){
                this.todos.push(todo);
            }
            this.newItem = ''
        },
        deleteItem2: function(event){
            console.log("aaaaaaaaaaaaaaaaaaa")
        }
    }
})
