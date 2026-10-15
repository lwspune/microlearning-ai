import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`A disease affects $1$ person in $100$. A test is positive for $99\%$ of people who have it, and also for $1\%$ of people who don't. You test positive. **Is it $99\%$ likely that you have the disease?**`,
    reveal: t`No, only $50\%$. Picture $10000$ people: $100$ have the disease and $99$ of them test positive; $9900$ don't, and $1\%$ of them, another $99$, test positive too. Of the $198$ positives, only $99$ are ill. By Bayes' theorem, $\frac{(0.01)(0.99)}{(0.01)(0.99) + (0.99)(0.01)} = \frac{1}{2}$.`,
  },
  explanation: {
    intuition: t`An event $A$ can happen through several causes $E_1, E_2, \dots$: a ball can come from bag I or bag II. Each route has probability $P(E_j)\,P(A \mid E_j)$: the chance of the cause, times the chance of $A$ through it. Add the routes and you have $P(A)$. Now work backwards: once $A$ has happened, the chance that it came through $E_i$ is that route's share of the total. A rare cause gets a small share, even when it produces $A$ easily.`,
    formal: t`**The causes.** $E_1, E_2, \dots, E_n$ are mutually exclusive and exhaustive, each with $P(E_j) > 0$. Then $A$ splits into the mutually exclusive pieces $A \cap E_1, \dots, A \cap E_n$, and $P(A \cap E_j) = P(E_j)\,P(A \mid E_j)$. (The book writes $P(A/E_j)$.)

**Total probability.** $$P(A) = P(E_1)\,P(A \mid E_1) + \dots + P(E_n)\,P(A \mid E_n) = \sum_j P(E_j)\,P(A \mid E_j)$$

**Bayes' theorem.** $$P(E_i \mid A) = \frac{P(E_i)\,P(A \mid E_i)}{\sum_j P(E_j)\,P(A \mid E_j)}$$ $P(E_i)$ is the chance before $A$ is seen (the prior); $P(E_i \mid A)$ is the chance after (the posterior).

**Lay it out as a table.** One row per cause: $P(E_j)$, $P(A \mid E_j)$ and their product. The products add up to $P(A)$; each posterior is its row's product divided by that sum. Check: the posteriors add up to $1$.`,
    worked: {
      prompt: t`The chances of X, Y, Z becoming the manager of a company are in the ratio $4 : 2 : 3$. If X, Y, Z becomes manager, a bonus scheme is introduced with probability $0.3$, $0.5$, $0.8$ respectively. The bonus scheme has been introduced. What is the probability that X is the manager?`,
      steps: [
        t`Let $E_1$, $E_2$, $E_3$ be X, Y, Z becoming manager, and $A$ the bonus scheme. The ratio adds to $9$, so $P(E_1) = \frac{4}{9}$, $P(E_2) = \frac{2}{9}$, $P(E_3) = \frac{3}{9}$, and $P(A \mid E_1) = 0.3$, $P(A \mid E_2) = 0.5$, $P(A \mid E_3) = 0.8$.`,
        t`The routes: $\frac{4}{9}(0.3) = \frac{12}{90}$, $\frac{2}{9}(0.5) = \frac{10}{90}$, $\frac{3}{9}(0.8) = \frac{24}{90}$.`,
        t`Total probability: $P(A) = \frac{12 + 10 + 24}{90} = \frac{46}{90} = \frac{23}{45}$.`,
        t`Bayes: $P(E_1 \mid A) = \frac{12/90}{46/90} = \frac{12}{46} = \frac{6}{23}$.`,
      ],
      answer: t`$P(\text{X is manager} \mid \text{bonus}) = \frac{6}{23}$.`,
    },
    visualSpec: t`Drag the chances of the causes and of $A$ on each branch of a probability tree; each route's width shows $P(E_j)\,P(A \mid E_j)$, and a bar splits $P(A)$ into the routes' shares, which are the posteriors.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Swapping the condition: taking $P(A \mid E_k)$, the chance of the result given the cause, as $P(E_k \mid A)$`,
      remediation: t`$P(E_k \mid A)$ and $P(A \mid E_k)$ are different numbers: a test can be positive for almost every sufferer while most positives are not sufferers. Find $P(E_k \cap A) = P(E_k)\,P(A \mid E_k)$ and divide it by the total $P(A)$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M2",
      mistake: t`Leaving out the priors: adding or comparing only the $P(A \mid E_j)$, without the chances $P(E_j)$ of the causes`,
      remediation: t`Each route to $A$ has probability $P(E_j)\,P(A \mid E_j)$, so multiply by the chance of the cause before you add or compare. A rare cause gets a small share even when $P(A \mid E_j)$ is large.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C10-M3",
      mistake: t`Stopping at the numerator: giving $P(E_k)\,P(A \mid E_k) = P(E_k \cap A)$ as $P(E_k \mid A)$`,
      remediation: t`$P(E_k)\,P(A \mid E_k)$ is $P(E_k \cap A)$, only the top of Bayes' formula. Divide it by $P(A)$, the sum over all the causes, to get $P(E_k \mid A)$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M4",
      mistake: "Pooling the bags: treating every ball in every bag as equally likely to be drawn",
      remediation: t`A bag is chosen first, so a ball in a smaller bag is more likely to be drawn than one in a bigger bag. Work out $P(A \mid E_j)$ inside each bag, then weight by the bag's chance: $P(A) = \sum_j P(E_j)\,P(A \mid E_j)$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M5",
      mistake: t`Counting one route only: taking $P(E_k)\,P(A \mid E_k)$ as $P(A)$`,
      remediation: t`$A$ can happen through every cause, and these routes are mutually exclusive. Add $P(E_j)\,P(A \mid E_j)$ over all the causes to get $P(A)$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C10-M6",
      mistake: t`Stopping at the denominator: giving the total $P(A)$ when $P(E_k \mid A)$ is asked`,
      remediation: t`$P(A)$ is only the bottom of Bayes' formula. The question asks what share of $P(A)$ came through $E_k$: divide $P(E_k)\,P(A \mid E_k)$ by $P(A)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C10-M2 gives the key on a $P(E_k \mid A)$ question when the causes are equally likely (a bag chosen at random): diagnose it with unequal priors, or on a $P(A)$ question.`,
    "C10-M4 gives the key when the bags are equally likely and hold the same number of balls (Ex 9.4 Q1): diagnose it with bags of different sizes.",
    t`C10-M3 and C10-M5 give the same number, $P(E_k \cap A)$, on different questions: M3 on a $P(E_k \mid A)$ question, M5 on a $P(A)$ question.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q5" },
      stem: t`Jar I contains $5$ white and $7$ black balls. Jar II contains $3$ white and $12$ black balls. A fair coin is flipped: if it shows Head, a ball is drawn from Jar I; if Tail, from Jar II. The probability that the ball drawn is white is:`,
      verify: { kind: "value", inputs: { pri: "(1/2, 1/2)", fav: "(5, 3)", tot: "(12, 15)", k: "1" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`$\frac{37}{60}$`, correct: false, misconceptionId: "C10-M2", value: "37/60" },
        { key: "B", text: t`$\frac{8}{27}$`, correct: false, misconceptionId: "C10-M4", value: "8/27" },
        { key: "C", text: t`$\frac{5}{24}$`, correct: false, misconceptionId: "C10-M5", value: "5/24" },
        { key: "D", text: t`$\frac{37}{120}$`, correct: true, value: "37/120" },
      ],
      solution: {
        steps: [
          t`Let $H$ be the event that Jar I is used and $T$ that Jar II is used: $P(H) = P(T) = \frac{1}{2}$. For a white ball $W$: $P(W \mid H) = \frac{5}{12}$ and $P(W \mid T) = \frac{3}{15} = \frac{1}{5}$.`,
          t`A white ball comes through Jar I or through Jar II, so $P(W) = \frac{1}{2} \cdot \frac{5}{12} + \frac{1}{2} \cdot \frac{1}{5} = \frac{5}{24} + \frac{1}{10}$.`,
          t`$P(W) = \frac{25}{120} + \frac{12}{120} = \frac{37}{120}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q2" },
      stem: t`A box contains $2$ blue and $3$ pink balls, and another box contains $4$ blue and $5$ pink balls. One of the two boxes is chosen at random and a ball is drawn from it. The ball is pink. The probability that it was drawn from the first box is:`,
      verify: { kind: "value", inputs: { pri: "(1/2, 1/2)", fav: "(3, 5)", tot: "(5, 9)", k: "1" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{27}{52}$`, correct: true, value: "27/52" },
        { key: "B", text: t`$\frac{3}{5}$`, correct: false, misconceptionId: "C10-M1", value: "3/5" },
        { key: "C", text: t`$\frac{3}{8}$`, correct: false, misconceptionId: "C10-M4", value: "3/8" },
        { key: "D", text: t`$\frac{26}{45}$`, correct: false, misconceptionId: "C10-M6", value: "26/45" },
      ],
      solution: {
        steps: [
          t`Let $E_1$, $E_2$ be choosing the first and the second box, $P(E_1) = P(E_2) = \frac{1}{2}$, and $A$ a pink ball: $P(A \mid E_1) = \frac{3}{5}$, $P(A \mid E_2) = \frac{5}{9}$.`,
          t`Total probability: $P(A) = \frac{1}{2} \cdot \frac{3}{5} + \frac{1}{2} \cdot \frac{5}{9} = \frac{27}{90} + \frac{25}{90} = \frac{52}{90}$.`,
          t`Bayes: $P(E_1 \mid A) = \frac{27/90}{52/90} = \frac{27}{52}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc II Q22" },
      stem: t`In a bulb factory, machines A, B and C make $25\%$, $35\%$ and $40\%$ of the bulbs. Of their outputs, $5\%$, $4\%$ and $2\%$ respectively are defective. A bulb drawn at random is found to be defective. The probability that it was made by machine B is:`,
      verify: { kind: "value", inputs: { pri: "(1/4, 7/20, 2/5)", lik: "(1/20, 1/25, 1/50)", k: "2" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{7}{500}$`, correct: false, misconceptionId: "C10-M3", value: "7/500" },
        { key: "B", text: t`$\frac{28}{69}$`, correct: true, value: "28/69" },
        { key: "C", text: t`$\frac{1}{25}$`, correct: false, misconceptionId: "C10-M1", value: "1/25" },
        { key: "D", text: t`$\frac{4}{11}$`, correct: false, misconceptionId: "C10-M2", value: "4/11" },
      ],
      solution: {
        steps: [
          t`Let $E_1$, $E_2$, $E_3$ be the bulb coming from A, B, C and $D$ a defective bulb: $P(E_j) = 0.25, 0.35, 0.40$ and $P(D \mid E_j) = 0.05, 0.04, 0.02$.`,
          t`The routes: $0.25 \times 0.05 = 0.0125$, $0.35 \times 0.04 = 0.014$, $0.40 \times 0.02 = 0.008$, so $P(D) = 0.0345$.`,
          t`Bayes: $P(E_2 \mid D) = \frac{0.014}{0.0345} = \frac{140}{345} = \frac{28}{69}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q7" },
      stem: t`Of the sick children in an area, $80\%$ have flu and $20\%$ have measles; there is no other disease. A child with measles has a rash with probability $0.95$; a child with flu has a rash with probability $0.08$. A sick child is found to have a rash. The probability that the child has measles is:`,
      verify: { kind: "value", inputs: { pri: "(4/5, 1/5)", lik: "(2/25, 19/20)", k: "2" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{19}{100}$`, correct: false, misconceptionId: "C10-M3", value: "19/100" },
        { key: "B", text: t`$\frac{127}{500}$`, correct: false, misconceptionId: "C10-M6", value: "127/500" },
        { key: "C", text: t`$\frac{95}{127}$`, correct: true, value: "95/127" },
        { key: "D", text: t`$\frac{95}{103}$`, correct: false, misconceptionId: "C10-M2", value: "95/103" },
      ],
      solution: {
        steps: [
          t`Let $F$ be flu and $M$ measles, $P(F) = 0.8$, $P(M) = 0.2$, and $R$ a rash: $P(R \mid F) = 0.08$, $P(R \mid M) = 0.95$.`,
          t`The routes: $0.8 \times 0.08 = 0.064$ and $0.2 \times 0.95 = 0.19$, so $P(R) = 0.254$.`,
          t`Bayes: $P(M \mid R) = \frac{0.19}{0.254} = \frac{190}{254} = \frac{95}{127}$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q8" },
      stem: t`$2\%$ of a population have a blood disease in a serious form, $10\%$ in a mild form, and $88\%$ don't have it. A test is positive with probability $\frac{9}{10}$ for the serious form, $\frac{6}{10}$ for the mild form, and $\frac{1}{10}$ without the disease. A person tests positive. The probability that they have the serious form is:`,
      verify: { kind: "value", inputs: { pri: "(1/50, 1/10, 22/25)", lik: "(9/10, 3/5, 1/10)", k: "1" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{9}{83}$`, correct: true, value: "9/83" },
        { key: "B", text: t`$\frac{9}{10}$`, correct: false, misconceptionId: "C10-M1", value: "9/10" },
        { key: "C", text: t`$\frac{9}{500}$`, correct: false, misconceptionId: "C10-M3", value: "9/500" },
        { key: "D", text: t`$\frac{83}{500}$`, correct: false, misconceptionId: "C10-M6", value: "83/500" },
      ],
      solution: {
        steps: [
          t`Let $S$, $M$, $N$ be the serious form, the mild form and no disease: $P(S) = 0.02$, $P(M) = 0.10$, $P(N) = 0.88$. A positive test $T$ has $P(T \mid S) = 0.9$, $P(T \mid M) = 0.6$, $P(T \mid N) = 0.1$.`,
          t`The routes: $0.02 \times 0.9 = 0.018$, $0.10 \times 0.6 = 0.06$, $0.88 \times 0.1 = 0.088$, so $P(T) = 0.166$.`,
          t`Bayes: $P(S \mid T) = \frac{0.018}{0.166} = \frac{18}{166} = \frac{9}{83}$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc I Q7" },
      stem: t`The probability that a student knows the correct answer to a multiple choice question is $\frac{2}{3}$. If the student does not know it, they guess, and a guess is correct with probability $\frac{1}{4}$. Given that the student answered correctly, the probability that they knew the answer is:`,
      verify: { kind: "value", inputs: { pri: "(2/3, 1/3)", lik: "(1, 1/4)", k: "1" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{8}{9}$`, correct: true, value: "8/9" },
        { key: "B", text: t`$\frac{4}{5}$`, correct: false, misconceptionId: "C10-M2", value: "4/5" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C10-M3", value: "2/3" },
        { key: "D", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C10-M6", value: "3/4" },
      ],
      solution: {
        steps: [
          t`Let $K$ be knowing the answer and $G$ guessing: $P(K) = \frac{2}{3}$, $P(G) = \frac{1}{3}$. For a correct answer $C$: $P(C \mid K) = 1$, $P(C \mid G) = \frac{1}{4}$.`,
          t`Total probability: $P(C) = \frac{2}{3} \cdot 1 + \frac{1}{3} \cdot \frac{1}{4} = \frac{8}{12} + \frac{1}{12} = \frac{3}{4}$.`,
          t`Bayes: $P(K \mid C) = \frac{2/3}{3/4} = \frac{8}{9}$.`,
        ],
      },
    },
  ],
};
