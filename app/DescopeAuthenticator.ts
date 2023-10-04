import type { StrategyVerifyCallback } from "remix-auth";

import type {
  OAuth2Profile,
  OAuth2StrategyVerifyParams,
} from "remix-auth-oauth2";
import { OAuth2Strategy } from "remix-auth-oauth2";

export interface DescopeStrategyOptions {
  domain: string;
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  scope: string;
}

export interface DescopeExtraParams extends Record<string, string | number> {
  scope: string;
}

export interface DescopeProfile extends OAuth2Profile {
  loginId: string;
  displayName: string;
  _json: {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    phone_number: string;
    phone_number_verified: boolean;
  };
}

export class DescopeAuthenticator<User> extends OAuth2Strategy<
  User,
  DescopeProfile,
  DescopeExtraParams
> {
  name = "DescopeAuthenticator";

  private userInfoURL: string;

  // We receive our custom options and our verify callback
  constructor(
    options: DescopeStrategyOptions,
    verify: StrategyVerifyCallback<
      User,
      OAuth2StrategyVerifyParams<DescopeProfile, DescopeExtraParams>
    >
  ) {
    super(
      {
        authorizationURL: `https://${options.domain}/oauth2/v1/authorize`,
        tokenURL: `https://${options.domain}/oauth2/v1/token`,
        clientID: options.clientID,
        clientSecret: options.clientSecret,
        callbackURL: options.callbackURL,
      },
      verify
    );

    this.userInfoURL = `https://${options.domain}/oauth2/v1/userinfo`;
    this.scope = "openid profile email";
    this.audience = options.audience;
  }

  protected authorizationParams() {
    const urlSearchParams: Record<string, string> = {
      scope: this.scope,
    };

    if (this.audience) {
      urlSearchParams.audience = this.audience;
    }

    return new URLSearchParams(urlSearchParams);
  }
  protected async userProfile(accessToken: string): Promise<DescopeProfile> {
    let response = await fetch(this.userInfoURL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    let data: DescopeProfile["_json"] = await response.json();

    let profile: DescopeProfile = {
      loginId: "test",
      provider: "descope",
      displayName: data.name,
      id: data.sub,
      _json: data,
    };

    return profile;
  }
}
