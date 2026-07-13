const POSTS = [
  {
    slug: "building-in-public-what-my-current-project-is-teaching-me",

    title: "Building in Public: What My Current Project Is Teaching Me",

    desc: "A long-form, honest walkthrough of why I stopped hiding unfinished work, what my current project actually looks like behind the scenes, the mistakes I've made sharing it, and the lessons that only show up when you build in front of people instead of behind closed doors.",

    date: "2026-07-13",

    tags: ["build-in-public", "react", "software-development", "career", "github", "web-development"],

    readingTime: "13 min read",

    content: `
    <p>
      I used to think "building in public" meant posting a nice screenshot once a project was basically done, with a caption that made it sound harder than it was. I don't think that anymore. What I've actually been doing for the last few months looks nothing like a highlight reel — it looks like a running log of a project that is, most days, half-broken, half-decided, and half-mine to figure out.
    </p>

    <p>
      This post is about that project. Not the polished version I'll eventually put in a portfolio, but the one that exists right now, today, with all its unresolved decisions still sitting on my desk. I want to walk through what it is, why I started talking about it before it was ready, what's gone wrong along the way, and the specific things it's taught me that no course or tutorial ever did.
    </p>

    <img
    src="current-project.jpeg"
    alt="Laptop with a React dashboard, VS Code, and GitHub open on a desk with a notebook and coffee"
    style="width:85%; border-radius:16px; margin:20px 0;"
   >

    <h2>Where This Started</h2>
    <p>
      A few months ago I sat down to build what I thought would be a small, contained side project — a dashboard app to track a handful of metrics I cared about. Nothing complicated. React on the frontend, a small Node API behind it, a database with maybe four tables. I figured a weekend, two at most.
    </p>

    <p>
      That estimate was wrong in almost every direction. Not because the idea was bad, but because I hadn't actually thought through what the dashboard needed to do once real data started flowing through it. The schema I designed on day one didn't survive contact with the actual use case. I rewrote it twice. The component structure I was proud of in week one became something I was quietly embarrassed by in week three, once I understood the app better than I did when I first sketched it out.
    </p>

    <p>
      None of that is a complaint. It's just what building something actually looks like once you're past the planning stage and into the part where the project starts teaching you things you didn't know you needed to learn.
    </p>

    <h2>What the Project Actually Looks Like Right Now</h2>
    <p>
      If you walked past my desk on a normal day, here's what you'd see: the app running in one browser tab, the editor open with three or four files I'm actively switching between, a terminal quietly tailing logs so I can catch errors as they happen instead of after the fact, and a notebook off to the side that's become more important to this project than I expected it to be.
    </p>

    <p>
      That notebook isn't for polished notes. It's where I sketch out how a feature is supposed to connect to the rest of the system before I let myself start typing code. More than once, the act of drawing a rough diagram of how two components were supposed to talk to each other has stopped me from building something that technically worked but didn't actually fit anywhere. Cheap insurance, in hindsight.
    </p>

    <p>
      The dashboard itself, as it stands today, is not finished. The authentication flow works but needs another pass before I'd trust it in front of real users. The mobile layout breaks in a few places I haven't gotten around to fixing. And I'm still not fully convinced the current data structure will hold up if the project grows the way I'm hoping it will. All of that is true right now, while I'm writing this, and I'm choosing to say so instead of waiting until it isn't.
    </p>

    <h2>Why I Stopped Waiting Until It Was "Ready"</h2>
    <p>
      For years, my default was to keep projects private until they felt presentable. Presentable meant no visible bugs, a UI I wasn't self-conscious about, and code I could explain without flinching. The problem is that "presentable" is a moving target. The more I learned, the higher I set the bar for what counted as good enough to show anyone — which meant I almost never showed anything.
    </p>

    <p>
      What finally broke that pattern wasn't confidence. It was noticing that keeping a project private wasn't actually making it better. When nobody sees the work, there's no real pressure to explain a decision clearly, which means it's easy to convince yourself a shortcut is fine when it isn't. Nobody was asking why a component re-rendered three times more than it should have, or why an API call had no error handling at all. In private, sloppy work and good work can look identical, because there's no outside eye checking the difference.
    </p>

    <p>
      Sharing progress changed that almost immediately. Writing a short update about what I'd built that week meant I had to actually put the decision into words. And explaining a decision out loud — even briefly, even in a caption — turns out to be one of the fastest ways to notice that it was the wrong one.
    </p>

    <h2>The Mistakes That Came With Sharing Early</h2>
    <p>
      It hasn't been smooth. Early on, I posted an update showing a feature I was proud of, only to realize a day later that the "working" demo had a bug that made the whole thing meaningless under slightly different conditions. That was uncomfortable. My instinct was to quietly delete the post and pretend it hadn't happened.
    </p>

    <p>
      I didn't, mostly because I couldn't think of a good reason to. The bug wasn't a moral failing, it was just an incomplete understanding of my own system — which is exactly the kind of thing that gets fixed faster when it's visible than when it's hidden. So instead of deleting it, I posted the fix, along with what I'd missed the first time. That turned out to be more useful to write, and probably more useful to read, than the original "look what I built" post ever was.
    </p>

    <p>
      That's become something of a pattern. The updates that get the most honest engagement aren't the ones where everything worked. They're the ones where something broke, I said so, and then showed what I did about it.
    </p>

    <h2>The Lessons That Actually Stuck</h2>
    <p>
      Going into this, I assumed building in public would mostly sharpen my technical skills — better React patterns, cleaner backend structure, that sort of thing. It has done some of that. But the lessons that have actually stuck with me have been less about syntax and more about process.
    </p>

    <ul>
      <li><b>Cleaner structure comes from revisiting old decisions</b>, not from getting the architecture right on the first attempt. Every rewrite taught me something the original version couldn't have.</li>
      <li><b>A better UI usually means removing something</b>, not adding another button, panel, or option. Most of my early "improvements" were actually just more clutter dressed up as features.</li>
      <li><b>Debugging gets faster once you stop assuming</b> the bug is where you think it is. Some of my longest debugging sessions ended in a file I hadn't even suspected.</li>
      <li><b>User experience problems are usually unclear assumptions</b> about what someone actually needs, not a lack of polish. Fixing the assumption fixed the experience faster than any styling change did.</li>
      <li><b>Most real problem solving happens before the first line of code</b>, in the thinking, sketching, and questioning that comes before you touch the keyboard.</li>
    </ul>

    <p>
      None of these showed up in a tutorial, and I don't think they could have. They showed up after I shipped something rough, sat with it for a week, came back with fresh eyes, and asked what I'd actually change now that I understood the problem better than I did when I started.
    </p>

    <h2>Why Progress Beats Perfection, Even When It's Uncomfortable</h2>
    <p>
      There's a specific kind of discomfort in posting a screenshot of code you know isn't finished, or admitting that a feature you announced last week is being reworked because it wasn't right. Part of me still wants to wait until something is impressive before I talk about it.
    </p>

    <p>
      But waiting for impressive usually means waiting indefinitely, because the goalposts move every single time you learn something new. The version of the dashboard I was proud of in month one looks unfinished to me now — and the version I finish next month will probably look the same way in hindsight. If I waited for a version I wouldn't want to improve, I'd never post anything at all.
    </p>

    <p>
      So instead, the rule I've settled on is simple: share the version that exists today, say plainly what's still broken, and let the next update show the difference. That contrast — here's where it was, here's where it is now — has taught me more about my own growth than any single finished project ever has.
    </p>

    <h2>Where the Project Stands Today</h2>
    <p>
      As of right now, the dashboard authenticates users, but the flow needs another pass before I'd call it solid. The core metrics view works on desktop and breaks in a couple of predictable ways on smaller screens. The database schema is on its third version, and I still catch myself wondering if it'll need a fourth once more real usage comes through it.
    </p>

    <p>
      I'm not waiting for those things to be resolved before talking about the project, and I'm not going to start now. The point of building in public, at least the way I've come to understand it, was never to perform confidence I don't have. It was to make the actual process visible — the parts that work, the parts that don't yet, and the thinking in between.
    </p>

    <h2>A Question Back to You</h2>
    <p>
      If you're building something right now, at whatever stage it's at, I'd genuinely like to know what it is. Not the version you're planning to show once it's finished — the one sitting on your desk today, unfinished and a little uncertain, exactly like mine.
    </p>

    <p>
      What's the project you're currently working on, and what's the part of it you haven't figured out yet?
    </p>
  `.trim(),
  },

  {
    slug: "ai-is-not-replacing-developers-its-changing-how-they-work",

    title: "AI Isn't Replacing Developers — It's Changing How They Work",

    desc: "A professional, in-depth look at how AI tools are reshaping the daily workflow of software engineers — from writing code to directing it — and why critical thinking, system design, and human judgment remain the real competitive edge in 2026.",

    date: "2026-07-10",

    tags: ["ai", "software-engineering", "career", "web-development"],

    readingTime: "9 min read",

    content: `
    <p>
      Every few months, a new wave of headlines resurfaces the same question:
      <b>will AI replace software developers?</b>
      It is asked by students worried about their future, by junior developers watching AI write code faster than they can, and by senior engineers trying to figure out how to lead teams in a landscape that keeps shifting under their feet.
    </p>

    <p>
      It is a fair question. But it is also, in many ways, the wrong one.
      The more useful question is not <i>whether</i> AI will replace developers, but <i>how</i> it is already changing what it means to be one — and what that means for anyone building a career in software today.
    </p>

    <img
    src="ai-post.png"
    alt="Software engineer working with AI coding assistant across multiple monitors"
    style="width:85%; border-radius:16px; margin:20px 0;"
   >

    <h2>The Fear Is Understandable — But It's Based on the Wrong Comparison</h2>
    <p>
      Much of the anxiety around AI in software development comes from comparing AI to a developer as a whole person.
      But that is not really what AI does. AI does not understand a client's business goals, does not sit in a sprint planning meeting, does not weigh trade-offs between speed and maintainability, and does not take responsibility when a system fails in production.
    </p>

    <p>
      What AI actually replaces is narrower and more specific: repetitive, well-defined, pattern-based work.
      Writing boilerplate functions, generating standard CRUD endpoints, recalling syntax, formatting code, and producing first-draft implementations of well-known patterns — this is where AI has become genuinely powerful.
      And this is precisely the kind of work that used to consume a large share of a developer's day without adding much unique value.
    </p>

    <h2>From Writing Every Line to Directing the Work</h2>
    <p>
      A few years ago, a large part of a developer's time was spent typing — searching documentation, recalling syntax, and manually debugging small, repetitive issues line by line.
      Today, AI coding assistants can generate that boilerplate in seconds, suggest fixes, explain unfamiliar code, and even scaffold entire features from a short description.
    </p>

    <p>
      This shift does not remove the developer from the process. It moves them up a level.
      Instead of typing every line, developers are increasingly responsible for <b>directing, reviewing, and validating</b> what AI produces.
      In practice, this looks like:
    </p>

    <ul>
      <li>Describing a problem precisely enough for AI to generate a useful first draft</li>
      <li>Reading AI-generated code critically instead of accepting it at face value</li>
      <li>Catching subtle bugs, security issues, or bad assumptions the AI introduced</li>
      <li>Deciding whether a suggested approach actually fits the wider system</li>
      <li>Refactoring AI output into something that matches the team's standards and architecture</li>
    </ul>

    <p>
      This is a fundamentally different skill set than simply "knowing how to code."
      It requires a developer to understand a codebase deeply enough to spot when something looks right but isn't — which is often harder than writing the code from scratch.
    </p>

    <h2>What AI Cannot Do</h2>
    <p>
      AI is excellent at pattern recognition, code generation, and speeding up familiar, well-documented tasks.
      But software engineering has never really been just "writing code." It is the process of turning ambiguous human problems into working, maintainable systems — and that process depends on abilities AI does not have.
    </p>

    <p>
      A few of these stand out clearly:
    </p>

    <ul>
      <li><b>Critical thinking</b> — knowing which problem is actually worth solving, and which requirements are assumptions in disguise.</li>
      <li><b>Problem solving</b> — breaking down ambiguous, real-world requirements into a working, testable solution.</li>
      <li><b>System design</b> — deciding how components fit together, scale under load, and stay maintainable years after launch.</li>
      <li><b>Judgment</b> — recognizing when an AI-generated suggestion is clever but wrong for this specific context, team, or business.</li>
      <li><b>Accountability</b> — owning the outcome when a decision turns out to be wrong, something no tool can do on a developer's behalf.</li>
    </ul>

    <p>
      These are the skills that separate a developer who merely uses AI from a developer who builds real, reliable software with it.
      They are also, not coincidentally, the skills that were always the hardest part of the job — writing syntactically correct code was never the true bottleneck in software engineering; understanding the problem always was.
    </p>

    <h2>Using AI as a Productivity Partner, Not a Shortcut</h2>
    <p>
      There is an important difference between using AI to move faster and using AI to avoid understanding.
      Used well, AI becomes a tool for brainstorming ideas, debugging faster, exploring unfamiliar concepts, and reducing the time spent on tasks that do not require deep judgment.
      Used poorly, it becomes a way to ship code nobody on the team, including the person who "wrote" it, actually understands.
    </p>

    <p>
      This distinction matters more than it might seem, especially early in a developer's career.
      A developer who copies AI-generated code without understanding it is building on sand — the moment something breaks in a way the AI did not anticipate, they have no foundation to debug from.
      A developer who uses AI to accelerate work they already understand is building faster, on solid ground, and using the time saved to think about the parts of the problem that actually need a human mind.
    </p>

    <h2>Why Fundamentals Matter More, Not Less</h2>
    <p>
      It is tempting to think that if AI can write code, fundamentals like data structures, algorithms, and clean architecture matter less than before.
      In practice, the opposite is true.
    </p>

    <p>
      AI-generated code still needs to be evaluated, and evaluation requires a strong baseline understanding of how software actually works.
      A developer with weak fundamentals cannot reliably tell the difference between an elegant AI suggestion and a subtly broken one.
      They can prompt a tool, but they cannot judge its output — and judgment is the part of the job that determines whether software actually works in the real world, under real constraints, at scale.
    </p>

    <p>
      In this sense, AI has not lowered the bar for what a serious developer needs to know. It has raised it, by removing the easiest, most mechanical tasks and leaving behind the ones that require genuine understanding.
    </p>

    <h2>What Will Set Developers Apart in 2026 and Beyond</h2>
    <p>
      As AI tools become a standard part of every development workflow, the gap between developers will not be defined by who has access to AI — almost everyone will.
      The real gap will be defined by who can combine technical skill with sound decision-making, communication, and product sense.
    </p>

    <p>
      The developers who stand out going forward will be the ones who can:
    </p>

    <ul>
      <li>Think critically about a problem before reaching for a tool to solve it</li>
      <li>Solve real, messy, real-world problems — not just textbook exercises</li>
      <li>Understand system design well enough to guide AI output rather than follow it blindly</li>
      <li>Communicate clearly with teammates, clients, and stakeholders about trade-offs</li>
      <li>Treat AI as a productivity partner, not a replacement for understanding</li>
      <li>Keep learning as tools, frameworks, and best practices continue to evolve</li>
    </ul>

    <p>
      Notice that none of these are new skills invented by the AI era. They are the same skills that have always defined strong engineers.
      What has changed is how much they matter relative to raw typing speed or syntax memorization, both of which have become far less valuable almost overnight.
    </p>

    <h2>A Practical Mindset for Working With AI</h2>
    <p>
      For developers, students, and early-career engineers navigating this shift, a few practical habits make the difference between falling behind and getting ahead:
    </p>

    <ul>
      <li>Use AI to explain unfamiliar code or concepts, not just to generate new code</li>
      <li>Always read and understand AI-generated output before committing it</li>
      <li>Practice solving problems without AI occasionally, to keep core skills sharp</li>
      <li>Ask "why" a suggested solution works, not just "does" it work</li>
      <li>Focus learning time on system design, architecture, and debugging — the areas AI struggles with most</li>
    </ul>

    <h2>Final Thoughts</h2>
    <p>
      AI is changing software development, and that change is already here. But change is not the same as replacement.
      The tools developers use have always evolved — from assembly to high-level languages, from manual servers to the cloud, and now from manual coding to AI-assisted development.
      Each shift changed the day-to-day work of a developer without eliminating the need for one.
    </p>

    <p>
      What has not changed is the value of a developer who can think clearly, design well, communicate effectively, and make good decisions under uncertainty.
      That is the part of software engineering AI is unlikely to fully replace anytime soon — and it is the part most worth investing in, regardless of how fast the tools around it continue to change.
    </p>
  `.trim(),
  },
  
  {
    slug: "who-is-nifad-hasan-eimu",
    title: "Who is Nifad Hasan Eimu?",
    desc: "A detailed introduction to Nifad Hasan Eimu — Software Engineering student, aspiring web developer, problem solver, and future-focused tech enthusiast from Bangladesh.",
    date: "2026-03-12",
    tags: ["about", "career", "portfolio"],
    readingTime: "8 min read",
    content: `
    <p>
      <b>Nifad Hasan Eimu</b> is a passionate <b>Software Engineering student</b>, aspiring <b>web developer</b>, and future-focused technology enthusiast from Bangladesh.
      He is currently pursuing his <b>BSc in Software Engineering at Daffodil International University</b>, where he is building a strong academic and practical foundation in programming, software development, problem-solving, and modern web technologies.
    </p>

    <p>
      More than just a student, Nifad represents a new generation of learners who are not satisfied with only completing university courses.
      He believes that in today’s competitive world, real success comes from combining <b>academic knowledge, practical skills, communication ability, and personal branding</b>.
      That mindset is what makes his journey different.
    </p>

    <img
      src="/Nifad Hasan Eimu.jpeg"
      alt="Modern software engineering workspace with laptop"
      style="width:40%; border-radius:16px; margin: 20px 0;"
    />

    <h2>Academic Identity and Learning Mindset</h2>
    <p>
      As a Software Engineering student at <b>Daffodil International University (DIU)</b>, Nifad has been consistently developing his understanding of how software is planned, designed, implemented, and improved.
      His academic journey is not limited to memorizing theory. Instead, he focuses on understanding how each concept connects to real-world software systems.
    </p>

    <p>
      Through his coursework and independent study, he has explored important topics such as <b>Structured Programming, Data Structures, Discrete Mathematics, Software Design Concepts, Logic Building, and Problem Solving</b>.
      These subjects have helped him develop a disciplined approach toward coding and system thinking.
    </p>

    <h2>Technical Skills and Development Focus</h2>
    <p>
      Nifad’s technical journey began with learning the fundamentals of programming and gradually expanded toward modern development.
      He has worked with technologies such as <b>C, Java, HTML, CSS, and JavaScript</b>, and he is also actively building his path toward becoming a stronger <b>frontend and full-stack web developer</b>.
    </p>

    <p>
      He believes that in the age of AI, the most powerful developers are those who understand the <b>fundamentals</b>.
      That is why he values raw coding, logic building, debugging, data handling, and system understanding rather than depending blindly on automation tools.
      For him, AI is a tool that increases productivity—but strong fundamentals are what create mastery.
    </p>

    <p>
      His growing interest in <b>React and the MERN stack</b> reflects his goal of building real-world, scalable, and professional web applications.
      He is particularly interested in clean user interfaces, maintainable code structure, practical project architecture, and websites that are both functional and visually strong.
    </p>

    <h2>Projects That Reflect His Growth</h2>
    <p>
      One of the strongest parts of Nifad’s journey is that he does not just learn concepts—he tries to apply them through projects.
      Over time, he has worked on multiple academic and practical software ideas that helped him improve his coding confidence and project-thinking ability.
    </p>

    <p>
      Some of the projects and project directions he has explored include:
    </p>

    <ul>
      <li><b>Health Care Management System in C</b> — a large in-memory project designed with multiple roles and practical functionality.</li>
      <li><b>Mini Library Management System</b> — created for structured programming lab work, focusing on logic, data types, arrays, strings, and functions.</li>
      <li><b>Software Engineering modeling work</b> — including use cases, requirement analysis, and traceability-related academic tasks.</li>
      <li><b>Portfolio and web presence building</b> — focusing on professional presentation, SEO basics, and personal branding through a modern web portfolio.</li>
    </ul>

    <p>
      These experiences helped him understand something very important: software engineering is not only about writing code that runs.
      It is about building systems that are understandable, usable, and purposeful.
    </p>

    <h2>Beyond Coding: Personal Branding and Communication</h2>
    <p>
      What makes Nifad especially unique is that he does not see himself as “just a coder.”
      He understands that in today’s digital world, your <b>presentation, communication, and professional identity</b> matter just as much as your technical skills.
    </p>

    <p>
      He has a strong interest in <b>presentation skills, career development, remote work readiness, and building a recognizable professional online presence</b>.
      This is one of the reasons he is actively working on his portfolio, improving his blog content, and refining how he presents himself to recruiters, clients, collaborators, and future opportunities.
    </p>

    <p>
      He believes that a strong developer should be able to:
    </p>

    <ul>
      <li>Write clean and understandable code</li>
      <li>Explain ideas clearly</li>
      <li>Present projects professionally</li>
      <li>Build trust through consistency and quality</li>
      <li>Continuously learn and adapt</li>
    </ul>

    <h2>His Vision for the Future</h2>
    <p>
      Nifad Hasan Eimu is building himself with a long-term vision.
      His goal is not only to become a graduate, but to become a <b>high-value software professional</b> who can compete globally.
      He wants to grow into a developer who can work on meaningful products, build strong web applications, contribute to real teams, and create solutions that make a difference.
    </p>

    <p>
      He is especially interested in opportunities that combine <b>software engineering, modern web development, problem solving, and international remote work</b>.
      With every semester, every project, and every new skill, he is moving closer to that goal.
    </p>

    <h2>Final Words</h2>
    <p>
      So, who is Nifad Hasan Eimu?
    </p>

    <p>
      He is a student—but not only a student.
      He is a learner, a builder, a future software engineer, and a young professional shaping his path with consistency, ambition, and vision.
      He is someone who believes that with the right mix of <b>knowledge, discipline, communication, and execution</b>, a student from Bangladesh can build a career that reaches far beyond borders.
    </p>

    <p>
      This is not just the story of who he is today.
      It is the beginning of who he is becoming.
    </p>
  `.trim(),
  },
  {
    slug: "my-journey-as-a-software-engineering-student-at-diu",
    title:
      "My Journey as a Software Engineering Student at Daffodil International University",
    desc: "A detailed reflection on my growth, learning, challenges, projects, and future vision as a Software Engineering student at Daffodil International University.",
    date: "2026-02-22",
    tags: ["journey", "software-engineering", "diu"],
    readingTime: "9 min read",
    content: `
    <p>
      My journey as a <b>Software Engineering student at Daffodil International University</b> has been more than an academic experience.
      It has been a journey of growth, discipline, self-discovery, and preparation for the future I want to build.
      Every semester, every class, every project, and every challenge has shaped the way I think—not only as a student, but as an aspiring software professional.
    </p>

    <p>
      When I first started this journey, I had excitement, curiosity, and a dream.
      Like many students entering the world of technology, I knew software was powerful, but I did not yet fully understand how deep and meaningful this field really is.
      Over time, that curiosity turned into commitment.
    </p>

    <img
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
      alt="Students learning together in university"
      style="width:100%; border-radius:16px; margin: 20px 0;"
    />

    <h2>Starting with Curiosity</h2>
    <p>
      In the beginning, Software Engineering felt like a huge world.
      There were programming languages, logic, algorithms, software models, debugging, data structures, mathematics, and many other concepts that seemed challenging at first.
      But I realized something important very early: if I stayed consistent and kept practicing, difficult things would eventually become understandable.
    </p>

    <p>
      That realization changed my mindset.
      Instead of being afraid of hard topics, I started seeing them as steps in my growth.
      Every difficult assignment became a lesson.
      Every error message became part of the learning process.
      Every lab task became an opportunity to improve.
    </p>

    <h2>Learning the Fundamentals</h2>
    <p>
      One of the strongest parts of my journey has been learning the <b>fundamentals</b>.
      I strongly believe that in software engineering, fundamentals matter more than shortcuts.
      That is why I spent time focusing on the basics of programming, especially through subjects like <b>Structured Programming, Data Structures, Logic Building, and Discrete Mathematics</b>.
    </p>

    <p>
      I learned how to think step by step, how to break down a problem into smaller parts, how arrays and loops work, how conditions control logic, how functions improve structure, and how efficient thinking matters in programming.
      These ideas may look simple at first, but they form the backbone of everything bigger in software development.
    </p>

    <p>
      As I continued my studies, I became more comfortable with <b>C, Java, HTML, CSS, and JavaScript</b>.
      Each language taught me something different:
    </p>

    <ul>
      <li><b>C</b> taught me logic, structure, memory awareness, and discipline.</li>
      <li><b>Java</b> helped me understand object-oriented thinking and class-based design.</li>
      <li><b>HTML & CSS</b> gave me the power to structure and design web interfaces.</li>
      <li><b>JavaScript</b> opened the door to interactive web development and modern frontend growth.</li>
    </ul>

    <h2>Academic Projects That Built Confidence</h2>
    <p>
      One of the most valuable parts of studying at Daffodil International University has been the project-based learning experience.
      Academic projects gave me a chance to apply what I learned instead of keeping everything theoretical.
      That practical exposure helped me build confidence in my ability to create something real.
    </p>

    <p>
      Throughout my journey, I worked on multiple projects and assignments that improved both my coding ability and my problem-solving mindset.
      Some of the most meaningful ones include:
    </p>

    <ul>
      <li>
        <b>Mini Library Management System</b> — a structured programming lab project that helped me practice arrays, conditions, loops, strings, functions, and user-based logic in C.
      </li>
      <li>
        <b>Health Care Management System in C</b> — a larger and more ambitious project where I explored multi-role system thinking, data handling, appointments, billing concepts, and structured functionality.
      </li>
      <li>
        <b>Software Engineering requirement and modeling tasks</b> — where I learned how software is planned before development through use cases, traceability thinking, and requirement structure.
      </li>
      <li>
        <b>Presentation and seminar-based work</b> — which improved my communication ability and helped me become more confident in explaining technical concepts clearly.
      </li>
    </ul>

    <p>
      These projects taught me that software engineering is not only about making a program run.
      It is about building with purpose, thinking about users, organizing logic, and making a system easier to understand and maintain.
    </p>

    <img
      src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80"
      alt="Student working on laptop in university environment"
      style="width:100%; border-radius:16px; margin: 20px 0;"
    />

    <h2>Challenges That Made Me Stronger</h2>
    <p>
      Of course, the journey has not been easy.
      There were many moments when assignments felt overwhelming, deadlines felt stressful, and some topics seemed harder than expected.
      Sometimes understanding a concept took more time than I wanted.
      Sometimes debugging a program became frustrating.
      Sometimes balancing academic pressure with personal goals felt difficult.
    </p>

    <p>
      But I now understand that those difficult moments were some of the most valuable parts of my growth.
      They taught me patience.
      They taught me persistence.
      They taught me that improvement does not come from comfort—it comes from consistency.
    </p>

    <p>
      Every time I solved a difficult problem, fixed a bug, completed a project, or understood a confusing topic, I became more confident.
      Those moments proved to me that progress is built step by step.
    </p>

    <h2>Why My Journey Is More Than Just a Degree</h2>
    <p>
      For me, studying Software Engineering at Daffodil International University is not only about earning a certificate.
      It is about building the foundation of the career I want in the future.
      I do not want to be someone who only passes exams.
      I want to become someone who can actually <b>build software, solve problems, communicate professionally, and work confidently in real environments</b>.
    </p>

    <p>
      That is why I have also focused on areas beyond academics:
    </p>

    <ul>
      <li>Improving my <b>presentation skills</b></li>
      <li>Building a professional <b>portfolio website</b></li>
      <li>Learning about <b>personal branding</b> and online visibility</li>
      <li>Understanding the importance of <b>coding fundamentals in the AI era</b></li>
      <li>Exploring <b>React and the MERN stack</b> for modern web development</li>
      <li>Preparing myself for future <b>remote and international opportunities</b></li>
    </ul>

    <p>
      I believe this combination of academic learning and practical self-development is what will truly prepare me for the software industry.
    </p>

    <h2>My Vision as a Future Software Engineer</h2>
    <p>
      As I continue my journey, I see myself moving toward a future where I can contribute meaningfully as a software engineer and web developer.
      I want to build websites, applications, and systems that are useful, clean, and impactful.
      I want to keep learning modern technologies while staying strong in the fundamentals.
    </p>

    <p>
      I also want to grow into a professional who can work beyond borders.
      As someone from Bangladesh, I truly believe that with the right skills, mindset, and consistency, it is possible to compete globally.
      That belief motivates me every day.
    </p>

    <p>
      My dream is not only to get a job.
      My dream is to become valuable—to become someone whose skills, work ethic, and mindset create opportunities.
    </p>

    <h2>Final Reflection</h2>
    <p>
      Looking back, my journey at <b>Daffodil International University</b> has already taught me so much.
      It has taught me how to think logically, how to stay consistent, how to face challenges, and how to keep growing even when things feel difficult.
    </p>

    <p>
      And the most exciting part is this:
      I know I am still only at the beginning.
    </p>

    <p>
      There is still so much to learn, so much to build, and so much to achieve.
      But I am grateful for every step of this journey because each one is helping shape me into the software engineer I want to become.
    </p>

    <p>
      This journey is still in progress.
      And I am committed to making it meaningful.
    </p>
  `.trim(),
  },
  {
    slug: "presentation-skills",
    title: "The Importance of Presentation Skill",
    desc: "Why you should achieve the presentation skill and why it is important?",
    date: "2026-01-25",
    tags: ["career", "personal-brand"],
    readingTime: "3 min read",
    content: `
    <b>Presentation</b> means, to deliver the featured product or service in front of the interested people. It helps us to grow our business and also most important for networking. From University life to corporate life it is much needed. if you can serve good then you can sell good. <br /> <br />

    I think people will listen you when you can make feel them that you are needed to them. Otherwise no one will listen to you. But for this practice we need to maintain some key strategies that makes our presentation more attractive. Firstly, when we are prepared for any kind of presentation we need to be in formal. It makes a good impression to the audience. Secondly, our gestures should be controlled with our mind. If we feel nervous then our body language will make different bothering gestures that makes the audience negative impact on a presenter. <br /> <br />

    Thirdly, we need to make the perfect use of eye contact. It is very important when a presenter is presenting something. It attracts the listeners to make interested for the topic.  Fourhty, all presenters should be motivated while he/she is delivering his/her speech. This will grow the faith to himself/herself.  <br /> <br />

    Here are some key points for understandting the importance of it: <br /> <br />

    1. It helps in the career growth <br />
    2. For businessman it helps to win the business deals <br />
    3. For corporates or students it helps to make engagement between the presenter and the organization <br />
    4. For freshers it grows the networking with all over the field the presenter wants to reach <br />
    5. For any kind of international businesses it provides a critical competitive edge.<br /> <br />

    Ultimately, the ability to <b>"serve"</b> information well is the key to <b>"selling"</b> effectively in any environment. <br />
  `.trim(),
  },
  {
    slug: "ai-coding-fundamentals",
    title: "In the Age of AI, Coding Fundamentals Are More Important Than Ever",
    desc: "Why learning the basics still matters—even when AI can write code for you.",
    date: "2025-12-31",
    tags: ["development", "career"],
    readingTime: "6 min read",
    content: `
    We are living in the age of <b>Artificial Intelligence(Ai).</b> From student to corporate life it has become the daily fundamental need. Many people think that because AI can write code, generate solutions, and even build applications automatically, we no longer need to learn <b>“raw coding.”</b> But this idea is totally wrong. Let’s see how? <br /> <br />

    AI can help us, but AI cannot replace the understanding of how things work from the inside. When you learn raw coding, you learn the real logic behind a system. You understand how data flows, how a function works, how memory is used, and how errors are handled. Without these basic ideas, you cannot maintain any system—whether it’s built by humans or by AI. <br /> <br />

    Imagine you are working on a project, and AI writes the code for you. It might look perfect at first, but what if something breaks later? What if a server crashes? What if there is a security problem? At that moment, AI might not understand the exact context of your problem. You will need real coding knowledge to fix the issue. If you don’t know the basics, you will be helpless. <br /> <br />

    Also, AI-generated code is not always optimized. It may work, but it might not be the best solution. A developer who knows raw coding can improve performance, reduce bugs, and create more efficient designs. AI can give you shortcuts, but it cannot give you mastery. <br /> <br />

    Learning raw coding builds strong problem-solving ability. It trains your brain to think logically—step by step. This skill is needed in every tech job: <b>development, cybersecurity, data science, software testing, DevOps, and even AI</b> itself. <br /> <br />

    So yes, this is the age of AI. But AI is a tool, not a replacement for human knowledge. To become a true developer, engineer, or tech professional, you must know the roots. Raw coding is the foundation. AI makes things easier, but fundamentals make you powerful. <br />
  `.trim(),
  },

  {
    slug: "roadmap-mern",
    title: "My MERN learning roadmap (what I’d do again)",
    desc: "A simple order to learn MongoDB → Express → React → Node without getting overwhelmed.",
    date: "2025-12-31",
    tags: ["web-dev", "development"],
    readingTime: "5 min read",
    content: `
      <p>Here’s a clean path to learn MERN without getting stuck:</p>
      <h2>1) JavaScript fundamentals</h2>
      <p>Focus on <b>functions, async/await, arrays, objects, DOM, and modules</b>.</p>
      <h2>2) Node.js basics</h2>
      <p>Learn how Node runs JS on the server, file system, npm, and environment variables.</p>
      <h2>3) Express.js</h2>
      <p>Build a small REST API: routes, controllers, middleware, error handling.</p>
      <h2>4) MongoDB</h2>
      <p>Learn CRUD, schema design, indexes, and Mongoose models.</p>
      <h2>5) React</h2>
      <p>Components, hooks, routing, forms, and state management.</p>
      <h2>Project idea</h2>
      <p>Make a simple app: Auth + CRUD + dashboard.</p>
      <pre><code>// Tip: start with small endpoints
GET /api/items
POST /api/items
</code></pre>
      <p>If you want, later I’ll convert this blog into a full MERN blog with admin panel.</p>
    `.trim(),
  },

  {
    slug: "deploy-static-site",
    title: "Deploy a static website the easy way",
    desc: "A clean checklist to publish your portfolio/blog with a custom domain and HTTPS.",
    date: "2025-12-20",
    tags: ["web-dev", "development"],
    readingTime: "6 min read",
    content: `
      <p>
        Deploying a static site is one of the best skills for a developer. It makes you look professional,
        and it’s also useful for client work.
      </p>

      <h2>What is a static site?</h2>
      <p>
        A static site is usually HTML/CSS/JS that does not need a backend server to run.
        Examples: portfolio, blog, landing page, documentation site.
      </p>

      <h2>Best hosting options</h2>
      <ul>
        <li><b>Netlify</b> — very easy, great for beginners</li>
        <li><b>Vercel</b> — excellent for frontend projects</li>
        <li><b>GitHub Pages</b> — free and simple (great for portfolios)</li>
        <li><b>Cloudflare Pages</b> — fast global network</li>
      </ul>

      <h2>Deployment checklist</h2>
      <ul>
        <li><b>1) Clean file structure</b>: index.html at root, assets in folders</li>
        <li><b>2) Optimize images</b>: use WebP when possible</li>
        <li><b>3) Minify</b>: reduce large JS/CSS if needed</li>
        <li><b>4) Add SEO basics</b>: title, description, og tags</li>
        <li><b>5) Add favicon</b>: simple but important</li>
      </ul>

      <h2>Custom domain (simple explanation)</h2>
      <p>
        If you bought a domain (Namecheap/GoDaddy/etc.), you must connect DNS.
        Usually you set:
      </p>
      <ul>
        <li><b>A record</b> (points to an IP) or</li>
        <li><b>CNAME</b> (points to a hosting URL)</li>
      </ul>
      <p>
        Hosting platforms show you exactly what to add. DNS can take time to update (sometimes minutes, sometimes hours).
      </p>

      <h2>HTTPS (don’t skip this)</h2>
      <p>
        HTTPS makes your site secure and trusted. Most platforms provide free SSL automatically.
        Always enable HTTPS.
      </p>

      <h2>Quick “pro” tips</h2>
      <ul>
        <li>Add a <b>404 page</b> if your host supports it</li>
        <li>Use <b>relative links</b> correctly for pages</li>
        <li>Add <b>sitemap.xml</b> if it’s a blog with multiple pages</li>
        <li>Submit your site to <b>Google Search Console</b></li>
      </ul>

      <h2>Final thoughts</h2>
      <p>
        Static deployment is easy once you do it once. After that, you’ll be confident to deploy anything.
        If you want, I can also make a simple “deploy guide” PDF for your personal use.
      </p>
    `.trim(),
  },

  {
    slug: "react-component-structure",
    title: "React component structure that stays clean",
    desc: "A simple folder structure + naming style that keeps your project readable as it grows.",
    date: "2025-11-30",
    tags: ["web-dev", "development"],
    readingTime: "7 min read",
    content: `
      <p>
        A messy React project becomes painful very fast. The good news: you don’t need a complex structure.
        You just need a consistent one.
      </p>

      <h2>Simple structure that works</h2>
      <pre><code>src/
  components/
  pages/
  features/
  hooks/
  utils/
  styles/
</code></pre>

      <h2>What goes where?</h2>
      <ul>
        <li><b>components/</b> — reusable UI (Button, Card, Navbar)</li>
        <li><b>pages/</b> — route pages (Home, About, BlogPost)</li>
        <li><b>features/</b> — big feature modules (auth, dashboard, cart)</li>
        <li><b>hooks/</b> — custom hooks (useAuth, useFetch)</li>
        <li><b>utils/</b> — helpers (formatDate, validators)</li>
        <li><b>styles/</b> — global css and theme tokens</li>
      </ul>

      <h2>Example: feature-based organization</h2>
      <pre><code>src/
  features/
    auth/
      components/
      api/
      hooks/
      auth.routes.jsx
</code></pre>

      <h2>Naming rules that save your life</h2>
      <ul>
        <li>Components: <b>PascalCase</b> (UserCard.jsx)</li>
        <li>Hooks: <b>useSomething</b> (useUser.js)</li>
        <li>Utilities: <b>camelCase</b> (formatDate.js)</li>
        <li>Keep file names consistent with exports</li>
      </ul>

      <h2>One rule for clean code</h2>
      <p>
        Don’t make components do everything. If a component becomes too big:
        split into smaller components + move logic into hooks.
      </p>

      <h2>Small checklist before you ship</h2>
      <ul>
        <li>No duplicate logic (move to utils/hooks)</li>
        <li>Reusable UI stays inside components/</li>
        <li>Routes stay inside pages/</li>
        <li>Big features become modules inside features/</li>
      </ul>

      <h2>Final thoughts</h2>
      <p>
        Clean structure = easy debugging + faster teamwork + easier growth.
        If you want, I can also organize your full React project structure based on your current code.
      </p>
    `.trim(),
  },
];

