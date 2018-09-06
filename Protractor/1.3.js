var fs = require('fs')

fs.open('open.txt', 'w', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.appendFile('append.txt', 'Hello!',
    function (err) {
        if (err) throw err;

        console.log('Saved!');
    });

fs.writeFile('write.txt', 'How do you do!',
    function (err) {
        console.log('Saved!');
    })
  
