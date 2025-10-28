// src/handler.js
exports.handler = async (event) => {
  try {
    console.log("Incoming event:", event);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Lambda executed successfully!",
        input: event,
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
