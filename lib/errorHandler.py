def errorHandler(err, req, res, next):
# set some reasonable defaults
    status = 500
    message = err.message or 'Internal server error'
    errors = ''
    if err.name == 'ValidationError':
        status = 422
        errors = {}
        message = 'Validation failed'
        for field in err.errors:
            errors[field] = err.errors[field].message

        res.status(status).json({message, errors})
        next(err)
    # if err.type == 'ValueError':
    #     status = 422
    #     errors = {}
    #     message = 'Validation failed'
    #     for field in err.errors:
    #         errors[field] = err.errors[field].message
    #
    #     res.status(status).json({message, errors})
    #     next(err)
