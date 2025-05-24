---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/shaoshuaizhang.jpg',
    name: 'Shaoshuai Zhang',
    title: 'Assistant Professor',
    links: [
      { icon: 'github', link: 'https://github.com/Orgline' }
    ]
  },
]

const phdstudent = [
 {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/default.jpg',
    name: 'Hansheng Wang',
    links: [
      
    ]
 },
 {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/default.jpg',
    name: 'Lu Shi',
    links: [
      
    ]
 },
 {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/hdj(1).jpg',
    name: 'Dajun Huang',
    links: [
      { icon: 'github', link: 'https://github.com/dajunhuang' }
    ]
  }
]

const master = [
 {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/default.jpg',
    name: 'Gaoyuan Zou',
    links: [
      { icon: 'github', link: 'https://github.com/LCStayingdullCircuit' }
    ]
  }
]

const graduate = [
  {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/default.jpg',
    name: 'Yuhan Leng',
    title: 'Software Engineer',
    org: 'Moore Threads(摩尔线程)',
    links: [
      { icon: 'github', link: 'https://github.com/EmeraldLeng' }
    ]
  },
  {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/default.jpg',
    name: 'Yuhan Leng',
    title: 'Software Engineer',
    org: 'Moore Threads(摩尔线程)',
    links: [
      { icon: 'github', link: 'https://github.com/EmeraldLeng' }
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
      We are a team to explore the limit of the computation. You can contact with us via szhang94@uestc.edu.cn
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
<!-- <VPTeamPageSection>
    <template #title>Our Team</template>
    <template #lead>We are a team to explore the limit of the computation. You can contact with us via szhang94@uestc.edu.cn.</template>
    <template #members>
      <VPTeamMembers :members="members" />
    </template>
</VPTeamPageSection> -->
<VPTeamPageSection>
    <template #title>PhD Student</template>
    <template #lead>They benefited greatly from their time here, and went on to have a bright future.</template>
    <template #members>
      <VPTeamMembers :members="phdstudent" />
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>Master Student</template>
    <template #lead>They benefited greatly from their time here, and went on to have a bright future.</template>
    <template #members>
      <VPTeamMembers :members="master" />
    </template>
</VPTeamPageSection>
<VPTeamPageSection>
    <template #title>Alumni</template>
    <template #lead>They benefited greatly from their time here, and went on to have a bright future.</template>
    <template #members>
      <VPTeamMembers :members="graduate" />
    </template>
</VPTeamPageSection>
</VPTeamPage>

<!-- interface TeamMember {
  // 成员的头像图像
  avatar: string

  // 成员的名称
  name: string

  // 成员姓名下方的标题
  // 例如：Developer, Software Engineer, etc.
  title?: string

  // 成员所属的组织
  org?: string

  // 组织的 URL
  orgLink?: string

  // 成员的描述
  desc?: string

  // 社交媒体链接，例如 GitHub、Twitter 等，可以在此处传入 Social Links 对象
  // 参见: https://vitepress.dev/reference/default-theme-config.html#sociallinks
  links?: SocialLink[]

  // 成员 sponsor 页面的 URL
  sponsor?: string

  // sponsor 链接的文本，默认为 'Sponsor'
  actionText?: string
} -->