class ErrorRes extends Error{

    constructor(statusCode,
        message="Something went wromg!",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.success = false;
        this.errors = errors;
    }
}

export {ErrorRes};