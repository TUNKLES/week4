
module.exports = {

    
        let users = [{'email':"abc@email.com.au", "pwd": "123", "id":"1"},{'email':"user@email.com", "pwd": "password", "id":"2"},{'email':"123@email.com", "pwd": "abc", "id":"3"}];

        if (!req.body) {
            return res.sendStatus(400);
        }

        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;
        customer.valid = false;
        for (let i=0;i<users.length;i++) {
            if (req.body.email == users[i].email && req.body.upwd == users[i].pwd) {
                customer.valid = true;
    
            }
        }
        
        res.send(customer);
        

}