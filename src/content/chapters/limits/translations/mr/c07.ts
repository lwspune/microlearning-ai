import type { ConceptTranslation } from "../../../../types.ts";

const t = String.raw;

export const c07: ConceptTranslation = {
  id: "C07",
  lang: "mr",
  status: "approved",
  source: "0cacfa424cba94",
  hook: {
    prompt: t`**radian** मोडमध्ये कॅल्क्युलेटर $\frac{\sin 0.001}{0.001} \approx 0.99999$ देतो. **अंश** मोडमध्ये तीच बटणे $0.01745$ देतात. **$x \to 0$ होताना $\frac{\sin x}{x}$ चे limit यांपैकी कोणते दाखवते?**`,
    reveal: t`दोन्ही, वेगवेगळ्या कोनांसाठी. radians मध्ये गुणोत्तर $1$ कडे जाते. अंशांत, $x^\circ$ म्हणजे $\frac{\pi x}{180}$ radians, म्हणून ते $\frac{\pi}{180} \approx 0.01745$ कडे जाते. प्रसिद्ध $1$ साठी radians लागतात.`,
  },
  intuition: [
    t`$\theta \to 0$ होताना, $\sin\theta$ आणि $\theta$ दोन्ही $0$ कडे जातात: $\frac{\sin\theta}{\theta}$ ची सुरुवात अनिश्चित $\frac{0}{0}$ ने होते.`,
    t`**radians** मध्ये मोजल्यास, लहान कोनाचे sine जवळजवळ स्वतः कोनच असते: $\sin 0.1 \approx 0.0998$.`,
    t`म्हणून गुणोत्तर $1$ कडे जाते: $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$.`,
    t`$0$ जवळ $\cos\theta$ हे $1$ च्या जवळ असते, म्हणून $\tan\theta$ हे $\sin\theta$ च्या जवळ असते आणि $\frac{\tan\theta}{\theta} \to 1$ सुद्धा.`,
    t`नियमासाठी वर आणि खाली **तोच** कोन लागतो: $\frac{\sin 5x}{5x} \to 1$.`,
    t`म्हणून $\frac{\sin 5x}{x} = 5 \cdot \frac{\sin 5x}{5x}$, जे $5$ कडे जाते, $1$ कडे नाही.`,
  ],
  formal: [
    {
      title: t`Limit 1 का आहे`,
      points: [
        t`त्रिज्या $1$, केंद्र $O$ असलेले वर्तुळ काढा, आणि $O$ वर कोन $\theta$, जिथे $0 < \theta < \frac{\pi}{2}$.`,
        t`radians मध्ये कंस $AP$ ची लांबी बरोबर $\theta$ असते: radian चा अर्थच हा आहे.`,
        t`उंची $PM = \sin\theta$ कंसापेक्षा लहान आहे, म्हणून $\sin\theta < \theta$.`,
        t`स्पर्शिका $AT = \tan\theta$ कंसापेक्षा लांब आहे, म्हणून $\theta < \tan\theta$.`,
        t`$\sin\theta < \theta < \tan\theta$ ला $\sin\theta$ ने भागून उलटा: $\cos\theta < \frac{\sin\theta}{\theta} < 1$.`,
        t`$\theta \to 0$ होताना $\cos\theta \to 1$, म्हणून गुणोत्तर **दाबले जाऊन** $1$ वर येते; ऋण $\theta$ नेही हेच मिळते.`,
      ],
    },
    {
      title: t`कोन जुळवा`,
      points: [
        t`नियम $0$ कडे जाणाऱ्या कोणत्याही कोन $u$ साठी चालतो: $\lim_{u \to 0}\frac{\sin u}{u} = 1$.`,
        t`$\frac{\sin 3x}{x}$ मध्ये कोन $3x$ आहे, आणि $x \to 0$ होताना $3x \to 0$.`,
        t`$3$ ने गुणा आणि भागा: $\frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x}$.`,
        t`आता कोन आणि छेद जुळतात, म्हणून अपूर्णांक $1$ कडे जातो आणि limit $3$ आहे.`,
        t`सर्वसाधारणपणे $\frac{\sin kx}{x} \to k$ आणि $\frac{\tan kx}{x} \to k$: $k$ वर येतो.`,
        t`गुणोत्तरासाठी, अंश आणि छेदाला $x$ ने भागा: $\frac{\sin 6x}{\sin 2x} \to \frac{6}{2} = 3$.`,
      ],
    },
    {
      title: t`cosine असताना`,
      points: [
        t`$1 - \cos\theta$ म्हणजे $\sin^2\theta$ नव्हे: ती नित्यसमानता $1 - \cos^2\theta = \sin^2\theta$ आहे.`,
        t`अर्धकोन वापरा: $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$.`,
        t`अर्धकोन जुळवा: $\theta^2 = 4\left(\frac{\theta}{2}\right)^2$.`,
        t`म्हणून $\frac{1 - \cos\theta}{\theta^2}$ $= \frac{2}{4}\left(\frac{\sin(\theta/2)}{\theta/2}\right)^2$ $\to \frac{1}{2}$.`,
        t`cosines च्या फरकासाठी, आधी $\cos C - \cos D$ $= -2\sin\frac{C + D}{2}\sin\frac{C - D}{2}$ वापरा.`,
      ],
    },
    {
      title: t`अंशांतील कोन`,
      points: [
        t`Limit $1$ फक्त radians मध्ये खरे आहे, कारण तेव्हाच कंस कोनाच्या बरोबर असतो.`,
        t`$x^\circ$ चा कोन म्हणजे $\frac{\pi x}{180}$ radians, म्हणून $\sin x^\circ = \sin\frac{\pi x}{180}$.`,
        t`जुळवा: $\frac{\sin x^\circ}{x}$ $= \frac{\pi}{180} \cdot \frac{\sin(\pi x/180)}{\pi x/180}$.`,
        t`म्हणून $\lim_{x \to 0}\frac{\sin x^\circ}{x} = \frac{\pi}{180}$, सुमारे $0.01745$.`,
        t`अंशांतील कोनाचे प्रत्येक sine स्वतःचा अवयव $\frac{\pi}{180}$ आणते.`,
      ],
    },
  ],
  worked: {
    prompt: t`$\lim_{x \to 0} \dfrac{\sec x - 1}{x^2}$ चे मूल्य काढा.`,
    steps: [
      t`$\sec x - 1 = \frac{1 - \cos x}{\cos x}$ लिहा, आणि $1 - \cos x = 2\sin^2\frac{x}{2}$ वापरा.`,
      t`म्हणून अपूर्णांक $\frac{2\sin^2(x/2)}{x^2} \cdot \frac{1}{\cos x}$ आहे.`,
      t`कोन $\frac{x}{2}$ जुळवा: $x^2 = 4\left(\frac{x}{2}\right)^2$, म्हणून $\frac{2\sin^2(x/2)}{x^2}$ $= \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2$.`,
      t`$x \to 0$ होताना: $\frac{1}{2} \times 1^2 \times \frac{1}{\cos 0} = \frac{1}{2}$.`,
    ],
    answer: t`$\frac{1}{2}$`,
  },
  remediation: {
    "C07-M1": t`$\frac{\sin u}{u} \to 1$ साठी वर आणि खाली तोच कोन लागतो. $\frac{\sin k\theta}{\theta} = k \cdot \frac{\sin k\theta}{k\theta}$ लिहा, म्हणून ते $k$ कडे जाते.`,
    "C07-M2": t`जुळवण्यासाठी $k$ ने गुणा आणि भागा: $\frac{\sin k\theta}{\theta} = k \cdot \frac{\sin k\theta}{k\theta} \to k$. सहगुणक वर येतो.`,
    "C07-M3": t`$\frac{\sin\theta}{\theta} \to 1$ फक्त radians मध्ये खरे आहे. आधी रूपांतर करा: $x^\circ = \frac{\pi x}{180}$ radians, म्हणून अंशांतील कोनाचे प्रत्येक sine एक अवयव $\frac{\pi}{180}$ आणते.`,
    "C07-M4": t`$1 - \cos^2\theta = \sin^2\theta$, पण $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$. अर्धकोन वापरा, मग $\frac{\theta}{2}$ छेदाशी जुळवा.`,
    "C07-M5": t`$2$ ठेवा: $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$. $\theta = \pi$ ला तपासा: दोन्ही बाजू $2$ आहेत.`,
    "C07-M6": t`$x = 0$ ठेवल्यास $\frac{0}{0}$ मिळते, जे अनिश्चित आहे, $0$ नाही. $\frac{\sin u}{u}$ च्या रूपात पुन्हा लिहा, कोन जुळवा, मग $x \to 0$ होऊ द्या.`,
  },
  solutions: {
    "C07-Q1": [
      t`अंश आणि छेदाला $\theta$ ने भागा: limit म्हणजे $\frac{\sin m\theta}{\theta}$ भागिले $\frac{\tan n\theta}{\theta}$.`,
      t`प्रत्येक कोन जुळवा: $\frac{\sin m\theta}{\theta} = m \cdot \frac{\sin m\theta}{m\theta} \to m$.`,
      t`तसेच $\frac{\tan n\theta}{\theta} = n \cdot \frac{\tan n\theta}{n\theta} \to n$, म्हणून limit $\frac{m}{n}$ आहे.`,
    ],
    "C07-Q2": [
      t`अर्धकोन: $1 - \cos 2\theta = 2\sin^2\theta$.`,
      t`म्हणून अपूर्णांक $2\left(\frac{\sin\theta}{\theta}\right)^2$ आहे: कोन आधीच जुळतो.`,
      t`$\theta \to 0$ होताना ते $2 \times 1^2 = 2$ कडे जाते.`,
    ],
    "C07-Q3": [
      t`$1 - \cos x = 2\sin^2\frac{x}{2}$; अंश आणि छेदाला $x^2$ ने भागा.`,
      t`अंश: $\frac{x \tan x}{x^2} = \frac{\tan x}{x} \to 1$.`,
      t`छेद: $\frac{2\sin^2(x/2)}{x^2}$ $= \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2$ $\to \frac{1}{2}$.`,
      t`Limit $1 \div \frac{1}{2} = 2$ आहे.`,
    ],
    "C07-Q4": [
      t`अर्धकोन: $1 - \cos nx = 2\sin^2\frac{nx}{2}$ आणि $1 - \cos mx = 2\sin^2\frac{mx}{2}$.`,
      t`$x^2$ ने भागून जुळवा: $\frac{\sin(nx/2)}{x} \to \frac{n}{2}$ आणि $\frac{\sin(mx/2)}{x} \to \frac{m}{2}$.`,
      t`Limit $\frac{(n/2)^2}{(m/2)^2} = \frac{n^2}{m^2}$ आहे.`,
    ],
    "C07-Q5": [
      t`$\cos C - \cos D$ $= -2\sin\frac{C + D}{2}\sin\frac{C - D}{2}$, म्हणून अंश $-2\sin 4x^\circ \sin x^\circ$ आहे.`,
      t`radians मध्ये $\sin 4x^\circ = \sin\frac{4\pi x}{180}$, म्हणून $\frac{\sin 4x^\circ}{x} \to \frac{4\pi}{180}$.`,
      t`तसेच $\frac{\sin x^\circ}{x} \to \frac{\pi}{180}$.`,
      t`Limit $-2 \times \frac{4\pi}{180} \times \frac{\pi}{180}$ $= -8\left(\frac{\pi}{180}\right)^2$ आहे.`,
    ],
    "C07-Q6": [
      t`$\sin 2x = 2\sin x\cos x$, म्हणून अंश $2\sin x(1 - \cos x)$ $= 4\sin x\sin^2\frac{x}{2}$ आहे.`,
      t`$x^3 = x \cdot x^2$ असे विभागा; पहिला भाग $\frac{\sin x}{x} \to 1$ आहे.`,
      t`अर्धकोन जुळवा: $\frac{\sin^2(x/2)}{x^2}$ $= \frac{1}{4}\left(\frac{\sin(x/2)}{x/2}\right)^2$ $\to \frac{1}{4}$.`,
      t`Limit $4 \times 1 \times \frac{1}{4} = 1$ आहे.`,
    ],
  },
};
