module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'chowmonger',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
