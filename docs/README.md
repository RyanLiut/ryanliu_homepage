---
pageClass: home-page
# some data for the components

name: Zhu Liu (刘柱)
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/RyanLiut
  # - title: linkedin
  #   icon: "/icons/linkedin-mono.svg"
  #   link: https://www.linkedin.com
  # - title: instagram
  #   icon: "/icons/instagram-mono.svg"
  #   link: https://www.instagram.com

cv: "/resumes/LZ_Resume_EN_20230619.pdf"
bio: Student at Tsinghua University
email: liuzhu22 (at) mails (dot) edu (dot) cn
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a Ph.D. candidate in the School of Humanities at Tsinghua University. My major is computational linguistics, combining artificial intelligence and natural languages. I am interested in computational lexical semantics and robust and trustful AI.


## News

- [May 2023] One paper has been accepted by [ACL findings 2023](https://2023.aclweb.org/).


## Education & Experiences

- **Tsinghua University** 

  Sept 2022 - 

  **courses**: Probability and Random Mathematics (by Jun Ye, auditing), Natural Language Processing (by Yue Zhang, [online](https://www.zhihu.com/education/video-course/1564218549538607104) auditing), Topics in Chinese Morphology and Syntax (by Dun Deng, A), Research on Corpus Linguistics (by Ying Liu, A)

  **Other interesting courses**: Appreciation of Western Opera (by Yi Ding, auditing), History of Western Music (by Xiao Kang, auditing)

- **Southern University of Science and Technology**

  Sept 2019 - July 2022

  **courses**: Advanced Algorithm (A), Bayesian Data Analysis (A), Machine Learning (A)

  **Other interesting courses**: Translation and Appreciation of Chinese Classical Poetry （by Mengwen Zhu, A), Classics and the Process of Canonization (by Mengwen Zhu, auditing)

- **Dalian University of Technology**

  Sept 2015 - July 2019


## Publications

[→ Full list](/projects/)

* **Ambiguity Meets Uncertainty: Investigating Uncertainty Estimation for Word Sense Disambiguation**

  Findings of ACL 2023

  [[arXiv](https://arxiv.org/abs/2305.13119)]\[[CODE](https://github.com/RyanLiut/WSD-UE)\]

* **Show, Tell and Rephrase: Diverse Video Captioning via Two-Stage Progressive Training**

  TMM 2020

  \[[Paper](https://ieeexplore.ieee.org/document/9999037)] [[CODE](https://github.com/RyanLiut/STR)]

<!-- ## Awards & Honors

### Contests -->

- 

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>