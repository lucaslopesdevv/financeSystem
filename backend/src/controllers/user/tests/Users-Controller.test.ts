import { prisma } from "../../../lib/prisma";
import { UsersController } from "../UsersController";
import { describe, it, vitest, expect, vi } from "vitest";

interface ResponseUserControllerProps {
  error: string;
  status: number;
}

describe("UsersController", () => {
  const usersController = new UsersController();

  it("should create a new user", async () => {
    const req = {
      body: {
        username: "testuser",
        email: "testuser@example.com",
        password: "password123",
      },
    };

    const res = {
      send: (data: any) => {
        expect(data).toEqual(200);
      },
      status: (statusCode: any) => {
        return {
          send: (data: any) => {
            expect(statusCode).toEqual(200);
          },
        };
      },
    };
  });

  it("should handle create user errors", async () => {
    const req = {
      body: {
        username: "",
        email: "",
        password: "",
      },
    };

    const res = {
      send: ({ error, status }: ResponseUserControllerProps) => {
        expect(error).toEqual("Erro ao criar usuário");
        expect(status).toEqual(500);
      },
    };

    await usersController.create(req, res);
  });

  it("should get a list of users", async () => {
    const req = {};
    const users = [{ username: "teste-primeiro" }];
    prisma.user.findMany = vi.fn().mockResolvedValue(users);

    const result = await usersController.show(req);

    expect(result).toEqual(users);
  });
});
