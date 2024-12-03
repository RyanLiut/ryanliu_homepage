---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: '(Juniper) Zhu Liu'
info: 'Student at Tsinghua University'
interests: 'Computational Lexical Semantics, Robust, Transparent and Trustful AI'
socials:
- title: github
  link: https://github.com/RyanLiut
# - title: linkedin
#   link: https://www.linkedin.com
- title: zhihu
  link: https://www.zhihu.com/people/antonioliu1
- title: email
  link: 'liuzhu22@mails.tsinghua.edu.cn'
actions:
- text: Publications
  link: /projects/
- text: Blog
  link: /blog/
- text: CV
  link: /resumes/LZ_Resume_EN_20241203.pdf
- text: 中文简历
  link: /resumes/LZ_Resume_CN_20241203.pdf
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I attended Tsinghua University to pursue my Ph.D., supervised by Ying Liu and cosupervised by Maosong Sun. My research topic is computational linguistics, which combines natural languages and computer science. One epistemic problem I am trying to figure out is "What does the machine know and does not know about languages"? ([Issues](https://faculty.washington.edu/ebender/papers/ACL_2024_Presidential_Address.pdf) as E.M.B. proposed).

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>