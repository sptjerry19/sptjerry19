// 1. Sync / Async
// Async: setTimeout, setInterval, fetch,
//        XMLHttpRequest, file reading,
//        requestAnimationFrame

setTimeout(function() {
    console.log('lan 1');
}, 1000);   // sleep 1s -> run function()

console.log('lan 2');


// if logic Sync => 1 run first after run 2
// logic correct => 2 run first after run 1 because 1 is sleep -> 2 run 2


// 2. Pain
// Callback Hell

// Ex:
setTimeout(function() {
    console.log('lan 1');
    setTimeout(function() {
        console.log('lan 2');
        setTimeout(function() {
            console.log('lan 3');
            setTimeout(function() {
                console.log('lan 4');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// 3. Concept

// + pending
// + Fulfilled
// + Rejected
var promise = new Promise(function(resolve, reject) {
    // Logic
    // Succes : resolve();
    // Faile  : reject();

    resolve([
        {
            name: "jerry",
            age : 19,
            id  : 21020998
        }
    ]); // return .then()

    reject([
        {
            response : "ERROR",
        }
    ]);
});

promise
    .then(function(succes) {
        console.log(succes) // resolve();
    })
    .catch(function(error) {
        console.log(error) //reject();
    })
    .finally(function() {
        console.log("done!")
    })



// NOTE: Promise sinh ra để xử lý những thao tác bất đồng bộ,
//       trước promise ta sử dụng callback nhưng gặp vấn đề về callback hell (callback lồng callback)
//       promise được sinh ra để xử lý nó


function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });



// 4. Promise.resole()

// var promise = Promise.resolve('cach 1');
var promise = new Promise(
    function(resolve, reject) {
        resolve('Succes!');
    }
)

promise
    .then(function(succes) {
        console.log('result: ', succes);
    });


// 5. Promise.reject()

var promiserr = new Promise(
    function(resolve, reject) {
        reject('Error!');
    }
)

promiserr
    .catch(function(error) {
        console.log('result: ', error);
    });


// 6. Promise.all()

var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve('js');
        }, 1000)
    }
)

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve('PHP');
        }, 4000)
    }
)

Promise.all([promise1, promise2])
    .then(function([value1, value2]) {
        console.log(value1+value2);
    });