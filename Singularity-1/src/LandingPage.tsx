import {ArrowRight, BookOpen, Bot, Braces, FileCheck2, Github, Layers3, Scale, ShieldCheck, Sparkles} from 'lucide-react';

const cloudApp = 'https://ais-pre-67bjrhkutnv3a34zametcr-219346993343.asia-southeast1.run.app';
const repository = 'https://github.com/stpaul2coderdojo/Singularity-oneproject-';
const capabilities = [
  {icon: Bot, number: '01', title: 'Formulate', copy: 'Isolate research gaps and translate an exploratory idea into a precise, testable problem.'},
  {icon: Braces, number: '02', title: 'Synthesize', copy: 'Develop algorithms, proofs, equations and publication structure through a coordinated agent pipeline.'},
  {icon: Scale, number: '03', title: 'Review', copy: 'Score every draft against a six-dimensional human rubric and turn critique into the next revision.'},
  {icon: FileCheck2, number: '04', title: 'Publish', copy: 'Export academic PDF, LaTeX and BibTeX with a durable GitHub provenance trail.'},
];
const rubric = [['Novelty', '25'], ['Technical rigor', '25'], ['Empirical significance', '20'], ['Clarity', '15'], ['Reproducibility', '10'], ['Ethics & alignment', '05']];

export default function LandingPage() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Singularity-1 home"><span className="brand-mark">S1</span><span>SINGULARITY—1</span></a>
      <nav aria-label="Primary navigation"><a href="#system">System</a><a href="#rubric">Rubric</a><a href={repository} target="_blank" rel="noreferrer">Source</a></nav>
      <a className="header-cta" href={cloudApp} target="_blank" rel="noreferrer">Open platform <ArrowRight size={16}/></a>
    </header>
    <section className="hero" id="top">
      <div className="orb orb-one" aria-hidden="true"/><div className="orb orb-two" aria-hidden="true"/>
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={15}/> OPEN SCIENCE · HUMAN-GUIDED AI</p>
        <h1>Research ideas,<br/><em>made rigorous.</em></h1>
        <p className="hero-lede">Singularity‑1 is a multi-agent research copilot for formulating frontier problems, composing mathematical preprints and refining them through human review.</p>
        <div className="hero-actions">
          <a className="primary-button" href={cloudApp} target="_blank" rel="noreferrer">Launch Singularity‑1 <ArrowRight size={18}/></a>
          <a className="text-link" href={repository} target="_blank" rel="noreferrer"><Github size={18}/> View on GitHub</a>
        </div>
      </div>
      <div className="system-card" aria-label="Singularity-1 synthesis loop">
        <div className="card-topline"><span>ACTIVE PIPELINE</span><span className="status"><i/> HUMAN IN THE LOOP</span></div>
        <div className="pipeline">
          <div className="pipeline-node active"><Bot size={20}/><span>Problem<br/>Formulation</span><b>01</b></div><div className="connector"/>
          <div className="pipeline-node"><Layers3 size={20}/><span>Solution<br/>Architect</span><b>02</b></div><div className="connector"/>
          <div className="pipeline-node"><BookOpen size={20}/><span>Publication<br/>Composer</span><b>03</b></div>
        </div>
        <div className="equation"><span>R(x, y)</span><strong>= Σ w<sub>k</sub> · S<sub>k</sub>(x, y) + λΨ<sub>critique</sub>(y)</strong></div>
        <div className="card-footer"><ShieldCheck size={16}/> Rubric-as-Rewards · v2.4</div>
      </div>
    </section>
    <section className="manifesto"><p>From a question to a citable artifact.</p><span>One continuous, inspectable research loop.</span></section>
    <section className="system-section" id="system">
      <div className="section-heading"><div><p className="eyebrow">THE SYSTEM</p><h2>A disciplined path from<br/>curiosity to publication.</h2></div></div>
      <div className="capability-grid">{capabilities.map(({icon: Icon, number, title, copy}) => <article className="capability" key={title}><div className="capability-meta"><Icon size={22}/><span>{number}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
    <section className="rubric-section" id="rubric">
      <div className="rubric-copy"><p className="eyebrow">CALIBRATED OVERSIGHT</p><h2>Human judgment remains the compass.</h2><p>Singularity‑1 turns peer review into a structured learning signal. Six weighted dimensions expose why a draft succeeds—and exactly where it needs another pass.</p><a className="text-link light" href={`${repository}/blob/main/wiki/RLHF-Rubric-v2.4.md`} target="_blank" rel="noreferrer">Read the complete rubric <ArrowRight size={17}/></a></div>
      <div className="rubric-list">{rubric.map(([label, value]) => <div className="rubric-row" key={label}><span>{label}</span><div><i style={{width: `${Number(value) * 4}%`}}/></div><strong>{value}%</strong></div>)}</div>
    </section>
    <section className="final-cta"><p className="eyebrow">SINGULARITY—1</p><h2>Start with the question<br/>that will not leave you alone.</h2><a className="primary-button inverse" href={cloudApp} target="_blank" rel="noreferrer">Enter the research platform <ArrowRight size={18}/></a></section>
    <footer><div className="brand"><span className="brand-mark">S1</span><span>SINGULARITY—1</span></div><p>St. Paul CoderDojo · Open science research initiative</p><a href={repository} target="_blank" rel="noreferrer"><Github size={17}/> Apache 2.0</a></footer>
  </main>;
}
