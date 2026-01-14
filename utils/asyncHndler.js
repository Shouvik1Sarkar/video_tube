const asyncHandler = (responseHndler) => {
  return  (req, res, next) => {
  Promise.resolve(responseHndler(req, res, next)).catch((err) => {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    });
  };
};