const $ = (q) => document.querySelector(q);

function setYear() {
  const y = new Date().getFullYear();
  const el = $("#year");
  if (el) el.textContent = y;
}
function getQuery() {
  const params = new URLSearchParams(location.search);
  return Object.fromEntries(params.entries());
}
function formatDate(iso) {
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

// Mobile nav
function initMobileNav() {
  const burger = $("#burger");
  const mobile = $("#mobileNav");
  const close = $("#closeMobile");
  if (!burger || !mobile || !close) return;

  const open = () => {
    mobile.classList.add("show");
    mobile.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const shut = () => {
    mobile.classList.remove("show");
    mobile.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", open);
  close.addEventListener("click", shut);

  // Close when clicking overlay
  mobile.addEventListener("click", (e) => {
    if (e.target === mobile) shut();
  });

  // Close when clicking any menu link
  mobile
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", shut));
}

// Index page rendering
function renderIndex() {
  const root = $("#posts");
  if (!root) return;

  const searchInput = $("#search");
  const chips = $("#chips");
  const sort = $("#sort");
  const empty = $("#empty");

  let activeTag = "all";
  let keyword = "";

  const sortPosts = (arr) => {
    const mode = sort?.value || "new";
    const copy = [...arr];
    if (mode === "new") copy.sort((a, b) => b.date.localeCompare(a.date));
    if (mode === "old") copy.sort((a, b) => a.date.localeCompare(b.date));
    if (mode === "az") copy.sort((a, b) => a.title.localeCompare(b.title));
    return copy;
  };

  const matches = (post) => {
    const tagOk = activeTag === "all" || post.tags.includes(activeTag);
    const k = keyword.trim().toLowerCase();
    const keyOk =
      !k ||
      (post.title + " " + post.desc + " " + post.tags.join(" "))
        .toLowerCase()
        .includes(k);
    return tagOk && keyOk;
  };

  const card = (p) => {
    const tagLabel = p.tags[0]?.toUpperCase() || "POST";
    return `
      <a class="card" href="post.html?slug=${encodeURIComponent(p.slug)}">
        <div class="card__meta">
          <span class="pill">${tagLabel}</span>
          <span>${formatDate(p.date)}</span>
          <span>•</span>
          <span>${p.readingTime}</span>
        </div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc}</p>
        <span class="card__cta">Read <i class="bx bx-right-arrow-alt"></i></span>
      </a>
    `.trim();
  };

  const render = () => {
    const filtered = sortPosts(POSTS.filter(matches));
    root.innerHTML = filtered.map(card).join("\n");
    if (empty) empty.hidden = filtered.length > 0;
  };

  chips?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tag]");
    if (!btn) return;
    activeTag = btn.getAttribute("data-tag") || "all";
    [...chips.querySelectorAll(".chip")].forEach((c) =>
      c.classList.remove("active"),
    );
    btn.classList.add("active");
    render();
  });

  searchInput?.addEventListener("input", () => {
    keyword = searchInput.value || "";
    render();
  });

  sort?.addEventListener("change", render);

  render();
}

// Post page rendering
function renderPost() {
  const title = $("#postTitle");
  if (!title) return;

  const { slug } = getQuery();
  const post = POSTS.find((p) => p.slug === slug) || POSTS[0];

  $("#postTitle").textContent = post.title;
  $("#postDesc").textContent = post.desc;
  $("#postMeta").innerHTML = `
    <span class="pill">${post.tags[0]?.toUpperCase() || "POST"}</span>
    <span>${formatDate(post.date)}</span>
    <span>•</span>
    <span>${post.readingTime}</span>
  `;
  $("#postContent").innerHTML = post.content;

  const tags = $("#postTags");
  if (tags) {
    tags.innerHTML = post.tags
      .map((t) => `<span class="pill">${t}</span>`)
      .join("");
  }

  $("#copyLink")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      $("#copyLink").innerHTML = `<i class="bx bx-check"></i> Copied`;
      setTimeout(
        () =>
          ($("#copyLink").innerHTML = `<i class="bx bx-link"></i> Copy link`),
        1200,
      );
    } catch {}
  });
}

setYear();
initMobileNav();
renderIndex();
renderPost();
