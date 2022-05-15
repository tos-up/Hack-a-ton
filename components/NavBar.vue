<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        <v-btn text href="/#top" style="font-size: 1.25rem">Hack-a-ton</v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        class="hidden-sm-and-down"
        text
        v-for="(item, i) in items"
        :key="i"
        :href="item.to"
        exact
        >{{ item.title }}</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'About',
          to: '/#about',
        },
        {
          icon: 'mdi-send',
          title: 'Submit',
          to: '/#submit',
        },
        {
          icon: 'mdi-contacts',
          title: 'contact',
          to: '/#contact',
        },
      ],
      title: 'Hack a ton',
    }
  },
}
</script>

<style>
</style>