const ip = '18.191.35.201';
const baseUrl = `http://${ip}:3000`;
const fairsUrl = `http://${ip}:4000`;

export const environment = {
  production: true,
  url: baseUrl,
  fairsUrl: fairsUrl
};