import client from "./client";

const login = (username, password) => client.post("/owner/login", { username, password });

export default {
  login,
};
