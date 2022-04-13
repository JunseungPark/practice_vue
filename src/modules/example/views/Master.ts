import Vue from 'vue'
import { Component } from 'vue-property-decorator'

interface PlayerList{
  id: number;
  nmae: String;
  
}

@Component
export default class ExampleMaster extends Vue {
  playerList : PlayerList[] = [];
}
