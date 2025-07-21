import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> July 21, 2025</p>
      <p>
        This Privacy Policy explains how we collect, use, and protect your information when you use our Facebook automation tool ("the App").
      </p>
      <h2>1. Information We Collect</h2>
      <p>
        We may access the following information through the Facebook Graph API:
      </p>
      <ul>
        <li>Your Facebook Page ID</li>
        <li>The ability to post content on your behalf</li>
      </ul>
      <p>
        We do not collect, store, or share any personal data beyond what's necessary to automate posts to your Facebook Page.
      </p>
      <h2>2. How We Use Information</h2>
      <p>
        The access granted is solely used to automate posting pre-generated content to your Facebook Page using the Graph API through our workflow automation system (n8n).
      </p>
      <h2>3. Data Security</h2>
      <p>
        We do not store access tokens or any personal data on our servers. All automation is handled securely via local workflows or trusted third-party platforms like n8n.
      </p>
      <h2>4. Third-Party Services</h2>
      <p>
        Our tool integrates with Facebook's API and may utilize other services such as n8n for automation. Please refer to their privacy policies as well.
      </p>
      <h2>5. Your Rights</h2>
      <p>
        You can revoke access at any time through your Facebook account settings.
      </p>
      <h2>6. Contact</h2>
      <p>
        If you have any questions, please contact us at <a href="mailto:samchuks898@gmail.com">samchuks898@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy; 