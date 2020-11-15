<template>
  <v-app>
    <div>
      <v-app-bar>
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click="sideNav = !sideNav"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer"
            >Michael Wu</router-link
          >
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items
          class="hidden-xs-only"
          v-for="(item, i) in menuItems"
          :key="i"
        >
          <v-btn text class="transparent" :to="item.path">
            <v-icon left size="25">{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>

    <v-main>
      <transition>
        <router-view></router-view>
      </transition>
    </v-main>

    <v-footer>
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} —
        <strong>Michael Wu</strong>
      </v-col>
    </v-footer>

    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="./assets/profile/profile.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title"> Michael Wu </v-list-item-title>
            <v-list-item-subtitle> wuxueyuan10@gmail.com </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item-group mandatory color="primary">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            router
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon left size="25">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sideNav: false,
    menuItems: [
      {
        icon: "mdi-home",
        title: "Home",
        path: "/",
      },

      {
        icon: "mdi-account",
        title: "About",
        path: "/about",
      },

      {
        icon: "mdi-file-code",
        title: "Portfolio",
        path: "/portfolio",
      },

      {
        icon: "mdi-phone",
        title: "Contact",
        path: "/contact",
      },
    ],
  }),
};
</script>
