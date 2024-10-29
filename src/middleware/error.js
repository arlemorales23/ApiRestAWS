const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: err.errors.map(e => ({
          field: e.path,
          message: e.message
        }))
      });
    }
  
    res.status(500).json({
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  };
  
  module.exports = errorHandler;