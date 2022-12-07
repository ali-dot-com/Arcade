const auth = (req,res,next)=>
{
    const role = req.session.role;
    if(typeof role == 'undefined' || !role)
    {
        return res.render('signin');
    }
    next();
}

module.exports = {auth};