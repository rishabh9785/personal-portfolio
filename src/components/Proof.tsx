import {PenToolIcon, WrenchIcon, TrophyIcon} from "lucide-react"

const Proof = () => {
    const ProofOfWork = [
       { 
        links: ["https://flashy-droplet-e82.notion.site/Proof-of-Work-17764a8c24a6808ab79beea3c6e27c8c?pvs=74"
        ]
    }
];
    const ComplexProblemsSolved = [
        {
            links:"https://flashy-droplet-e82.notion.site/Complex-Problem-that-I-have-solved-1e764a8c24a680d98c9cf424125cc2a8?pvs=74"
        }
];

    const Certifications = [
        {
            links: ["https://flashy-droplet-e82.notion.site/Certifications-1d164a8c24a6805fb6d7ed279c2c3153?pvs=74"]
        }
];

return (
    <section id="proof" className="py-6 md:py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Proof of Work & Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
          <h3 className="text-xl font-semibold mb-3 flex items-center justify-center">
            <PenToolIcon className="mr-2" /> Proof of Work
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={ProofOfWork[0].links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 flex items-center justify-center"
                >
                  <span className="mr-2">→</span> View My Work Portfolio
                </a>
              </li>
              </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
           <h3 className="text-xl font-semibold mb-3 flex items-center justify-center">
            <WrenchIcon className="mr-2" /> Problem Solver
            </h3>
            <ul className="space-y-2">
                <li>
                    <a
                    href={ComplexProblemsSolved[0].links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center justify-center"
                    >
                        <span className="mr-2 inline-block w-4">→</span> Complex Problems Solved
                    </a>
              </li>
            </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
           <h3 className="text-xl font-semibold mb-3 flex items-center justify-center">
            <TrophyIcon className="mr-2" /> Certifications
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={Certifications[0].links[0]}
                  target="_blank" 
                  rel="noopener noreferrer"
                 className="text-primary hover:text-primary/80 flex items-center justify-center"
                >
                  <span className="mr-2">→</span> View My Certifications
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
)

};

export default Proof;