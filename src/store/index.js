import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    projects: [
      {
        id: "001",
        title: "My Social Community",
        url: require("../assets/projects/mysocialcommunity.png"),
        btn_title: "View",
        btn_path: "https://www.michaelwu.tk/",
        brief:
          "My Social Community is a social blog website. Signed-in users can share different topics on this platform. The topics are categorised into sports, movie, diet, tourism and others respectively. Besides, they can comment with each other. ",
        tech: [
          { icon: "mdi-nodejs", name: "Node.js" },
          { icon: "mdi-database", name: "MongoDB" },
          { icon: "mdi-jquery", name: "jQuery" },
          { icon: "mdi-bootstrap", name: "Bootstrap" },
          { icon: "mdi-aws", name: "AWS" },
          { icon: "mdi-ubuntu", name: "Ubuntu" },
        ],
        github_path: "https://github.com/MichaelWu1995/socialblog",
      },

      {
        id: "002",
        title: "Gathering",
        url: require("../assets/projects/gathering.png"),
        btn_title: "View",
        btn_path: "https://michaelwu1995.github.io/gathering/#/",
        brief:
          "Gathering is an activity organisation webiste. Users can issue and register different activities here. Meanwhile, the usage of full calendar can help them manage their activtities easily. Furthermore, commenting activities makes this platform more sociable.",
        tech: [
          { icon: "mdi-vuejs", name: "Vue.js" },
          { icon: "mdi-vuetify", name: "Vuetify" },
          { icon: "mdi-firebase", name: "Firebase" },
          { icon: "mdi-mapbox", name: "MapBox" },
        ],
        github_path: "https://github.com/MichaelWu1995/meetup",
      },

      {
        id: "003",
        title: "Wild Wild Life",
        url: require("../assets/projects/luckydraw.png"),
        btn_title: "View",
        btn_path: "https://michaelwu1995.github.io/luckdrawgame/",
        brief:
          "Wild Wild Life is intended for restaurant customers. It is a spinning wheel game with various discounts. When customers spin the wheel, they will have chances to win different discounts and awards. Besides, the restaurant staff can change the contents of awards.",
        tech: [
          { icon: "mdi-language-html5", name: "HTML5" },
          { icon: "mdi-language-css3", name: "CSS3" },
          { icon: "mdi-language-javascript", name: "JavaScript" },
          { icon: "mdi-firebase", name: "Firebase" },
        ],
        github_path: "https://github.com/MichaelWu1995/luckdrawgame",
      },

      {
        id: "004",
        title: "MelEyes",
        url: require("../assets/projects/meleyes.png"),
        btn_title: "View",
        btn_path: "https://www.youtube.com/watch?v=-VkNS6B3_Og",
        brief:
          "MelEyes is aimed to helping people with low vision to plan their trips in Melbourne CBD. The information such as the pedestrian count and weather situations is accessible to them. Besides, the function of emergency contact enables them to send their real-time location to their friends. Finally, the braille dictionary can help them translate the English word into braille.",
        tech: [
          { icon: "mdi-dot-net", name: "ASP.net" },
          { icon: "mdi-language-html5", name: "HTML5" },
          { icon: "mdi-language-css3", name: "CSS3" },
          { icon: "mdi-language-javascript", name: "JavaScript" },
        ],
        github_path: "https://github.com/karthiksathasivan/VisionMelbourne",
      },

      {
        id: "005",
        title: "Covid-19 Tracker",
        url: require("../assets/projects/virus.png"),
        btn_title: "View",
        btn_path: "https://michaelwu1995.github.io/covid-19-tracker/",
        brief:
          "Covid-19 Tracker is is a simple dashboard to illuatrate the situations of covid-19 around the world. Through this website, users can check the latest conditions in each country including everyday cases, recovered and death number. Moreover, the usage of line chart and map enables users to have a better understanding of this serious event.",
        tech: [
          { icon: "mdi-react", name: "React.js" },
          { icon: "mdi-material-ui", name: "Material UI" },
          { icon: "mdi-language-html5", name: "HTML5" },
          { icon: "mdi-language-css3", name: "CSS3" },
        ],
        github_path: "https://github.com/MichaelWu1995/covid-19-tracker",
      },

      {
        id: "006",
        title: "Audio Wares",
        url: require("../assets/projects/audiowares.png"),
        btn_title: "Coming...",
        btn_path: "javascript:void(0)",
        brief:
          "Audio Wares is a music platform. Based on the data from the NeteaseCloudMusic，Users can search and find any music that they are interested in on this platform. Besides, as a music player, they can play music and watch MVs on this platform.",
        tech: [
          { icon: "mdi-vuejs", name: "Vue.js" },
          { icon: "mdi-vuetify", name: "vuetify" },
          { icon: "mdi-language-html5", name: "HTML5" },
          { icon: "mdi-language-css3", name: "CSS3" },
        ],
        github_path: "javascript:void(0)",
      },
    ],

    socialMedia: [
      {
        icon: "mdi-facebook",
        color: "#1670eb",
        link: "https://www.facebook.com/xueyuan.wu.31",
      },

      {
        icon: "mdi-linkedin",
        color: "#096da9",
        link: "https://www.linkedin.com/in/xueyuan-wu-260198186/",
      },

      {
        icon: "mdi-instagram",
        color: "#125688",
        link: "https://www.instagram.com/michael_wu_1995/",
      },

      {
        icon: "mdi-gmail",
        color: "#c83f36",
      },

      {
        icon: "mdi-whatsapp",
        color: "#1ee172",
        link: "https://wa.link/wto3e1",
      },
    ],
  },
});

export default store;
