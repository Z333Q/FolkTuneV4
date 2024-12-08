import { OAuthConfig, OAuthUserConfig } from "next-auth/providers";

interface TikTokProfile {
  data: {
    user: {
      id: string;
      username: string;
      avatar_url: string;
      display_name: string;
      email: string;
    };
  };
}

export default function TikTokProvider<P extends TikTokProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "tiktok",
    name: "TikTok",
    type: "oauth",
    authorization: {
      url: "https://www.tiktok.com/auth/authorize/",
      params: {
        scope: "user.info.basic",
        response_type: "code",
        client_key: options.clientId,
      },
    },
    token: "https://open-api.tiktok.com/oauth/access_token/",
    userinfo: "https://open-api.tiktok.com/user/info/",
    profile(profile) {
      return {
        id: profile.data.user.id,
        name: profile.data.user.display_name,
        email: profile.data.user.email,
        image: profile.data.user.avatar_url,
      };
    },
    style: {
      logo: "/tiktok.svg",
      logoDark: "/tiktok-dark.svg",
      bg: "#000000",
      text: "#ffffff",
      bgDark: "#ffffff",
      textDark: "#000000",
    },
    options,
  };
}