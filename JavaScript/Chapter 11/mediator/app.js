const User = function (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to); // this pertains to user
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Single user message
                to.receive(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const sara = new User('Sara');
const brad = new User('Brad');
const jeff = new User('Jeff');

const chatroom = new Chatroom();

chatroom.register(sara);
chatroom.register(brad);
chatroom.register(jeff);

sara.send('Hello Jeff', jeff);
jeff.send('Hello Brad, you are the best dev ever!', brad);
brad.send('Hello everyone!!!');