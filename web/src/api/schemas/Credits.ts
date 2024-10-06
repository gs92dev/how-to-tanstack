import { z } from "zod";

export const GetCreditsSchema = z.object({
  credits: z.number(),
});
export const DeleteCreditsSchema = z.void();
export type DeleteCreditsResponse = z.infer<typeof DeleteCreditsSchema>;
export type GetCreditsResponse = z.infer<typeof GetCreditsSchema>;

export type PostCreditsBody = {
  multiplier: 0 | 1 | 2 | 3;
};
export const PostCreditsSchema = z.object({});
export type PostCreditsResponse = z.infer<typeof PostCreditsSchema>;

declare global {
  interface GetEndpoints {
    "/rest/credits": () => GetCreditsResponse;
  }
  interface PostEndpoints {
    "/rest/credits": (
      params: undefined,
      body: PostCreditsBody
    ) => PostCreditsResponse;
  }
}
