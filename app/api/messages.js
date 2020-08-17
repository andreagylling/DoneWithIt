import client from "./client";

const sendMessage = (message, listingId) =>
  client.post("/messages", { message, listingId });

export default {
  sendMessage,
};
