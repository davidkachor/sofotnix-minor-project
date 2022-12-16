import type { RouteRecordRaw } from 'vue-router'

import VotingPage from './VotingPage.vue'

export const votingRouteNames = {
  voting: 'Voting'
}

export const votingRoutes: RouteRecordRaw[] = [
  {
    path: '/voting',
    name: votingRouteNames.voting,
    component: VotingPage
  }
]
