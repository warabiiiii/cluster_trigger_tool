import { Trigger, JsonFormat } from "../types/Trigger";

export const triggersToTriggerJsonText = (triggers: Trigger[]): string => {
  const jsonFormat: JsonFormat = {
    triggers: triggers.map((trigger) => ({
      displayName: trigger.displayName,
      category: trigger.category,
      showConfirmDialog: trigger.showConfirmDialog,
      color: [
        trigger.color.r / 256,
        trigger.color.g / 256,
        trigger.color.b / 256,
      ],
      state: trigger.state.map((state) => {
        switch (state.type) {
          case "signal": {
            return {
              key: state.key,
              type: state.type,
            };
          }
          case "integer":
          case "float": {
            return {
              key: state.key,
              type: state.type,
              value: state.value,
            };
          }
          case "bool": {
            return {
              key: state.key,
              type: state.type,
              value: state.value,
            };
          }
          default: {
            throw new Error("unknown TriggerType");
          }
        }
      }),
    })),
  };
  return JSON.stringify(jsonFormat, null, "  ");
};

export const triggerJsonTextToTriggers = (
  triggerJson: JsonFormat,
): Trigger[] => {
  return triggerJson.triggers.map((trigger) => ({
    displayName: trigger.displayName,
    category: trigger.category || "",
    showConfirmDialog: trigger.showConfirmDialog,
    color: trigger.color
      ? {
          r: Math.floor(trigger.color[0] * 256),
          g: Math.floor(trigger.color[1] * 256),
          b: Math.floor(trigger.color[2] * 256),
        }
      : {
          r: 256,
          g: 256,
          b: 256,
        },
    state: trigger.state.map((state) => {
      switch (state.type) {
        case "signal": {
          return {
            key: state.key,
            type: state.type,
          };
        }
        case "integer":
        case "float": {
          return {
            key: state.key,
            type: state.type,
            value: state.value,
          };
        }
        case "bool": {
          return {
            key: state.key,
            type: state.type,
            value: state.value,
          };
        }
        default: {
          throw new Error("unknown TriggerType");
        }
      }
    }),
  }));
};
