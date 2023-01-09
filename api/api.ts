import auth from "@/api/service/auth";
import users from "@/api/service/users";
import log from "@/api/service/kafka/log";
import test from "@/api/service/test";

export default {
  auth: auth,
  users: users,
  kafka: {
    log: log,
  },
  test: test,
};
