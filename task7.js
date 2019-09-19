/*helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
helper.page_count # should == 2
helper.item_count # should == 6
helper.page_item_count(0)  # should == 4
helper.page_item_count(1) # last page - should == 2
helper.page_item_count(2) # should == -1 since the page is 
invalid
# page_index takes an item index and returns the page that it 
belongs on
helper.page_index(5) # should == 1 (zero based index)
helper.page_index(2) # should == 0
helper.page_index(20) # should == -1
helper.page_index(-10) # should == -1 because negative 
indexes are invalid*/
class helper{
  constructor(arrayValues, amountPerPage){
    this.items = arrayValues;
    this.numPerPage = amountPerPage;
  };
  item_count() {
   return this.items.length;
  };
  page_count() {
    return Math.ceil(this.item_count() / this.numPerPage);
  }
  page_item_count(page_index){
    numPerPage = this.numPerPage;
    item_count = this.item_count();
    page_count = this.page_count();
    if (page_index >= page_count || page_index < 0){
      return -1;
    }else{
      return this.items.slice(page_index * numPerPage, item_count).splice(0, numPerPage).length;
    }
  }
  page_index(obj_index){
    if (this.item_count() === 0 || obj_index <= 0 || obj_index > this.item_count()){
      return -1;
    }
    if (obj_index / this.numPerPage === 1){
      return 0;
    }
    return Math.floor((obj_index / this.numPerPage)); 
  }
}

const PaginationHelper = new helper(['a','b','c','d','e','f'], 4);
console.log(PaginationHelper.item_count());
console.log(PaginationHelper.page_count());
console.log(PaginationHelper.page_item_count(0));
console.log(PaginationHelper.page_index(2));
