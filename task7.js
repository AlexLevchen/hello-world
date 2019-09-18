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
    this.arrayVal = arrayValues;
    this.numPerPage = amountPerPage;
  };
  item_count() {
   return this.arrayVal.length;
  };
  page_count() {
    if( Number.isInteger(this.item_count()/this.numPerPage)){
      return this.page_count = Math.floor(this.item_count()/this.numPerPage);
    }else{
      return this.page_count = Math.floor(this.item_count()/this.numPerPage)+1;
    }
  }
  page_item_count(num){
    this.page = num+1;
    if(this.page < this.page_count()){
      return page_item_count = this.numPerPage;
    }else if(this.page > this.page_count){
      return page_item_count = -1;
    }else if(this.page == this.page_count){
      if(this.item_count()%this.numPerPage != 0){
        return page_item_count = this.item_count()%this.numPerPage;
      }else{
        return page_item_count = this.numPerPage;
      }
    }
  }
  page_index(val){
    this.poosition = val;
    return page_index = this.page_count();
  }
}

const PaginationHelper = new helper(['a','b','c','d','e','f'], 4);
/*let page_count = PaginationHelper.page_count();
console.log(page_count);
let item_count = PaginationHelper.item_count();
console.log(item_count);
let page_item_count = PaginationHelper.page_item_count(0);
console.log(page_item_count);*/
let page_index = PaginationHelper.page_index(4);
console.log(page_index);
