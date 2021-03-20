import Vue from 'vue';
import Vuetify from 'vuetify/lib';

export default new Vuetify({
    theme: {
        themes: {
          light: {        
            primary: '#000',
            secondary: '#fff',
            error: '#EF5350',
            success: '#4caf50',
            background:'#fff'    
          }
        },
      },
  })

  Vue.use(Vuetify);