---
pageClass: projects-page
---

# Work

Here are some works of mine :books:

<!-- ## Projects

<ProjectCard image="/projects/1.png">
  
  **Digital Humanities**
  

</ProjectCard> -->

## Publications

<ProjectCard>

  **Ambiguity Meets Uncertainty: Investigating Uncertainty Estimation for Word Sense Disambiguation**
  
  `Findings: ACL 2023`
  <details>
  
  <summary>
  Word sense disambiguation (WSD), which aims to determine an appropriate sense for a target word given its context, is crucial for natural language understanding. Existing supervised methods treat WSD as a classification task and have achieved remarkable performance.
  </summary>
  Word sense disambiguation (WSD), which aims to determine an appropriate sense for a target word given its context, is crucial for natural language understanding. Existing supervised methods treat WSD as a classification task and have achieved remarkable performance. However, they ignore uncertainty estimation (UE) in the real-world setting, where the data is always noisy and out of distribution. This paper extensively studies UE on the benchmark designed for WSD. Specifically, we first compare four uncertainty scores for a state-of-the-art WSD model and verify that the conventional predictive probabilities obtained at the end of the model are inadequate to quantify uncertainty. Then, we examine the capability of capturing data and model uncertainties by the model with the selected UE score on well-designed test scenarios and discover that the model reflects data uncertainty satisfactorily but underestimates model uncertainty. Furthermore, we explore numerous lexical properties that intrinsically affect data uncertainty and provide a detailed analysis of four critical aspects: the syntactic category, morphology, sense granularity, and semantic relations.
  </details>
  
  [[Paper](https://arxiv.org/abs/2305.13119)] [[CODE](https://github.com/RyanLiut/WSD-UE)]

</ProjectCard>

<ProjectCard>

  **Show, Tell and Rephrase: Diverse Video Captioning via Two-Stage Progressive Training**
  
  `TMM 2022`

  <details>
  
  <summary>
  Describing a video using natural language is an inherently one-to-many translation task. To generate diverse captions, existing VAE-based generative models typically learn factorized latent codes via one-stage training merely from stand-alone video-caption pairs. However, such a paradigm neglects set-level relationships among captions from the same video, not fully capturing the underlying multimodality of the generative process. 
  </summary>
  Describing a video using natural language is an inherently one-to-many translation task. To generate diverse captions, existing VAE-based generative models typically learn factorized latent codes via one-stage training merely from stand-alone video-caption pairs. However, such a paradigm neglects set-level relationships among captions from the same video, not fully capturing the underlying multimodality of the generative process. To overcome this shortcoming, we leverage neighbouring descriptions for the same video that are articulated with noticeable topics and language variations (i.e., paraphrases). To this end, we propose a novel progressive training method by decomposing the learning of latent variables into two stages that are topic-oriented and paraphrase-oriented, respectively. Specifically, the model learns from divergent topic sentences obtained by semantic-based clustering in the first stage. It is then trained again through paraphrases with a cluster-aware adaptive regularization, allowing more intra-cluster variations. Furthermore, we introduce an overall metric DAUM, a D iversity- A ccuracy U nified M etric to consider both the precision of the generated caption set and its coverage on the reference set, which has proved to have a higher correlation with human judgment than previous precision-only metrics. Extensive experiments on three large-scale video datasets show that the proposed training strategy can achieve superior performance in terms of accuracy, diversity, and DAUM over several baselines.
  </details>
  
  [[Paper](https://ieeexplore.ieee.org/document/9999037)] [[CODE](https://github.com/RyanLiut/STR)]

</ProjectCard>

<style lang="stylus">

.projects-page
  background-color #fafbfc

</style>