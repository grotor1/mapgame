const secrets = {
    dbUri: "mongodb+srv://grotor:v23v10a2004@grotor0.kcsbq.mongodb.net/Grotor0?retryWrites=true&w=majority"
};

module.exports.getSecret = key => {return secrets[key]};
