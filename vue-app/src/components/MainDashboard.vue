<template>
    <v-flex xs12>
    <curso-card ></curso-card>
        <v-card>
            <v-layout row wrap>
                <v-flex
                v-for="n in 9"
                :key="n"
                xs4
                d-flex
                >
                    <v-card flat tile class="d-flex">
                        <v-layout column>
                        <div class="subheading">{{chartOptions.chart.title}}</div>
                        <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-flex>
</template>
<style lang="stylus">
</style>
<script>
import { GChart } from "vue-google-charts";
import cursoCard from "@/components/cards/CursoCard";

export default {
  components: {
    cursoCard
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  }
};
</script>
