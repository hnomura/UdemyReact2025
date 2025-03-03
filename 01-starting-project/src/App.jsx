import {useState} from "react"; 

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleSelect(selectedButton) { 
    // selectedButton => 'components', 'jsx', props', 'state'
    // console.log(selectedButton);
    setSelectedTopic(selectedButton); 
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* basic property passing */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* property via spread operator */ }
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('component')}> Components </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}> JSX </TabButton>
            <TabButton onSelect={() => handleSelect('props')}> Props </TabButton>
            <TabButton onSelect={() => handleSelect('state')}> State </TabButton>
          </menu> 
          {selectedTopic}
        </section>
        <h2>Time to get started for react!</h2>
      </main>
    </>
  );
}

export default App;
