
let baseUrl = 'https://dev-api.ecopetrol.com.co/';

class ClientAxios {

    getBaseUrl() {
        return baseUrl;
    }

    setBaseUrl(url) {
        baseUrl = url;
    }
}

export default ClientAxios;