<template>
  <div>
    <div class="wrap">
      <v-container fill-height fluid class="mask">
        <v-row>
          <v-col cols="12" align="center">
            <v-img src="../assets/profile/profile.jpg" class="profile"></v-img>
            <br />
            <h1 style="font-size: 50px">
              <strong>Michael Wu</strong>
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <br />

    <v-container style="padding: 20px">
      <div>
        <h2 style="font-size: 40px">
          <strong>This is me...</strong>
        </h2>
        <p style="font-size: 20px; text-align: justify">
          Comprehensive graduate holding a master’s in Business Information
          Systems that covered both analytical modules and software programming
          technologies. Instilled valuable transferable skills in solving
          business problems, team collaboration, project management and software
          design and development. Committed to deploying information technology
          to aid business decision making and exceed company targets. Solidified
          experience in customer services as demonstrated during internship as a
          Technician Support, showing a strong interest in helping customers to
          solve issues. Now seeks to obtain an entry-level position in the field
          of information technology, and utilize my various skills to make great
          contibutions to company's goals.
        </p>
      </div>

      <div>
        <h2 style="font-size: 40px">
          <strong>Education</strong>
        </h2>
        <v-row>
          <v-col
            cols="12"
            md="6"
            lg="4"
            v-for="(item, i) in education"
            :key="i"
          >
            <div class="d-flex justify-center" style="height: 480px">
              <div class="rec primary">
                <p class="year">{{ item.year }}</p>
              </div>
              <v-card class="ml-5 d-flex align-center">
                <div>
                  <v-card-title class="nextLine">
                    {{ item.school }}
                  </v-card-title>
                  <v-card-text style="font-size: 16px">
                    <div class="d-flex align-center text--primary">
                      <v-icon class="primary--text" size="25"
                        >mdi-certificate</v-icon
                      >
                      <span class="ml-3">{{ item.certificate }}</span>
                    </div>
                    <div class="d-flex align-center mt-3 text--primary">
                      <v-icon class="primary--text" size="25"
                        >mdi-map-marker</v-icon
                      >
                      <span class="ml-3">{{ item.location }}</span>
                    </div>

                    <div class="mt-5 text--primary" style="text-align: justify">
                      {{ item.achievement }}
                    </div>
                  </v-card-text>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>

      <div>
        <h2 style="font-size: 40px">
          <strong>My Skills</strong>
        </h2>
        <v-row>
          <v-col cols="12" offset-md="1" md="4" sm="6">
            <v-card>
              <v-card-title>Professional Skills (SFIA 7)</v-card-title>
              <v-card-text
                v-for="(item, i) in pro_skills"
                :key="i"
                style="font-size: 16px"
              >
                <div class="text--primary d-flex justify-space-between">
                  <span>{{ item.title }}</span>
                  <span>{{ item.total_level }}</span>
                </div>
                <v-progress-linear height="25" :value="item.value">
                  <template>
                    <strong
                      :class="item.value > 50 ? 'white--text' : 'text--primary'"
                      >{{ item.my_level }}</strong
                    >
                  </template>
                </v-progress-linear>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" offset-md="1" md="4" sm="6">
            <v-card>
              <v-card-title>Language Skills</v-card-title>
              <v-card-text
                v-for="(item, i) in lan_skills"
                :key="i"
                style="font-size: 16px"
              >
                <div class="text--primary d-flex justify-space-between">
                  <span>{{ item.title }}</span>
                  <span>{{ item.total_level }}</span>
                </div>
                <v-progress-linear height="25" :value="item.value">
                  <template>
                    <strong
                      :class="item.value > 50 ? 'white--text' : 'text--primary'"
                      >{{ item.my_level }}</strong
                    >
                  </template>
                </v-progress-linear>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div>
        <h2 style="font-size: 40px">
          <strong>What can I do?</strong>
        </h2>
        <v-row>
          <v-col cols="12" sm="4" v-for="(item, i) in services" :key="i">
            <div align="center">
              <div>
                <v-icon size="50" class="primary--text">{{ item.icon }}</v-icon>
              </div>
              <div class="mt-2" style="font-size: 30px">
                <strong>{{ item.title }}</strong>
              </div>
              <div
                style="font-size: 20px"
                class="text--primary mt-2"
                v-html="item.brief"
              ></div>
            </div>
          </v-col>
        </v-row>
      </div>

      <div>
        <h2 style="font-size: 40px">
          <strong>My Director Says:</strong>
        </h2>

        <v-row>
          <v-col cols="12" sm="10" offset-sm="1">
            <v-icon size="50" class="primary--text"
              >mdi-format-quote-open</v-icon
            >
            <v-col sm="10" offset-sm="1">
              <p style="font-size: 20px; text-align: justify">
                During internship at GN Tech Australia, Michael is responsible
                and hardworking. He can actively learn something new and
                cooperate with each other. I am satisfied with his works.
                Overall, well done!
              </p>
              <p style="font-size: 20px">- <strong>Abraham Cheong</strong></p>
            </v-col>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          school: "Education Center Australia",
          certificate: "Certificate of ACS PY Completion",
          location: "Melbourne, Australia",
          year: "2019 - 2020",
          achievement:
            "Familiar with Australian working environment and culture. Developed the essential workplace communication skills and interaction with internal and external clients. Conducted professional meeting and presentations to achieve business outcomes. Did the professional report writing including researching, planning and organising information.",
        },

        {
          school: "Monash University",
          certificate: "Master of Business Information System",
          location: "Melbourne, Australia",
          year: "2017 - 2019",
          achievement:
            "Mastered sofware programming techniques such as Java, Python and SQL. Obtained theoretical knowledge of user interface design and applied them into practice. Understood the project management life cycle and used relevant software such as LeanKit and Trello to effectively manage projects. Instilled knowledge of modelling business process and issue advice to improve revenue and reduce costs.",
        },

        {
          school: "University of Shanghai for Science and Technology",
          certificate: "Bachelor of Pharmaceutical Engineering",
          location: "Shanghai, China",
          year: "2013 - 2017",
          achievement:
            "Four years' undergraduate study makes me more independent and mature. Mastered professional computer software in graphical engineering design like Auto CAD and UG NX. Kept learning English and took IELTS test, making preparations for the overseas study.",
        },
      ],

      pro_skills: [
        {
          title: "Project Management",
          my_level: "Level 4",
          total_level: "PRMG - Level 7",
          value: (4 / 7) * 100,
        },
        {
          title: "Analytics",
          my_level: "Level 3",
          total_level: "INAN – Level 7",
          value: (3 / 7) * 100,
        },
        {
          title: "Business Analysis",
          my_level: "Level 3",
          total_level: "BUAN – Level 6",
          value: (3 / 6) * 100,
        },
        {
          title: "Software Development",
          my_level: "Level 3",
          total_level: "PROG – Level 6",
          value: (3 / 6) * 100,
        },
        {
          title: "Software Design",
          my_level: "Level 3",
          total_level: "SWDN – Level 6",
          value: (3 / 6) * 100,
        },
      ],

      lan_skills: [
        {
          title: "Mandarian",
          my_level: "Native",
          total_level: "Native Proficiency",
          value: 100,
        },
        {
          title: "English",
          my_level: "Professional Working",
          total_level: "Native Proficiency",
          value: 75,
        },
        {
          title: "French",
          my_level: "Elementary",
          total_level: "Native Proficiency",
          value: 20,
        },
      ],

      services: [
        {
          title: "Website Design",
          icon: "mdi-desktop-mac",
          brief:
            "Mastered theoritical knowledge <br /> of user interface design. <br/ >Demonstrated experience using <br />WIX.com to design <br /> the website during internship.",
        },

        {
          title: "Software Coding",
          icon: "mdi-microsoft-visual-studio-code",
          brief:
            "Understood knowledge and  <br /> techniques of programming. <br /> Demonstrated  experience using <br/ >HTML, JavaScript and CSS <br/> for website developing.",
        },

        {
          title: "Data Analytics",
          icon: "mdi-chart-bar",
          brief:
            "Gained knowledge of <br /> data visualisation. Demonstrated <br /> experience using tools like <br/> Excel, Python and Tableau <br/> to illustrate and analyse data ",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.wrap {
  position: relative;
  background: url("../assets/background/about.jpg") no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100% 100%;
}
.mask {
  width: 100%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.3);
}

.profile {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 1;
}

.year {
  height: 100%;
  margin: 0;
  text-align: center;
  color: #fff;
  writing-mode: vertical-rl;
  font-size: 30px;
  font-weight: bold;
}

.rec {
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nextLine {
  word-break: keep-all;
}
</style>
