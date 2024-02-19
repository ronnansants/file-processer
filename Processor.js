class Processor{
    static Process(data){
        var row = data.split("\r\n");
        var values = [];

        row.forEach(element => {
            var arr = element.split(',');
            values.push(arr)
        });

        return values
    }
}

module.exports = Processor;