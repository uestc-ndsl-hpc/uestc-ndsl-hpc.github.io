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
      { icon: 'github', link: 'https://github.com/Orgline' },
      {
        icon: {
          svg: '<svg t="1748622139423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1561" width="200" height="200"><path d="M0.071215 0h1024v1024H0.071215z" fill="#FFFFFF" fill-opacity=".01" p-id="1562"></path><path d="M42.753396 371.2l448.465455-179.2 448.465454 179.2-448.465454 179.2z" fill="#E2F0FF" p-id="1563"></path><path d="M475.393396 152.389818a42.682182 42.682182 0 0 1 31.650909 0l446.696728 178.455273h28.625454v282.112H897.002124V434.129455l-118.504728 47.336727v249.576727a42.682182 42.682182 0 0 1-12.753454 30.394182c-15.173818 14.941091-41.565091 36.026182-77.498182 56.971636-60.322909 35.048727-126.603636 56.273455-197.026909 56.273455-70.469818 0-136.704-21.224727-197.026909-56.32-35.933091-20.898909-62.370909-41.984-77.544727-56.925091a42.682182 42.682182 0 0 1-12.334546-24.762182l-0.372364-5.632-0.046545-249.483636-176.965818-70.749091C-7.003695 397.312-8.772422 351.092364 21.575215 334.196364l5.352727-2.56z m217.739637 363.194182l-186.088728 74.472727a42.682182 42.682182 0 0 1-31.650909 0l-186.181818-74.472727v196.049455l2.280727 1.861818c9.914182 7.912727 20.992 15.872 33.140364 23.552l12.474182 7.586909c48.221091 28.020364 100.305455 44.683636 154.065454 44.683636 53.853091 0 105.937455-16.663273 154.158546-44.683636 12.8-7.447273 24.622545-15.313455 35.281454-23.226182l12.520728-9.774545v-196.049455z m-201.960728-277.643636L157.720669 371.153455l129.582546 51.758545h1.954909l-0.046546 0.744727 201.960727 80.756364 201.960728-80.756364v-0.698182h1.908363l129.582546-51.758545-333.451637-133.259636z" fill="#3F92FE" p-id="1564"></path></svg>'
        }, link: 'https://scholar.google.com/citations?user=Z3ox5UoAAAAJ&hl=en'
      }
    ]
  },
]

const phdstudent = [
 {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/wanghansheng(1).jpg',
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
    avatar: 'https://uestc-ndsl-hpc.oss-cn-chengdu.aliyuncs.com/shared-uploads/1752215313514-1752215178944.jpg',
    name: 'Dajun Huang',
    links: [
      { icon: 'github', link: 'https://github.com/dajunhuang' },
      { icon: 'blogger', link: 'https://blog.djhuang.cn/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/447266390' },
      { icon: 'osu', link: 'https://osu.ppy.sh/users/16443150' }
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
  },
  {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/llavator.jpg',
    name: 'Lin Long',
    links: [
      
    ]
  },
  {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/sunweiavator.jpg',
    name: 'Wei Sun',
    links: [
      { icon: 'github', link: 'https://github.com/veitsun' }
    ]
  },
  {
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/ywc.jpg',
    name: 'Wencong Yang',
    links: [
      { icon: 'github', link: 'https://github.com/cben484' }
    ]
  },
  {
    avatar: 'https://uestc-ndsl-hpc.oss-cn-chengdu.aliyuncs.com/shared-uploads/1752175469529-zhanruiyi.jpg',
    name: 'Ruiyi Zhan',
    links: [
      { icon: 'github', link: 'https://github.com/ruinique' }
    ]
  },
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
    avatar: 'https://ruinique-alibaba-oss.oss-cn-chengdu.aliyuncs.com/wusiqi_white.jpg',
    name: 'Siqi Wu',
    title: 'AI Engineer',
    org: 'Shopee(虾皮)',
    links: [
      { icon: 'github', link: 'https://github.com/Dionysusfhs' }
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
