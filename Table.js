module.exports = class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumnsCount(){
        return this.header.length;
    }
}