// src/handler.js
exports.handler = async (event) => {
  console.log("Lambda event received:", event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Lambda working fine!", input: event }),
  };
};
