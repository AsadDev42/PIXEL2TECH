import type { PostBody } from "@/lib/blog-types";

const post = {
  metaTitle: "15 GitHub Repositories to Learn AI (Free Resources)",
  metaDescription:
    "Explore 15 free GitHub repositories for learning AI, from Gemini and TensorFlow to JAX, AI agents, computer vision and reinforcement learning.",
  keyTakeaways: [
    "Choose one repository that matches your current level and interests instead of trying to study everything at once.",
    "Use runnable examples to connect AI concepts with practical code.",
    "Check each repository's README for current setup steps, requirements and project status.",
  ],
  content: [
    {
      heading: "You can learn a lot of AI by building in public code",
      body: [
        "AI moves quickly. New models, frameworks and tutorials appear constantly, and it can be difficult to tell which resources are useful for a beginner and which assume years of experience. The good news is that many AI teams publish their code, learning materials and example projects for free. GitHub lets you learn from those resources by reading the documentation, running examples and changing the code yourself.",
        "The most effective starting point is not a giant reading list. It is one practical question you want to answer: How do I call a generative AI model? What makes an agent different from a chatbot? How does a neural network learn? The repositories below give you places to explore those questions, from introductory notebooks to research tools. Some are beginner-friendly; others make more sense after you know the basics of Python and machine learning.",
      ],
    },
    {
      heading: "Start with generative AI and open models",
      body: [
        "If you want to build applications with language and multimodal models, begin with examples that show the full request and response. These resources help you move beyond prompt experimentation and understand how an application connects to a model.",
      ],
      subsections: [
        {
          heading: "1. Gemini API Cookbook",
          body: [
            "The [Gemini API Cookbook](https://github.com/google-gemini/cookbook) is a collection of practical guides and examples for Google's Gemini API. Explore prompting, embeddings, function calling, multimodal inputs and other API workflows. Run a quickstart first, then adapt it to a small task of your own.",
          ],
        },
        {
          heading: "2. Gemma Cookbook",
          body: [
            "The [Gemma Cookbook](https://github.com/google-gemma/cookbook) focuses on Google's Gemma open models. Its examples can help you explore model use, customization and implementation. Check the repository's README for the latest examples and supported workflows, since model tooling can change quickly.",
          ],
        },
        {
          heading: "3. Generative AI on Google Cloud",
          body: [
            "The [Generative AI on Google Cloud repository](https://github.com/GoogleCloudPlatform/generative-ai) brings together notebooks, sample code and applications. It is useful when you want to understand how generative AI features can be developed and managed within cloud workflows. Some examples may require a cloud project or credentials, so review setup instructions before running them.",
          ],
        },
      ],
    },
    {
      heading: "Explore AI agents and practical patterns",
      body: [
        "An AI agent combines a model with instructions, tools or a workflow so it can take steps toward a task. Agent projects are easier to understand when you begin with a small example and trace what each component does.",
      ],
      subsections: [
        {
          heading: "4. Agent Development Kit for Python",
          body: [
            "The [Agent Development Kit for Python](https://github.com/google/adk-python) is an open-source toolkit for building, evaluating and deploying AI agents. Its documentation and samples can help Python developers learn how to define agents, connect tools and inspect results. Start with a single-agent example before exploring multi-agent workflows.",
          ],
        },
        {
          heading: "5. ADK Recipes",
          body: [
            "The [ADK Recipes repository](https://github.com/google/adk-recipes) contains practical examples built with the Agent Development Kit. Use a recipe to see how an agent project is organized, then follow its components back to the relevant framework documentation. Treat sample code as a learning starting point and confirm its requirements before adapting it for production.",
          ],
        },
      ],
    },
    {
      heading: "Build your machine learning foundations",
      body: [
        "Frameworks make it possible to build useful systems, but a foundation in machine learning helps you understand why those systems behave as they do. These resources span educational material, established frameworks and model implementations.",
      ],
      subsections: [
        {
          heading: "6. DeepMind Educational Resources",
          body: [
            "[Google DeepMind's educational repository](https://github.com/google-deepmind/educational) offers learning resources for people exploring AI and machine learning. Use it to strengthen the ideas behind the code you encounter elsewhere, and work through the material at a pace that lets you explain each concept in your own words.",
          ],
        },
        {
          heading: "7. TensorFlow",
          body: [
            "The [TensorFlow repository](https://github.com/tensorflow/tensorflow) is the home of the TensorFlow framework and a gateway to its learning resources. If you're new to machine learning, begin with a tutorial that includes a complete, runnable example rather than trying to understand the entire framework at once.",
          ],
        },
        {
          heading: "8. TensorFlow Models",
          body: [
            "[TensorFlow Models](https://github.com/tensorflow/models) includes implementations and examples for machine learning tasks such as computer vision and language processing. It is especially useful once you can read basic model code and want to study how a solution is structured. Follow the documentation for each model because setup and dependencies can differ.",
          ],
        },
      ],
    },
    {
      heading: "Go deeper into JAX and model training",
      body: [
        "If you're comfortable with Python, arrays and basic machine learning, the JAX ecosystem offers tools for numerical computing and neural network research. These projects are more technical, but they can help you understand the mechanics behind training and optimization.",
      ],
      subsections: [
        {
          heading: "9. JAX",
          body: [
            "[JAX](https://github.com/jax-ml/jax) provides tools for high-performance numerical computing, including automatic differentiation and transformations that can compile or vectorize functions. Work through an introductory example before using it for a larger model so you understand how its operations differ from a standard NumPy workflow.",
          ],
        },
        {
          heading: "10. Flax",
          body: [
            "[Flax](https://github.com/google/flax) provides neural-network libraries and tools within the JAX ecosystem. Its examples can help you see how models are defined and trained. Learn the basic structure of a neural network first, then use a Flax example to connect those concepts to implementation.",
          ],
        },
        {
          heading: "11. Optax",
          body: [
            "[Optax](https://github.com/google-deepmind/optax) is a gradient-processing and optimization library for JAX. Optimizers influence how a model's parameters change during training, so this repository is most useful once you understand the basics of loss functions, gradients and training loops.",
          ],
        },
        {
          heading: "12. Deep Learning Tuning Playbook",
          body: [
            "The [Deep Learning Tuning Playbook](https://github.com/google-research/tuning_playbook) explains a systematic approach to improving deep learning experiments. Its practical guidance can help you plan what to change, compare runs and avoid drawing conclusions from poorly controlled experiments. The process is useful across frameworks, not just one codebase.",
          ],
        },
      ],
    },
    {
      heading: "Practice with cloud, vision and reinforcement learning",
      body: [
        "Once you've explored a few foundations, choose a project area that motivates you. Cloud workflows, interactive computer vision and reinforcement learning each provide a different way to apply what you've learned.",
      ],
      subsections: [
        {
          heading: "13. Vertex AI Samples",
          body: [
            "[Vertex AI Samples](https://github.com/GoogleCloudPlatform/vertex-ai-samples) offers code examples and notebooks for machine learning workflows on Google Cloud. Browse by task and pick one example with clear setup steps. Some notebooks may use billable cloud resources, so check the listed requirements and costs before launching services.",
          ],
        },
        {
          heading: "14. MediaPipe",
          body: [
            "[MediaPipe](https://github.com/google-ai-edge/mediapipe) provides customizable machine learning solutions for live and streaming media. It is a strong option if you want to build something interactive with vision, audio or other media inputs. Start with a task example that runs on a device or platform you already use.",
          ],
        },
        {
          heading: "15. Dopamine",
          body: [
            "[Dopamine](https://github.com/google/dopamine) is a research framework for reinforcement learning. Reinforcement learning studies how an agent can learn decisions through interaction and feedback. This topic has a steeper learning curve, so it helps to understand basic machine learning and reward-based learning before diving into the experiments.",
          ],
        },
      ],
    },
    {
      heading: "A simple way to learn from a GitHub project",
      body: [
        "Choose one repository that fits your goal. Read the README, confirm the setup steps, then run one example exactly as documented. Once it works, change one input, prompt or configuration at a time and observe the result. This turns browsing into an experiment and makes it easier to understand what caused a change.",
        "Keep a short learning log: what you tried, what happened and what you still don't understand. When you're ready, build a small project that solves a real problem for you. A finished, modest project teaches more than a folder full of half-read notebooks—and it gives you a concrete way to show what you've learned.",
      ],
      bullets: [
        "Start with one example and one learning goal.",
        "Check licences, setup requirements and whether the repository is actively maintained.",
        "Avoid adding credentials or private data to public notebooks and repositories.",
        "Make one change at a time so you can interpret the result.",
      ],
    },
    {
      heading: "Frequently asked questions",
      body: [
        "A few practical answers can help you choose where to begin and what to expect from these resources.",
      ],
    },
  ],
  faqs: [
    {
      q: "Which GitHub repository is best for learning AI as a beginner?",
      a: "Start with a resource that matches your goal. For generative AI, try the Gemini API Cookbook. For machine learning foundations, explore TensorFlow tutorials or DeepMind's educational resources. Begin with one short example and make sure you can explain what it does before moving on.",
    },
    {
      q: "Do I need to know Python before learning AI?",
      a: "You can explore introductory concepts without Python, but many practical AI repositories use it. Basic Python, functions, lists and dictionaries will make it much easier to run and adapt examples. Learn those fundamentals alongside a small project rather than waiting until you feel expert.",
    },
    {
      q: "Are GitHub AI repositories free to use?",
      a: "The repositories listed here are publicly accessible, but their software licences and service requirements differ. Some API examples need paid usage or a cloud account, and some hosted services may incur charges. Read the licence and setup instructions before using code or creating cloud resources.",
    },
    {
      q: "Should I learn TensorFlow or JAX first?",
      a: "Choose based on your goal and current experience. TensorFlow has a broad ecosystem and learning materials. JAX is especially relevant for high-performance numerical computing and research workflows. Beginners can start with whichever framework has the clearest tutorial for their first project; you do not need to learn both at once.",
    },
    {
      q: "How can I tell whether a GitHub repository is still current?",
      a: "Check its README, recent releases or commits, open issues, supported software versions and links to current documentation. A repository can still be valuable for learning even if it is no longer actively maintained, but you should know that before relying on it for a new product.",
    },
    {
      q: "Can I use these repositories for commercial projects?",
      a: "Possibly, but check the licence for each repository and any model, dataset or service it uses. API terms, model terms, third-party dependencies and cloud charges can apply separately. When the intended use is important, get appropriate legal or technical advice before launch.",
    },
  ],
  sources: [
    {
      label: "Google Gemini API Cookbook",
      href: "https://github.com/google-gemini/cookbook",
    },
    {
      label: "Google DeepMind educational resources",
      href: "https://github.com/google-deepmind/educational",
    },
    {
      label: "Google Agent Development Kit for Python",
      href: "https://github.com/google/adk-python",
    },
  ],
  internalLinks: [
    { label: "Can AI Replace Developers?", to: "/blog/can-ai-replace-developers" },
    { label: "Our development services", to: "/services" },
  ],
  cta: {
    title: "Turn an AI idea into a practical product",
    body: "A clear first use case, a small prototype and thoughtful technical choices can help you move from exploration to a useful application.",
  },
} satisfies PostBody;

export default post;
