import { Question } from "@elephant-games/game";

export declare class Element {
  readonly id: string;
  readonly name: string;
  readonly appearance?: string;
  readonly atomicMass?: number;
  readonly boil?: number;
  readonly category?: string;
  readonly color?: string;
  readonly density?: number;
  readonly discoveredBy?: string;
  readonly melt?: number;
  readonly molarHeat?: number;
  readonly namedBy?: string;
  readonly number: number;
  readonly period?: number;
  readonly phase?: string;
  readonly source?: string;
  readonly spectralImg?: string;
  readonly summary?: string;
  readonly symbol: string;
  readonly xpos?: number;
  readonly ypos?: number;
  readonly shells?: (number | null)[];
  readonly electronConfiguration?: string;
  readonly electronConfigurationSemantic?: string;
  readonly electronAffinity?: number;
  readonly electroNegativityPauling?: number;
  readonly ionizationEnergies?: (number | null)[];
  readonly cpkHex?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};

type ElementQuestion = Element & Question;

export type { ElementQuestion };