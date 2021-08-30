class Storage{
      
      constructor(){
            this.store = window.localStorage
      }

      addListToStorage(column){
            this.store.setItem(`${column.id}`, JSON.stringify(column))
      }

      seeStorage(){
            console.log(this.store)
      }
}