import fetch from "node-fetch";

const fetch = require("node-fetch");

const BASE_URI = "https://api.zippopotam.us/US/";
const config = {
  headers: {
    "Content-Type": "text/xml",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
  },
  method: "get",
};
