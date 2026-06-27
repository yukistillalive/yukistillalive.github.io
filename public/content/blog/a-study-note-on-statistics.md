## Concepts in power analysis

Basic components: size effect, power, alpha, beta, sample size (https://www.statisticssolutions.com/components-of-power-analysis/)
- Effect size ($f$) is a quantitative measure of the magnitude of a phenomenon, such as the strength of a relationship between two variables or the difference between group means. It tells us “how much” of an effect is present, which is distinct from statistical significance (i.e., whether an effect is likely not due to chance). A larger effect size is generally easier to detect, meaning a smaller sample size might suffice to achieve adequate power.
- $\eta^2$ (Eta squared) is observed effect size, used for comparison with $f$.

### Types of power analysis:
- A prior: use when have enough sample size, to determine the minimum sample size ($N$) needed to detect a specific effect size.
- Post hoc: use this to evaluate if a non-significant result was likely due to a truly absent effect or simply a sample that was too small (low power), use when power is close to 0.8 (moderate power), to calculate the observed power based on the sample size you actually used and the effect size you actually found.
- Senstivity: use when sample size was fixed or limited，define the threshold of size effect detected given sample size and power (usually 0.8 medorate effect is acceptable)

Interpreting Effect Sizes (Cohen, 2013; https://www.statisticssolutions.com/components-of-power-analysis/)
| Test Type | Effect Size Measure | Small | Medium | Large |
|---|---|---:|---:|---:|
| t-test (2 means) | Cohen’s d | 0.20 | 0.50 | 0.80 |
| Correlation (Relationship) | Pearson’s r | 0.10 | 0.30 | 0.50 |
| (M)AN(C)OVA (F-tests)| Partial ηp2 | 0.01 | 0.06 | 0.14 |
| G*Power (F-tests) | Cohen’s f | 0.10 | 0.25 | 0.40 |
* Note that Partial ηp2 is observed in data while Cohen’s f is standard deviations for power analysis: $$f = \sqrt{\frac{\eta_p^2}{1 - \eta_p^2}}$$
* In a MANCOVA, the "Multivariate" effect size is often reported as Pillai's Trace or a multivariate version of $\eta_p^2$

Cohen, J. (1988). Statistical power analysis for the behavioral sciences (2nd ed.). Lawrence Erlbaum Associates.

## Choosing Between MANCOVA, Parallel ANCOVAs, and rm-ANCOVA
MANCOVA
- Use when have multiple conceptually related DVs in a between-subjects design and want to test them jointly while controlling for one or more covariates.
- use when sample size is adequate
- DVs share a theoretical family but are distinct enough to keep separate, moderately correlated (r ≈ .30–.70)
- Can better control Type I error before interpreting individual DVs
- Key assumptions to check: homogeneity of regression slopes per DV, Box's M for covariance homogeneity, multivariate normality.

Parallel ANCOVAs
- Use when have multiple DVs in a between-subjects design but want to test each separately, either because the DVs are conceptually distinct, sample size is limited, or simplicity of reporting is a priority.
- Maybe consider using Bonferroni correction
- Key assumption to check: homogeneity of regression slopes for each DV individually.

rm-ANCOVA
- Use when the same participants are measured on the same construct multiple times, either across time points (pre/post), conditions (within-subjects), or both (mixed design).

## Main Effect, Interaction (Moderation) Effect, and Mediation Effect

Main Effect
- A main effect is the direct, average effect of one variable on an outcome, ignoring all other variables. It answers the question: does X affect Y, on average across everyone?

Interaction Effect (Moderation Effect)
- An interaction effect occurs when the relationship between X and Y depends on the level of a third variable Z. Z is called the moderator. It answers the question: does the effect of X on Y differ for different people or contexts?
- A good explanation of interaction effect and main effect in factorial studies using graphs (https://www.youtube.com/watch?v=ivCv9vMTq-g). The presenter analvzes data comparing kevboard performance whiestanding or sitting.

Mediation Effect
- A mediation effect occurs when X affects Y through an intermediate variable M, called the mediator. It answers the question: why or how does X affect Y, what is the mechanism?