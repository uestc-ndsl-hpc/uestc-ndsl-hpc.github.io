---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/shaoshuaizhang.jpg',
    name: 'Shaoshuai Zhang',
    title: 'Professor',
    links: [
      { icon: 'github', link: 'https://github.com/Orgline' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>