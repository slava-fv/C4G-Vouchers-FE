import { message as antMessage } from "antd";

export default {
  success(message) {
    return antMessage.success(message);
  },

  error(message) {
    return antMessage.error(message);
  },
};
