const asyncHandler = (responseHndler) => {
  return (req, res, next) => {
    Promise.resolve(responseHndler(req, res, next)).catch((err) => {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    });
  };
};
export default asyncHandler;

// better to use this....-> why? it doesn't execute the response handler immginately... .then() schedules callback

/**
 * const asyncHandler = (responseHndler) => {
  return (req, res, next) => {
    Promise.resolve()
      .then(() => responseHndler(req, res, next))
      .catch((err) => {
        res.status(err.code || 500).json({
          success: false,
          message: err.message,
        });
      });
  };
};
 */
