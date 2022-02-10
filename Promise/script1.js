const func1 = a => {
    switch (a) {
        case 'a':
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('result1');
                }, 100);
            });
        case 'b':
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('result2');
                }, 100);
            });
        default:
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('result3');
                }, 100);
            });
    };
};

module.exports = func1;