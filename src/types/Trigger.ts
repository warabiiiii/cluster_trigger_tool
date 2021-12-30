export type TriggerType = "bool" | "integer" | "float" | "signal";
export type TriggerState =
  | {
      key: string;
      type: "bool";
      value: boolean;
    }
  | {
      key: string;
      type: "integer";
      value: number;
    }
  | {
      key: string;
      type: "float";
      value: number;
    }
  | {
      key: string;
      type: "signal";
    };
export type TriggerColor = {
  r: number;
  g: number;
  b: number;
};
export type Trigger = {
  category: string;
  displayName: string;
  color: TriggerColor;
  showConfirmDialog: boolean;
  state: TriggerState[];
};

export type JsonFormat = {
  triggers: Array<{
    displayName: string;
    showConfirmDialog: boolean;
    state: TriggerState[];
    category?: string;
    color?: [number, number, number];
  }>;
};
