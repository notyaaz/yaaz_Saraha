const dataMesthods = ['body', 'query', 'params']
const validation = (schema) => {

    return (req,res,next) => {

    let validationArray =[]

    dataMesthods.forEach(key => {
        
        if(schema[key]){
            const validationResult = schema[key].validate(req[key])

            if(validationResult.error){
                validationArray.push(validationResult.error.details)
            }
        }

    });


    if(validationArray.length > 0){
        return res.json({validationError: validationArray})
    }
    return next()

} 
}
export default validation