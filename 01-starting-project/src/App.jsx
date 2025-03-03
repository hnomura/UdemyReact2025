import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', props', 'state'
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  console.log("APP executed with selectedTopic = ", selectedTopic);

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic == "components"}
              onSelect={() => handleSelect("components")}
            >
              {" "}
              Components{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              {" "}
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onSelect={() => handleSelect("props")}
            >
              {" "}
              Props{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onSelect={() => handleSelect("state")}
            >
              {" "}
              State{" "}
            </TabButton>
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started for react!</h2>
      </main>
    </>
  );
}

export default App;
