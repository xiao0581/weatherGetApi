const baseUrl = "http://api.weatherapi.com/v1/current.json"


Vue.createApp({
    data() {
        return {           
            forecast: null,
          
           
        }
    },
    methods: {

        async getByforecast() {
            
            const apiKey = '3e29a80af71e4111839125157240204'; // Replace with your actual API key
            const query = 'Paris'; // Replace with your query
            const days = 3; // Number of days for forecast
            try {
                const response = await axios.get(baseUrl, {
                  params: {
                    key: apiKey,
                    q: query,
                    days: days,
                  },
                });
                this.forecast = await response.data
            } catch (e) {
                this.forecast = null
            }
        },
    
    }



}).mount("#app")