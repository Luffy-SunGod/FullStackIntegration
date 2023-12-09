const jwt=require('jsonwebtoken')
const secret="Piu$hP@ndey"

function createTokenForUser(user){
    const payload={
        id:user._id,
        email:user.email
    }
    const token=jwt.sign(payload,secret);
    return token;
}

function validate(token){
    const payload=jwt.verify(token,secret);
    return payload;
}
module.exports={createTokenForUser,validate};

