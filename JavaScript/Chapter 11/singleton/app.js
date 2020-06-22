// Immediate anonymous, can only return one instance of an object at a time, global point of access instead of encapsulation, hard to debug

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Sara'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);