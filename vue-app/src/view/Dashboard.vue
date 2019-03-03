<template>
    <v-app id="keep">
        <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
        <v-list dense class="grey lighten-4">
            <template v-for="(item, i) in items">
            <v-layout v-if="item.heading" :key="i" row align-center >
                <v-flex xs6>
                <v-subheader v-if="item.heading">
                    {{ item.heading }}
                </v-subheader>
                </v-flex>
                <v-flex xs6 class="text-xs-right">
                <v-btn small flat>edit</v-btn>
                </v-flex>
            </v-layout>
            <v-divider v-else-if="item.divider" :key="i" dark class="my-3" ></v-divider>

            <v-list-tile v-else :key="i" @click="item.function">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="grey--text">
                        {{ item.text }}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </template>
        </v-list>
        </v-navigation-drawer>
        <v-toolbar color="light-blue darken-1" app absolute clipped-left>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title ml-3 mr-5">Dashboard</span>
        <v-text-field
            solo-inverted
            flat
            hide-details
            label="Search"
            prepend-inner-icon="fas fa-search"
        ></v-text-field>
        <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
        <v-container fluid fill-height class="grey lighten-4">
            <v-layout justify-center align-center>
            <v-flex shrink>
                <dash1></dash1>
            </v-flex>
            </v-layout>
        </v-container>
        </v-content>
    </v-app>
</template>

<script>
/* eslint-disable */
import dash1 from '@/components/Dash1'
export default {
    components: {
        dash1
    },
    data: () => ({
        drawer: null,
        items: [
        {
            icon: "fas fa-lightbulb",
            text: "Notes",
            function: function() {
            console.log("teste1");
            }
        },
        {
            icon: "fas fa-fingerprint",
            text: "Reminders",
            function: function() {
            console.log("teste2");
            }
        },
        { divider: true },
        { heading: "Labels" },
        {
            icon: "fas fa-plus",
            text: "Create new label",
            function: function() {
            console.log("teste3");
            }
        },
        { divider: true },
        {
            icon: "fas fa-archive",
            text: "Archive",
            function: function() {
            console.log("teste4");
            }
        },
        {
            icon: "fas fa-trash-alt",
            text: "Trash",
            function: function() {
            console.log("teste5");
            }
        },
        { divider: true },
        {
            icon: "fas fa-cog",
            text: "Settings",
            function: function() {
            console.log("teste6");
            }
        },
        {
            icon: "far fa-comments",
            text: "Trash",
            function: function() {
            console.log("teste7");
            }
        },
        {
            icon: "fas fa-question-circle",
            text: "Help",
            function: function() {
            console.log("teste8");
            }
        },
        {
            icon: "fas fa-mobile",
            text: "App downloads",
            function: function() {
            console.log("teste9");
            }
        },
        {
            icon: "fas fa-keyboard",
            text: "Keyboard shortcuts",
            function: function() {
            console.log("teste10");
            }
        }
        ]
    }),
    props: {
        source: String
    },
    methods: {}
};
</script>

<style lang="stylus">
#keep {
    .v-navigation-drawer__border {
        display: none;
    }
}
</style>