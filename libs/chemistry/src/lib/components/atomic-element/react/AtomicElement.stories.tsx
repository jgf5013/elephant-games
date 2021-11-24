
import { Meta, Story } from '@storybook/react';
import { AtomicElement, Element } from '@elephant-games/chemistry';

export default {
  title: 'Example/AtomicElement',
  component: AtomicElement,
  argTypes: {
    atomicElement: { name: 'atomicElement'}
  }
} as Meta;

const Template: Story<{atomicElement: Element}> = (args) => <AtomicElement {...args} />;

export const Nitrogen = Template.bind({});
Nitrogen.args = {
  atomicElement: {
      id: '1',
      name: 'Nitrogen',
      appearance: 'colorless gas, liquid or solid',
      atomicMass: 14.007,
      boil: 77.355,
      category: 'diatomic nonmetal',
      density: 1.251,
      discoveredBy: 'Daniel Rutherford',
      melt: 63.15,
      namedBy: 'Jean-Antoine Chaptal',
      number: 7,
      period: 2,
      phase: 'Gas',
      source: 'https://en.wikipedia.org/wiki/Nitrogen',
      spectralImg: 'https://en.wikipedia.org/wiki/File:Nitrogen_Spectra.jpg',
      summary: 'Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.',
      symbol: 'N',
      xpos: 15,
      ypos: 2,
      shells: [
          2, 5
      ],
      electronConfiguration: '1s2 2s2 2p3',
      electronConfigurationSemantic: '[He] 2s2 2p3',
      electronAffinity: -6.8,
      electroNegativityPauling: 3.04,
      ionizationEnergies: [
          1402.3, 2856, 4578.1, 7475, 9444.9, 53266.6, 64360
      ],
      cpkHex: '3050f8'
    }
};

export const Sodium = Template.bind({});
Sodium.args = {
  atomicElement: {
      id: '1',
      name: 'Sodium',
      appearance: 'silvery white metallic',
      atomicMass: 22.989769282,
      boil: 1156.09,
      category: 'alkali metal',
      density: 0.968,
      discoveredBy: 'Humphry Davy',
      melt: 370.944,
      molarHeat: 28.23,
      number: 11,
      period: 3,
      phase: 'Solid',
      source: 'https://en.wikipedia.org/wiki/Sodium',
      spectralImg: 'https://en.wikipedia.org/wiki/File:Sodium_Spectra.jpg',
      summary: 'Sodium /ˈsoʊdiəm/ is a chemical element with symbol Na (from Ancient Greek Νάτριο) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.',
      symbol: 'Na',
      xpos: 1,
      ypos: 3,
      shells: [
          2, 8, 1
      ],
      electronConfiguration: '1s2 2s2 2p6 3s1',
      electronConfigurationSemantic: '[Ne] 3s1',
      electronAffinity: 52.867,
      electroNegativityPauling: 0.93,
      ionizationEnergies: [
          495.8, 4562, 6910.3, 9543, 13354, 16613, 20117, 25496, 28932, 141362, 159076
      ],
      cpkHex: 'ab5cf2'
    }
};