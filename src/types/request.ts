export interface WithdrawRequest extends Record<string, unknown> {
  amount: number;
}
export interface UpdateStudyRequest extends Record<string, unknown> {
  title: string;
  tags: string[];
  description: string;
}
