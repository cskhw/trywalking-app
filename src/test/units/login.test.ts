import { describe, it, expect } from "vitest";
import api from "@/api/api";
import instance from "@/api/instance";
import type { LoginResponse } from "@/api/schema/response";

describe.skip("pages/index.vue", () => {
  it("choonsik login", async () => {
    const res = await api.auth.signin({
      username: "choonsik",
      password: "asdf1234!",
    });
    // status 프로퍼티 검사
    expect(res).haveOwnProperty("status");
    // expect가 성공했는지 검사
    expect(res.status).toBe(200);
    // access_token의 타입이 string인지 검사
    expect(res.data.accessToken).toBeTypeOf("string");
  });
});
