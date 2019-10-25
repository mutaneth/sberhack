package ru.sbrf.school21.sberhack.service;

import com.google.api.client.auth.oauth.OAuthRsaSigner;
import com.google.api.client.repackaged.org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.sbrf.school21.sberhack.dao.Properties;
import ru.sbrf.school21.sberhack.entity.JiraOAuthGetAccessToken;
import ru.sbrf.school21.sberhack.entity.JiraOAuthGetTemporaryToken;
import com.google.api.client.http.apache.ApacheHttpTransport;

import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;

@Service
public class TokenFactory {
    private final String accessTokenUrl;
    private final String requestTokenUrl;

    public TokenFactory() {
        accessTokenUrl = Properties.getJiraHome() + "/plugins/servlet/oauth/access-token";
        requestTokenUrl = Properties.getJiraHome() + "/plugins/servlet/oauth/request-token";
    }

    public JiraOAuthGetAccessToken getAccessToken(String tmpToken, String secret) throws NoSuchAlgorithmException, InvalidKeySpecException {
        final String consumerKey = Properties.getConsumerKey();
        final String privateKey = Properties.getPrivateKey();
        JiraOAuthGetAccessToken accessToken = new JiraOAuthGetAccessToken(accessTokenUrl);
        accessToken.consumerKey = consumerKey;
        accessToken.signer = getOAuthRsaSigner(privateKey);
        accessToken.transport = new ApacheHttpTransport();
        accessToken.verifier = secret;
        accessToken.temporaryToken = tmpToken;
        return accessToken;
    }

    public JiraOAuthGetTemporaryToken getTemporaryToken() throws NoSuchAlgorithmException, InvalidKeySpecException {
        final String consumerKey = Properties.getConsumerKey();
        final String privateKey = Properties.getPrivateKey();
        JiraOAuthGetTemporaryToken oAuthGetTemporaryToken = new JiraOAuthGetTemporaryToken(requestTokenUrl);
        oAuthGetTemporaryToken.consumerKey = consumerKey;
        oAuthGetTemporaryToken.signer = getOAuthRsaSigner(privateKey);
        oAuthGetTemporaryToken.transport = new ApacheHttpTransport();
        oAuthGetTemporaryToken.callback = "oob";
        return oAuthGetTemporaryToken;
    }

    private OAuthRsaSigner getOAuthRsaSigner(String privateKey) throws NoSuchAlgorithmException, InvalidKeySpecException {
        OAuthRsaSigner oAuthRsaSigner = new OAuthRsaSigner();
        oAuthRsaSigner.privateKey = getPrivateKey(privateKey);
        return oAuthRsaSigner;
    }

    private PrivateKey getPrivateKey(String privateKey) throws NoSuchAlgorithmException, InvalidKeySpecException {
        byte[] privateBytes = Base64.decodeBase64(privateKey);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privateBytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return kf.generatePrivate(keySpec);
    }
}
