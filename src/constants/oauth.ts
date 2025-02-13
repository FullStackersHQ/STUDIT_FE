const CLIENT_ID: string = import.meta.env.KAKAO_API;
const REDIRECT_URI: string = import.meta.env.REDIRECT_URL;

export const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
