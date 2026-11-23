import LoginService from "./LoginService.js";

export const registerServices = (app) => {
  app.provide("loginService", LoginService);
};
