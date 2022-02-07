const urls = {
  microservice1: "http://microservice1.com",
  microservice2: "http://microservice2.com",
  microservice3: "http://microservice3.com",
};
const basicHeaders = { "Content-Type": "application/json" };
const _getUrl = (endpoint = "", baseUrl = "") => {
  return `${urls[baseUrl]}${endpoint}`;
};

export default {
  async get(endpoint, baseUrl) {
    const url = _getUrl(endpoint, baseUrl);

    const response = await fetch(url, {
      method: "GET",
      headers: basicHeaders,
    });

    return await response.json();
  },

  async getRaw(endpoint, baseUrl) {
    const url = _getUrl(endpoint, baseUrl);

    const response = await fetch(url, {
      method: "GET",
      headers: basicHeaders,
    });

    return response;
  },

  async post(endpoint, baseUrl, data) {
    const url = _getUrl(endpoint, baseUrl);
    let payload;

    if (data) {
      payload = {
        method: "POST",
        headers: basicHeaders,
        body: JSON.stringify(data),
      };
    } else {
      payload = { method: "POST" };
    }

    return await fetch(url, payload);
  },

  async patch(endpoint, baseUrl, data) {
    const url = _getUrl(endpoint, baseUrl);
    const payload = {
      method: "PATCH",
      headers: basicHeaders,
      body: JSON.stringify(data),
    };

    return await fetch(url, payload);
  },

  async put(endpoint, baseUrl, data) {
    const url = _getUrl(endpoint, baseUrl);

    return await fetch(url, {
      method: "PUT",
      headers: basicHeaders,
      body: JSON.stringify(data),
    });
  },

  async delete(endpoint, baseUrl, data) {
    const url = _getUrl(endpoint, baseUrl);

    let payload;

    if (data) {
      payload = {
        method: "DELETE",
        headers: basicHeaders,
        body: JSON.stringify(data),
      };
    } else {
      payload = { method: "DELETE" };
    }

    return await fetch(url, payload);
  },
};
