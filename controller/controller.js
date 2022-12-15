import bcrypt1 from 'bcrypt'

class bcrypt{
    static bcryptpwd=(req,res)=>{
        res.render('index')
    }
    static encryptpwd=async(req,res)=>{
        try {
            const number=Number(req.body.number)
            const encrypt=await new bcrypt1.hash(req.body.text,number)
            const text= req.body.text
            res.render('index2',{text,encrypt,number})
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default bcrypt