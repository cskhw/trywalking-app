import auth from "@/api/service/auth";
import users from "@/api/service/users";
import log from "@/api/service/kafka/log";

export default {
  auth: auth,
  users: users,
  kafka: {
    log: log,
  },
};
